/* eslint-disable max-len */
import React from 'react';
import {RecentPosts} from './recentposts.js';
import {PopularCommunities} from './PopularCommunities/popularcommunities.js';
import {rightSidebarClasses as styles} from './rightsidebar.styles.js';
import {useSelector} from 'react-redux';

/**
 * RightSidebar component
 * @return {JSX.Element} RightSidebar component
 * */
function RightSidebar() {
    const isUserLoggedIn = useSelector((state) => state.user.token !== '');
    return (
        <aside className={styles.container}>
            {
                isUserLoggedIn ? <RecentPosts/> : <PopularCommunities/>
            }
        </aside>
    );
}

export {RightSidebar};
