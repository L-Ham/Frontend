import React from 'react';
import './sidebar.css';
import {TopSection} from './SideBarSection/TopSection/topsection';
import {RecentCommunitiesSection} from './SideBarSection/RecentSection/recentcommunitiessection';
import {CommunitiesSection} from './SideBarSection/CommunitySection/communitiessection';
import {ResourcesSection} from './SideBarSection/ResourcesSection/resourcessection';
import {sideBarClasses as styles} from './sidebar.styles';

/**
 * Main application component
 * @component
 * @example
 * // Render the application
 * <App />
 * @return {JSX.Element} The main application component
 */
function SideBar() {
    return (

        <div className={styles.sideBarContainer}>

            <TopSection />
            <hr className={styles.divider} />
            <RecentCommunitiesSection />
            <hr className={styles.divider} />
            <CommunitiesSection />
            <hr className={styles.divider} />
            <ResourcesSection />

        </div>
    );
}

export {SideBar};
