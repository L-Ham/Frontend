import {useState} from 'react';
import {useCreatePostPage} from '../../../../createpostpage.context.js';
import {usePostCreation} from '../../postcreationcontext.js';
import {axiosInstance as axios} from '../../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../../requests/routes.js';
import {validateLink} from '../../../../../../generic components/utils.js';
import {useNotifications} from '../../../../../../generic components/Notifications/notificationsContext.js';

export const useActionButtons = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const {addNotification} = useNotifications();
    const {activeTab, setFiles, postTitle,
        text, files, link, pollData, isSendPostNotifications, postTags,
        scheduledData, setScheduledData} = usePostCreation();
    const {about, setIsScheduleFormVisble, isScheduleFormVisble} = useCreatePostPage();
    const subredditId = about?.communityDetails?.subredditId;

    const handleSaveDraft = () => {
        addNotification({message: 'Drafts are not supported yet :(', type: 'failure'});
    };

    const handleCancel = () => setFiles([]);

    const handleClick = activeTab === 'img' ? handleCancel : handleSaveDraft;
    const btnText = activeTab === 'img' ? 'Cancel' : 'Save Draft';

    let canPost = postTitle.length > 10;
    switch (activeTab) {
    case 'post':
        canPost = canPost && text.length > 0;
        break;
    case 'img':
        canPost = canPost && files.length > 0;
        break;
    case 'link':
        canPost = canPost && link.length > 0 && validateLink(link);
        break;
    case 'poll':
        console.log('pollData', pollData);
        canPost = canPost && pollData.options[0].length > 0 && pollData.options[1].length > 0 && text.length > 0;
        break;
    default:
        break;
    }

    const handleSchedule = () => {
        setIsScheduleFormVisble(true);
    };

    const handlePost = async () => {
        if (about == null) {
            addNotification({message: 'Please select a community', type: 'failure'});
            return;
        }
        const isScheduled = scheduledData.Date && scheduledData.Time;
        console.log('isScheduled', isScheduled);

        const formData = new FormData();
        // to be used in image and video upload

        const postData = {
            subRedditId: subredditId,
            title: postTitle,
            isNSFW: postTags.includes('NSFW'),
            isSpoiler: postTags.includes('SPOILER'),
            isLocked: false,
            isSendPostNotifications: isSendPostNotifications,
        };

        formData.append('subRedditId', subredditId);
        formData.append('title', postTitle);
        formData.append('isNSFW', postTags.includes('NSFW'));
        formData.append('isSpoiler', postTags.includes('SPOILER'));
        formData.append('isLocked', false);
        formData.append('isSendPostNotifications', isSendPostNotifications);


        switch (activeTab) {
        case 'img':
            // postData.files = files;
            postData.type = files[0].type.includes('video') ? 'video' : 'image';
            formData.append('type', files[0].type.includes('video') ? 'video' : 'image');
            files.forEach((file) => {
                formData.append('file', file, file.name);
            });
            break;
        case 'link':
            postData.url = link;
            postData.type = 'link';
            break;
        case 'poll':
            postData.text = text;
            postData['poll.options'] = Object.values(pollData.options);
            postData['pollData.votingLength'] = pollData.votingLength;
            postData['pollData.startTime'] = new Date().toISOString();
            postData['pollData.endTime'] = new Date(new Date().getTime() + pollData.votingLength * 60000).toISOString();
            postData.type = 'poll';
            break;
        case 'post':
            postData.text = text;
            postData.type = 'text';
            break;
        default:
            break;
        }

        try {
            if (activeTab === 'img' || activeTab === 'link') {
                const response = await axios.post(API_ROUTES.createPost, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                addNotification({message: response.data.message, type: 'success'});
            } else {
                const response = await axios.post(API_ROUTES.createPost, postData);
                addNotification({message: response.message, type: 'success'});
            }
        } catch (error) {
            addNotification({message: error.response.data.message, type: 'failure'});
            console.error('Failed to create post:', error);
        }
    };

    return {
        handlePost,
        handleClick,
        btnText,
        canPost,
        errorMessage,
        setErrorMessage,
        handleSchedule,
        scheduledData,
        setScheduledData,
        isScheduleFormVisble,
        setIsScheduleFormVisble,
    };
};
