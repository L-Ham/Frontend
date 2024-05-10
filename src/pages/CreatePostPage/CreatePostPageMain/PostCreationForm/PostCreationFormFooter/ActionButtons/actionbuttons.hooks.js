/* eslint-disable*/
import {useState} from 'react';
import {useCreatePostPage} from '../../../../createpostpage.context.js';
import {usePostCreation} from '../../postcreationcontext.js';
import {axiosInstance as axios} from '../../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../../requests/routes.js';
import {validateLink} from '../../../../../../generic components/utils.js';
import {useNotifications} from '../../../../../../generic components/Notifications/notificationsContext.js';
import {useSelector} from 'react-redux';

export const useActionButtons = () => {
    const {about, setIsScheduleFormVisble, isScheduleFormVisble} = useCreatePostPage();
    const [errorMessage, setErrorMessage] = useState('');
    const {addNotification} = useNotifications();
    const {activeTab, setFiles, postTitle,
        text, files, link, pollData, isSendPostNotifications, postTags,
        scheduledData, setScheduledData} = usePostCreation();
    const username = useSelector((state) => state.user.username);
    const userid = useSelector((state) => state.user.userId);

    if (!about) return {};

    const subredditId = about?.communityDetails?.subredditId || null;
    const isUserProfilePost = subredditId === null;
    const subredditName = about?.communityDetails?.name || null;
    const isMember = about?.communityDetails?.isMember;

    // console.log('isMember',isMember);
    // console.log('isUserProfile',isUserProfilePost);


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
        // console.log('pollData', pollData);
        canPost = canPost && pollData.options[0].length > 0 && pollData.options[1].length > 0 && text.length > 0;
        break;
    default:
        break;
    }

    const handleSchedule = () => {
        setIsScheduleFormVisble(true);
    };


    const handlePost = async () => {
        const formData = new FormData();

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

        const isScheduled = scheduledData.Date != '' && scheduledData.Time != '';
        // calculate the total number of minutes to schedule the post
        // from the date and time selected by the user
        if (isScheduled) {
            const [hours, minutes] = scheduledData.Time.split(':');
            const [year, month, day] = scheduledData.Date.split('-');
            const scheduledDate = new Date(year, month - 1, day, hours, minutes);
            const currentDate = new Date();
            // calulate the difference between the scheduled date and the current date
            const diff = scheduledDate - currentDate; // milliseconds

            if (diff < 0) {
                addNotification({message: 'Please select a future date and time', type: 'failure'});
                return;
            }
            // convert the difference to minutes
            const scheduledMinutes = Math.floor(diff / 60000);

            postData['scheduledMinutes'] = scheduledMinutes;
            formData.append('scheduledMinutes', scheduledMinutes);
        }


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
            formData.append('text', text);
            Object.values(pollData.options).forEach((value) => {
                formData.append('poll.options[]', value);
            });
            formData.append('pollData.startTime', new Date().toISOString());
            formData.append('pollData.endTime',
                new Date(new Date().getTime() + pollData.votingLength * 60000).toISOString());
            formData.append('poll.votingLength', pollData.votingLength);
            formData.append('type', 'poll');
            // console.log(formData);
            break;
        case 'post':
            postData.text = text;
            postData.type = 'text';
            break;
        default:
            break;
        }

        if (((isMember == false) && (isUserProfilePost == false))) {
            addNotification({message: 'You need to join the community to post', type: 'failure'});
            return;
        }

        try {
            const postRoute = isScheduled ? API_ROUTES.addScheduledPost : API_ROUTES.createPost;
            const postPayload = activeTab === 'img' || activeTab === 'poll' ?
                formData : postData;
            const postHeaders = activeTab === 'img' || activeTab === 'poll' ?
                {headers: {'Content-Type': 'multipart/form-data'}} : {};

            await axios.post(postRoute, postPayload, postHeaders);

            const redirectRoute = isUserProfilePost ? `/user/${username}/posts` : `/r/${about.communityDetails.name}`;
            window.open(redirectRoute, '_self');
        } catch (error) {
            const errorMessage = error.response ? error.response.message : 'unrecognized error please try again later';
            addNotification({message: errorMessage, type: 'failure'});
            // console.error('Failed to create post:', error);
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
