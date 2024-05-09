import React from 'react';
import PropTypes from 'prop-types';
import {CommunityListDropdownGroup} from './CommunityListDropdownGroup/communitylistdropdowngroup.js';
import {classes} from './communitylistdropdown.styles.js';
import {useCommunityListDropDown} from './communitylistdropdown.hooks.js';

/**
 * Renders the community list dropdown.
 * @param {Object} props - The component props.
 * @param {string} props.searchInput - The search input.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityListDropdown({searchInput}) {
    const {otherCommunities, userCommunities} = useCommunityListDropDown(searchInput);

    if (!userCommunities.length && !otherCommunities.length) return null;

    return (
        <div className={classes.communityListDropdownDiv} data-testid="community-list-dropdown-div">
            <CommunityListDropdownGroup CommunitiesData={userCommunities} title='Your Communities'
                isContainButton={true} data-testid="community-list-dropdown-group-1"/>
            <CommunityListDropdownGroup CommunitiesData={otherCommunities} title='others'
                data-testid="community-list-dropdown-group-2"/>
        </div>
    );
}

CommunityListDropdown.propTypes = {
    searchInput: PropTypes.string.isRequired,
};
