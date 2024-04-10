import React from 'react';
import {CommunityItem} from './communityitem.js';
import {CreateCommunityItem} from './createcommunityitem.js';
import {SectionHeader} from '../sectionheader.js';
import {useCommunitiesSection} from './community.hooks.js';
import uuid from 'react-uuid/uuid';

/**
 * The sidebar recent communities section component
 * @component
 * @example
 * // Render the sidebar recent communities section
 * <RecentCommunitiesSection />
 * @return {JSX.Element} The sidebar recent communities section component
 */
function CommunitiesSection() {
    const {
        isOpen,
        setIsOpen,
        rootStyles,
        Communities} = useCommunitiesSection();
    return (
        <>
            <SectionHeader sectionName='COMMUNITIES' isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className={rootStyles}>
                <CreateCommunityItem/>
                {Communities.map((community) => (
                    <CommunityItem key={uuid()} {...community} />
                ))}
            </div>
        </>
    );
}

export {CommunitiesSection};
