import React from 'react';
import PropTypes from 'prop-types';
import {Post} from './Post';
import {API_ROUTES} from '../../requests/routes';
import {axiosInstance} from '../../requests/axios';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';

/**
 * Renders the SheduledPosts component.
 * @return {JSX.Element} The rendered component.
 */
export function ScheduledPostsContainer({about}) {
    const [scheduledPosts, setScheduledPosts] = React.useState([]);
    const {communityDetails: {subredditId: id}} = about;
    const {addNotification} = useNotifications();

    if (!id) {
        return null;
    }

    const getSchedulePosts = async () => {
        const response = await axiosInstance.get(API_ROUTES.getScheduledPosts(id));
        const data = await response.data.scheduledPosts;
        console.log('data sched posts', data);
        return data;
    };

    const loadPosts = async () => {
        try {
            const posts = await getSchedulePosts();
            // restructure the posts
            const formattedPosts = posts.map((post) => {
                const createdAt = new Date(post.createdAt);
                const minutesToSchedule = post.minutesToSchedule;
                const scheduledTime = new Date(createdAt.getTime() + minutesToSchedule * 60000);
                const scheduledDate = scheduledTime.toDateString();
                return {
                    title: post.title,
                    user: post.user, // todo get user name from id
                    type: post.type,
                    subreddit: post.subreddit, // get subredditname from id
                    scheduledTime: '3:00 PM' || scheduledTime, // to be calculated
                    scheduledDate: '5/8' || scheduledDate, // to be calculated
                    isNsfw: post.isNSFW,
                    isSpoiler: post.isSpoiler,
                };
            });
            setScheduledPosts(formattedPosts);
            console.log('Scheduled posts', formattedPosts);
        } catch (error) {
            addNotification({type: 'error', message: error.response.data.message});
            console.error('Error fetching scheduled posts', error);
        }
    };

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
    if (!scheduledPosts) {
        return <div>Loading...</div>;
    }

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

ScheduledPostsContainer.propTypes = {
    about: PropTypes.object,
};
