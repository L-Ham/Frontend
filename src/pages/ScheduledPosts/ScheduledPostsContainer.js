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
    const {addNotification} = useNotifications();

    if (!about) return null;

    if (Object.keys(about).length === 0) {
        return null;
    }

    const {communityDetails: {subredditId: id}} = about;

    if (!id) {
        return null;
    }

    const getSchedulePosts = async () => {
        const response = await axiosInstance.get(API_ROUTES.getScheduledPosts(id));
        const data = await response.data.scheduledPosts;
        return data;
    };

    const loadPosts = async () => {
        try {
            const posts = await getSchedulePosts();
            // restructure the posts
            const formattedPosts = posts.map((post) => {
                // post.createdAt ex:"2024-05-09T00:32:53.809Z"
                // post.scheduledMinute ex: 32 (number of minutes to schedule after the creation)
                // now calculate the scheduled time and date
                const createdAt = new Date(post.createdAt);
                let hours = createdAt.getHours();
                let minutes = createdAt.getMinutes() + post.scheduledMinutes;

                if (minutes >= 60) {
                    hours += 1;
                    minutes -= 60;
                    if (hours >= 24) {
                        hours = 0;
                        createdAt.setDate(createdAt.getDate() + 1);
                    }
                }
                let ampm = 'AM';
                if (hours >= 12) {
                    ampm = 'PM';
                    if (hours > 12) {
                        hours -= 12;
                    }
                }

                const scheduledTime = `${hours}:${minutes} ${ampm}`;
                const scheduledDate = `${createdAt.getMonth() + 1}/${createdAt.getDate()}`;
                return {
                    title: post.title,
                    user: post.userName,
                    type: post.type,
                    subreddit: post.subredditName,
                    scheduledTime: scheduledTime,
                    scheduledDate: scheduledDate,
                    isNsfw: post.isNSFW,
                    isSpoiler: post.isSpoiler,
                };
            });
            setScheduledPosts(formattedPosts);
        } catch (error) {
            addNotification({type: 'error', message: error.response.data.message});
            // console.error('Error fetching scheduled posts', error);
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

    if (!scheduledPosts || scheduledPosts.length === 0) {
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
