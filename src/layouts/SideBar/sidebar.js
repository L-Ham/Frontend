import React from 'react';
import './sidebar.css';
import {TopSection} from './SideBarSection/TopSection/topsection.js';
import {RecentCommunitiesSection} from './SideBarSection/RecentSection/recentcommunitiessection.js';
import {CommunitiesSection} from './SideBarSection/CommunitySection/communitiessection.js';
import {ResourcesSection} from './SideBarSection/ResourcesSection/resourcessection.js';
import {sideBarClasses as styles} from './sidebar.styles.js';
import './sidebar.css';

/**
 * The sidebar component
 * @component
 * @example
 * // Render the sidebar
 * <SideBar />
 * @return {JSX.Element} The sidebar component
 */
function SideBar() {
    return (

        <div className={styles.sideBarContainer}>
            <nav className={styles.sideBar}>

                <TopSection />
                <hr className={styles.divider} />
                <RecentCommunitiesSection />
                <hr className={styles.divider} />
                <CommunitiesSection />
                <hr className={styles.divider} />
                <ResourcesSection />
            </nav>

        </div>
    );
}

export {SideBar};
