import React from 'react';
import PropTypes from 'prop-types';
import {topbarClasses, topbarStyles} from './topbar.styles.js';
import {getIconComponent} from '../../../../../iconsmap.js';
/**
 * TopBar component
 * @param {string} subredditId
 * @param {string} subredditPrefixedName
 * @param {React.Element} icon
 * @param {boolean} isSubscriber
 * @return {React.Component}
 */
function TopBar({
    subredditId,
    subredditPrefixedName,
    icon,
    isSubscriber,
}) {
    const DefaultIcon = getIconComponent('default-subreddit');
    return (
        <div className={topbarClasses.root}>
            <div className={topbarClasses.icon} data-testid={`subreddit-icon-${subredditId}`}>
                {icon || <DefaultIcon />}
            </div>
            <div className={topbarClasses.subreddit}>
                <a
                    className={topbarClasses.subredditLink}
                    href={subredditPrefixedName}
                    data-testid={`subreddit-name-${subredditId}`}
                >
                    {subredditPrefixedName}
                </a>
            </div>
            {!isSubscriber &&
            <button
                className={topbarClasses.joinButton}
                style={topbarStyles.joinButton}
                type='button'
                onClick={(e) => e.stopPropagation()}
                data-testid={`join-button-${subredditId}`}
            >
                Join
            </button>}
        </div>
    );
}

TopBar.propTypes = {
    subredditId: PropTypes.string.isRequired,
    subredditPrefixedName: PropTypes.string.isRequired,
    icon: PropTypes.element,
    isSubscriber: PropTypes.bool.isRequired,
};

export {TopBar};
