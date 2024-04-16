import {useState} from 'react';
import {useCreatePostPage} from '../../../../createpostpage.context.js';
import {usePostCreation} from '../../postcreationcontext.js';
import {axiosInstance as axios} from '../../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../../requests/routes.js';

export const useActionButtons = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const {activeTab, setFiles, postTitle,
        text, files, link, pollData, isSendPostNotifications, postTags} = usePostCreation();
    const {about} = useCreatePostPage();
    const subredditId = about?.communityDetails?.subredditId;

    if (!subredditId) {
        return {canDisplay: false};
    }

    const handleSaveDraft = () => alert('Not supported yet :)');
    const handleCancel = () => setFiles([]);

    const handleClick = activeTab === 'img' ? handleCancel : handleSaveDraft;
    const btnText = activeTab === 'img' ? 'Cancel' : 'Save Draft';

    let canPost = postTitle.length > 0;
    switch (activeTab) {
    case 'post':
        canPost = postTitle.length >= 10 && text.length > 0;
        break;
    case 'img':
        canPost = files.length > 0;
        break;
    case 'link':
        canPost = link.length > 0;
        break;
    case 'poll':
        canPost = pollData.options[0].length > 0 && pollData.options[1].length > 0;
        break;
    default:
        break;
    }

    const handlePost = async () => {
        const fileData = new FormData();
        const post = {
            title: postTitle,
            subRedditId: subredditId,
            type: activeTab,
            isNSFW: postTags.includes('NSFW'),
            isSpoiler: postTags.includes('SPOILER'),
            isLocked: false,
            isSendPostNotifications,
        };

        switch (activeTab) {
        case 'img':
            fileData.append('file', files[0]);
            post.type = files[0].type.includes('video') ? 'video' : 'image';
            post.file = fileData;
            break;
        case 'link':
            post.type = 'link';
            post.url = link;
            break;
        case 'poll':
            post.type = 'poll';
            post.votingLength = pollData.votingLength;
            post.startTime = new Date().toISOString();
            post.endTime = new Date(new Date().getTime() + pollData.votingLength * 60000).toISOString();
            post.options = pollData.options;
            break;
        case 'post':
            post.type = 'text';
            post.text = text;
            break;
        default:
            break;
        }

        try {
            await axios.post(API_ROUTES.createPost, post);
            alert('Post created successfully');
        } catch (error) {
            alert('Failed to create post');
            console.error('Failed to create post:', error.message);
        }
    };

    return {
        handlePost,
        handleClick,
        btnText,
        canPost,
        errorMessage,
        setErrorMessage,
    };
};
