import React from 'react';
import PropTypes from 'prop-types';
import {CommunityListDropdownItem} from '../CommunityListDropdownItem/communitylistdropdownitem.js';
import './communitylistdropdowngroup.css';

/**
 * Renders the community list dropdown group.
 * @param {Object} props - The component props.
 * @param {Array} props.CommunitiesData - The user's communities.
 * @param {boolean} props.isContainButton - The search input.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityListDropdownGroup({CommunitiesData, isContainButton=false, title}) {
    return (
        <div className="border-b-DEFAULT border-solid border-b-[var(--newCommunityTheme-line)]">
            <div className="flex p-[8px_8px_3px_16px]">
                <span className="flex items-center
                text-[10px]/[12px] font-[700] uppercase
                text-[color:var(--newCommunityTheme-actionIcon)]">{title}</span>
                {isContainButton && <button
                    className="community-list-dropdown-group__button text-[color:var(--newCommunityTheme-button)]]
                    fill-[color:var(--newCommunityTheme-button)]] relative ml-auto box-border
                    flex max-h-[24px] min-h-[24px] w-auto cursor-pointer items-center justify-center
                    rounded-full border-DEFAULT border-solid bg-transparent px-[8px] py-[4px]
                     text-center text-[12px]/[16px] font-[700] tracking-[unset]"
                >
            Create New
                </button>}
            </div>
            {CommunitiesData.map((communityData, idx) => (
                <CommunityListDropdownItem key={idx} communityData={communityData} />
            ))}
        </div>

    );
}

CommunityListDropdownGroup.propTypes = {
    CommunitiesData: PropTypes.array.isRequired,
    isContainButton: PropTypes.bool,
    title: PropTypes.string.isRequired,
};
