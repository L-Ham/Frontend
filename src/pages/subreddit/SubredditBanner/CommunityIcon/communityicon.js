// communityicon.js
import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './communityicon.styles.js';
import {useCommunityIcon} from './communityicon.hooks.js';

/**
 * Renders the community icon.
 * @param {object} props The component props.
 * @param {string} props.icon The icon URL.
 * @param {string} props.displayNamePrefixed The display name prefixed.
 * @param {string} props.primaryColor The primary color.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityIcon({icon=null, displayNamePrefixed='', primaryColor= '#0079d3'}) {
    const {Tag, tagProps} = useCommunityIcon({icon, primaryColor});

    return (
        <div className={classes.communityIconWrapper} data-testid="community-icon-wrapper">
            <div className={classes.iconHolder} data-testid="icon-holder">
                <Tag
                    src={icon}
                    alt={`${displayNamePrefixed} icon`}
                    loading="lazy"
                    {...tagProps}
                    data-testid="tag"
                />
            </div>
        </div>
    );
}

CommunityIcon.propTypes = {
    icon: PropTypes.string,
    displayNamePrefixed: PropTypes.string,
    primaryColor: PropTypes.string,
};
