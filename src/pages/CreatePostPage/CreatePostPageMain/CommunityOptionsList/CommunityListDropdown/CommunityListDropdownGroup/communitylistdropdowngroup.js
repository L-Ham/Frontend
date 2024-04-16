import React from 'react';
import PropTypes from 'prop-types';
import {CommunityListDropdownItem} from '../CommunityListDropdownItem/communitylistdropdownitem.js';
import './communitylistdropdowngroup.css';
import {classes} from './communitylistdropdowngroup.styles.js';

/**
 * Renders the community list dropdown group.
 * @param {Object} props - The component props.
 * @param {Array} props.CommunitiesData - The user's communities.
 * @param {boolean} props.isContainButton - The search input.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityListDropdownGroup({CommunitiesData, isContainButton=false, title}) {
    return (
        <div className={classes.communityListDropdownGroupDiv} data-testid="community-list-dropdown-group-div">
            <div className={classes.communityListDropdownGroupInnerDiv}
                data-testid="community-list-dropdown-group-inner-div">
                <span className={classes.communityListDropdownGroupSpan}
                    data-testid="community-list-dropdown-group-span">{title}</span>
                {isContainButton && <button
                    className={classes.communityListDropdownGroupButton}
                    data-testid="community-list-dropdown-group-button"
                >
            Create New
                </button>}
            </div>
            {CommunitiesData.map((communityData, idx) => (
                <CommunityListDropdownItem key={idx} communityData={communityData}
                    data-testid={`community-list-dropdown-item-${idx}`} />
            ))}
        </div>

    );
}

CommunityListDropdownGroup.propTypes = {
    CommunitiesData: PropTypes.array.isRequired,
    isContainButton: PropTypes.bool,
    title: PropTypes.string.isRequired,
};
