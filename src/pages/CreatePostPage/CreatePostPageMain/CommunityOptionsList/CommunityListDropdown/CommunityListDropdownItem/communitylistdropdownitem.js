import React from 'react';
import PropTypes from 'prop-types';
import {formatNumberWithCommas} from '../../../../../../generic components/utils';
import defaultAvatar from '../../../../../../assets/icons/default-subreddit.svg';
import {classes} from './communitylistdropdownitem.styles.js';

/**
 * Renders the community list dropdown item.
 * @param {Object} props - The component props.
 * @param {Object} props.community - The community.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityListDropdownItem({communityData}) {
    if (!communityData) return null;
    const {communityName, memberCount, communityAvatar} = communityData;
    return (
        <div className={classes.communityListDropdownItemDiv} onClick={() => {
            window.location.href = window.location.origin + `/r/${communityName}/submit`;
        }}>
            <div className={classes.communityListDropdownItemInnerDiv}>
                <img
                    alt="Subreddit Icon"
                    role="presentation"
                    src={communityAvatar || defaultAvatar}
                    className={classes.communityListDropdownItemImage}
                    style={{backgroundColor: 'rgb(170, 150, 85)'}}
                />
                <div className={classes.communityListDropdownItemInnerDiv2}>
                    <span className={classes.communityListDropdownItemSpan1}>{communityName}</span>
                    <span className={classes.communityListDropdownItemSpan2}>
                        {formatNumberWithCommas(memberCount || 0)} members
                    </span>
                </div>
            </div>
        </div>
    );
}

CommunityListDropdownItem.propTypes = {
    communityData: PropTypes.object.isRequired,
};
