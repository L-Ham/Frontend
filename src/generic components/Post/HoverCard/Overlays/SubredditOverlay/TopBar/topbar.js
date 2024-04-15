import React from 'react';
import PropTypes from 'prop-types';
import {topbarClasses, topbarStyles} from './topbar.styles.js';
import {useTopBar} from './topbar.hooks.js';
/**
 * TopBar component
 * @param {string} subredditId
 * @param {string} subredditPrefixedName
 * @param {React.Element} icon
 * @param {boolean} isSubscriber
 * @return {React.Component}
 */
export function TopBar({
    subredditId,
    subredditPrefixedName,
    icon,
    isSubscriber,
}) {
    const {
        DefaultIcon,
        isJoined,
        setIsJoined,
    } = useTopBar();
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
                onClick={(e) => {
                    e.stopPropagation(); setIsJoined(!isJoined);
                }}
                data-testid={`join-button-${subredditId}`}
            >
                {isJoined ? 'Leave':'Join'}
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
