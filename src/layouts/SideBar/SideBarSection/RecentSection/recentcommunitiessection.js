import React from 'react';
import {RecentCommunityItem} from './recentcommunityitem';
import {SectionHeader} from '../sectionheader';
// import {sectionClasses as styles} from '../sidebarsection.styles';
import {useRecentCommunitiesSection} from './recentcommunities.hooks';

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
            <SectionHeader sectionName='RECENT' isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className={rootStyles}>
                {recentCommunities.map((community, index) => (
                    <RecentCommunityItem key={index} {...community} />
                ))}
            </div>
        </>
    );
}

export {RecentCommunitiesSection};
