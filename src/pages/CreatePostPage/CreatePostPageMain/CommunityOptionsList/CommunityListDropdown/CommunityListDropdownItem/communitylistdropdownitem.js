import React from 'react';
import PropTypes from 'prop-types';
import {formatNumberWithCommas} from '../../../../../../generic components/utils';

/**
 * Renders the community list dropdown item.
 * @param {Object} props - The component props.
 * @param {Object} props.community - The community.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityListDropdownItem({communityData}) {
    const {name, members, icon} = communityData;
    return (
        <div className="cursor-pointer">
            <div className="relative flex items-center p-[8px] text-[color:var(--newRedditTheme-bodyText)]">
                <img
                    alt="Subreddit Icon"
                    role="presentation"
                    src={icon}
                    className="m-[2px_8px_2px_0px] size-[32px] max-h-[32px]
                     max-w-[32px] cursor-pointer rounded-full
                     bg-[#aa9655] align-middle
                     text-[18px]/[24px] text-[color:var(--newRedditTheme-bodyText)]"
                    style={{backgroundColor: 'rgb(170, 150, 85)'}}
                />
                <div className="flex-flow flex min-w-[100px] grow
                cursor-pointer text-[color:var(--newRedditTheme-bodyText)]">
                    <span className="overflow-hidden text-ellipsis
                    text-[14px]/[18px] font-[500]">{name}</span>
                    <span className="cursor-pointer text-[12px]/[16px]
                    font-[400] text-[color:var(--newCommunityTheme-actionIcon)]">
                        {formatNumberWithCommas(members)} members
                    </span>
                </div>
            </div>
        </div>
    );
}

CommunityListDropdownItem.propTypes = {
    communityData: PropTypes.object.isRequired,
};
