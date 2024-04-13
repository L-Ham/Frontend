import React from 'react';
import {RecentCommunityItem} from './recentcommunityitem.js';
import {SectionHeader} from '../sectionheader.js';
import {useRecentCommunitiesSection} from './recentcommunities.hooks.js';
import uuid from 'react-uuid/uuid.js';

/**
 * The sidebar recent communities section component
 * @component
 * @example
 * // Render the sidebar recent communities section
 * <RecentCommunitiesSection />
 * @return {JSX.Element} The sidebar recent communities section component
 */
function RecentCommunitiesSection() {
    const {
        isOpen,
        setIsOpen,
        rootStyles,
        recentCommunities,
    } = useRecentCommunitiesSection();
    return (
        <>
            <SectionHeader sectionName='RECENT' isOpen={isOpen} setIsOpen={setIsOpen}
                data-testid='recent-communities-section-header' />
            <div className={rootStyles}>
                {recentCommunities.map((community) => (
                    <RecentCommunityItem key={uuid()} {...community} />
                ))}
            </div>
        </>
    );
}

export {RecentCommunitiesSection};
