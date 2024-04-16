import React, {useState} from 'react';
import {usePostCreation} from '../../postcreationcontext.js';
import {ErrorMessage} from '../../PostCreationFormWorkspace/ErrorMessage/errormessage.js';
import './actionbuttons.css';
import {axiosInstance as axios} from '../../../../../../requests/axios.js';
import {API_ROUTES} from '../../../../../../requests/routes.js';
import {useCreatePostPage} from '../../../../createpostpage.context.js';

/**
 * Renders the actions buttons.
 * @return {JSX.Element} The rendered component.
 */
export function ActionButtons() {
    const [errorMessage, setErrorMessage] = useState('');
    const {activeTab, setFiles, postTitle, text, files, link, pollData,
        isSendPostNotifications,
        postTags} = usePostCreation();
    const {about} = useCreatePostPage();

    if (!about) return null;
    const {communityDetails: {subredditId}} = about;


    // switch case on active tab
    // for each type of tab (post,img,link,poll) we have different checks)
    // checking on title is regardless of the tab must be at least 10 characters
    let canPost = false;
    const isVideo = files.length > 0 ? files[0].type.includes('video') : false;
    const fileData = new FormData();

    // if (!canPost) {
    //     setErrorMessage('please fix the above requirments');
    // }

    const handleSaveDraft = () => {
        alert('not supported yet :)');
    };

    const handleCancel = () => {
        setFiles([]);
    };

    // secondary button
    const handleClick = activeTab === 'img' ? handleCancel : handleSaveDraft;
    const btnText = activeTab === 'img' ? 'Cancel' : 'Save Draft';

    canPost = postTitle.length && canPost;


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
        const post ={
            title: postTitle,
            subRedditId: subredditId,
            type: activeTab,
            isNSFW: postTags.includes('NSFW'),
            isSpoiler: postTags.includes('SPOILER'),
            isLocked: false,
            isSendPostNotifications,
        };

        switch (activeTab) {
        case 'post':
            post.type = 'text';
            post.text = text;
            break;
        case 'img':
            fileData.append('file', files[0]);
            if (isVideo) {
                post.type = 'video';
            } else {
                post.type = 'image';
            }
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
            // end time is the start time + the voting length
            post.endTime = new Date(new Date().getTime() + pollData.votingLength * 60000).toISOString();
            post.options = pollData.options;
            break;
        default:
            break;
        }
        try {
            await createPost(post);
            alert('Post created successfully');
        } catch (error) {
            alert('Failed to create post');
            console.log('Failed to create post:', error.message);
        }
    };


    return (
        <div className="relative mt-[8px] w-full ">
            <div className="flex flex-row-reverse items-center justify-between">
                <div className="flex flex-row-reverse items-center pt-[8px]">
                    <div className="box-border flex min-[189px]:ml-[8px]">
                        <button className="post-creation-form-footer__primaryBtn font relative
                        box-border flex min-h-[32px]
                        w-full min-w-[32px] cursor-pointer items-center justify-center rounded-full
                        border-none bg-[color:var(--newCommunityTheme-button)]
                         fill-[color:var(--newCommunityTheme-body)]
                        px-[16px] py-[4px] text-center align-middle text-[14px]/[17px] font-[700] tracking-[unset]
                        text-[color:var(--newCommunityTheme-body)]"
                        onClick={handlePost}
                        disabled={!canPost}
                        >
                            Post
                        </button>
                    </div>
                    <div className="box-border flex min-[189px]:ml-[8px]">
                        <button className="post-creation-form-footer__borderedBtn font relative box-border flex
                            min-h-[32px] min-w-[32px] cursor-pointer items-center justify-center
                            rounded-full
                            border-solid border-[color:var(--newCommunityTheme-button)]
                            bg-transparent
                            fill-[color:var(--newCommunityTheme-button)] p-[4px_16px]
                            text-[14px]/[17px] font-[700] text-[color:var(--newCommunityTheme-button)]"
                        style={{borderWidth: '1px'}}
                        onClick={handleClick}>
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
            {errorMessage && <ErrorMessage errorMessage={errorMessage}
                setErrorMessage={setErrorMessage} position='end'/> }
        </div>
    );
}


const createPost = async (post) => {
    const response = await axios.post(API_ROUTES.createPost, post);
    const data = await response.message;
    return data;
};
