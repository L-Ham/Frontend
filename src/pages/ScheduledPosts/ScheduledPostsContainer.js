import React from 'react';
import {Post} from './Post';
import {API_ROUTES} from '../../requests/routes';
import {axiosInstance} from '../../requests/axios';

/**
 * Renders the SheduledPosts component.
 * @return {JSX.Element} The rendered component.
 */
export function ScheduledPostsContainer({about}) {
    const {communityDetails: {subredditId: id}} = about;

    const getSchedulePosts = async () => {
        const response = await axiosInstance.get(API_ROUTES.getSchedulePosts(id));
        const data = await response.data;
        return data;
    };

    const loadPosts = async () => {
        try {
            const response = await getSchedulePosts();
            const posts = response.data;
            setScheduledPosts(posts);
        } catch (error) {
            addNotification({type: 'error', message: 'Error fetching scheduled posts'});
            console.error('Error fetching scheduled posts', error);
        }
    };

    const [scheduledPosts, setScheduledPosts] = React.useState([]);

    React.useEffect(() => {
        loadPosts();
    }, [id]);

    // const sheduledPostss = [{
    //     title: 'testing sched',
    //     user: 'artyyyGuy',
    //     subreddit: 'flowersWorldForYou',
    //     scheduledTime: '9:00pm',
    //     scheduledDate: '5/1',
    //     isNsfw: true,
    //     isSpoiler: true,
    // },
    // {
    //     title: 'this is a post',
    //     user: 'gaser',
    //     subreddit: 'flowersWorldForYou',
    //     scheduledTime: '8:00pm',
    //     scheduledDate: '2/4',
    //     isNsfw: false,
    //     isSpoiler: true,
    // }];
    return (
        <div className='Q7W5RJknO1UJ-qscCW0k6 flex flex-col' data-testid="scheduled-posts-container-div">
            {scheduledPosts.map((post, idx) => (
                <Post key={idx} title={post.title} user={post.user}
                    subreddit={post.subreddit} scheduledTime={post.scheduledTime}
                    scheduledDate={post.scheduledDate} isNsfw={post.isNsfw}
                    isSpoiler={post.isSpoiler} data-testid={`post-${idx}`} />
            ))}
        </div>
    );
}
