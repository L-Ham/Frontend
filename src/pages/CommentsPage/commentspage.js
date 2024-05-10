import React, {useState, useEffect} from 'react';
import {Post} from '../../generic components/Post/post';
import {VIEW_CONTEXTS} from '../../generic components/Post/data';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import PropTypes from 'prop-types';
import {Comments} from './Comments/comments';
import {SubredditProvider} from '../subreddit/subredditcontext';
import {SubredditSidebar} from '../subreddit/SubredditSidebar/subredditsidebar';
import '../../layouts/SideBar/sidebar.css';
import {useDispatch} from 'react-redux';
import {addRecentPost} from '../../store/userSlice.js';

/**
 * Renders Comments Page
 * @return {JSX.Element} The rendered Comments Page component.
 */
export function CommentsPage({
    postId,
    name,
    isUserPost,
}) {
    const [postData, setPostData] = useState({
        poll: {
            'options': [],
            'votingLength': 0,
            'startTime': null,
            'endTime': null,
        },
        _id: '662af1fdc1f1157462fbb126',
        user: '662ae1cfc1f1157462fbadc0',
        createdAt: '2024-04-26T00:14:53.170Z',
        subReddit: '662ae476c1f1157462fbaf00',
        title: 'zMentalist',
        text: 'The greatest guy in the world is zMentalist',
        images: [],
        approved: false,
        disapproved: false,
        videos: [],
        url: '',
        type: 'text',
        isNSFW: true,
        isSpoiler: true,
        isLocked: true,
        upvotes: 2,
        downvotes: 0,
        upvotedUsers: [
            '662d258fa12caa11b0fddbec',
        ],
        downvotedUsers: [],
        views: 0,
        commentCount: 10,
        spamCount: 0,
        spammedBy: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_ROUTES.getPost(postId));
                setPostData(response.data.post);
                setIsLoading(false);
                dispatch(addRecentPost({
                    postId: response.data.post._id,
                    subredditId: response.data.post.subReddit,
                    subredditName: name,
                    postTitle: response.data.post.title,
                    upvotes: response.data.post.upvotes,
                    comments: response.data.post.commentCount,
                }));
            } catch (error) {
                // console.error(error);
            }
        };
        fetchData();
    }, [postId]);
    return (
        <div className='order-2 mx-auto box-border flex
        w-full flex-col md:px-4 nd:col-start-2 nd:w-[1120px] nd:max-w-[calc(100vw-272px)]'>
            <div className='flex w-full flex-wrap gap-4 pb-8 xs:flex-nowrap'>
                <div className='w-full scroll-mt-[56px] md:max-w-[calc(100%_-_(16px_+_316px))]
            nd:max-w-[calc(100%_-_(16px_+_316px))] lxl:max-w-[756px]'>
                    {isLoading ?
                        'Loading...' :
                        <>
                            <Post {...postData} viewContext={VIEW_CONTEXTS.COMMENTS_PAGE} />
                            <Comments postId={postId} />
                        </>}
                </div>
                <div className='styled-scrollbars block w-full overflow-hidden xs:sticky xs:top-[56px]
                xs:max-h-[calc(100vh_-_56px_-_1px)] xs:w-[316px] xs:min-w-[316px] xs:overflow-y-auto
                xs:overflow-x-hidden'>
                    {!isUserPost &&
                    <SubredditProvider name={name}>
                        <SubredditSidebar />
                    </SubredditProvider>}
                </div>
            </div>
        </div>
    );
}


CommentsPage.propTypes = {
    postId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isUserPost: PropTypes.bool.isRequired,
};
