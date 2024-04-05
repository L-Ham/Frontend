import React from 'react';
import './sidebar.css';
import {TopSection} from './SideBarSection/TopSection/topsection';
import {RecentCommunitiesSection} from './SideBarSection/RecentSection/recentcommunitiessection';
import {CommunitiesSection} from './SideBarSection/CommunitySection/communitiessection';
import {ResourcesSection} from './SideBarSection/ResourcesSection/resourcessection';

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

        <div className='styled-scrollbars fixed left-0 top-[56px] box-border
                block h-[calc(100vh-56px)] w-[272px] overflow-hidden border-0
                border-r-[0.0625rem] border-solid border-r-[#00000033] bg-white px-4 pt-4 hover:overflow-y-scroll'>

            <TopSection />
            <hr className='my-3 border-t-DEFAULT border-solid border-[#00000033]' />
            <RecentCommunitiesSection />
            <hr className='my-3 border-t-DEFAULT border-solid border-[#00000033]' />
            <CommunitiesSection />
            <hr className='my-3 border-t-DEFAULT border-solid border-[#00000033]' />
            <ResourcesSection />

        </div>
    );
}

export {SideBar};
