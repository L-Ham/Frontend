import React from 'react';
import {CommunityItem} from './communityitem';
import {CreateCommunityItem} from './createcommunityitem';
import {SectionHeader} from '../sectionheader';
import {useCommunitiesSection} from './community.hooks';

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
                <CreateCommunityItem
                    icon='add'
                    label='Create Community'
                />
                {Communities.map((community, index) => (
                    <CommunityItem key={index} {...community} />
                ))}
            </div>
        </>
    );
}

export {CommunitiesSection};
