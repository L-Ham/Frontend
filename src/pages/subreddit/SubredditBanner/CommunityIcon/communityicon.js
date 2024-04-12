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
export function CommunityIcon({icon=null, displayNamePrefixed, primaryColor}) {
    const {Tag, tagProps} = useCommunityIcon({icon, primaryColor});

    return (
        <div className={classes.communityIconWrapper}>
            <div className={classes.iconHolder}>
                <Tag
                    src={icon}
                    alt={`${displayNamePrefixed} icon`}
                    loading="lazy"
                    {...tagProps}
                />
            </div>
        </div>
    );
}

CommunityIcon.propTypes = {
    icon: PropTypes.string,
    displayNamePrefixed: PropTypes.string.isRequired,
    primaryColor: PropTypes.string.isRequired,
};
