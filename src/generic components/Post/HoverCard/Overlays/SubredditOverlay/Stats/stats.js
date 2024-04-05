import React from 'react';
import PropTypes from 'prop-types';
import {formatNumber} from '../../../../../utils.js';
import {statsClasses} from './stats.styles.js';
/**
 * Stats component
 * @param {string} subredditId
 * @param {number} membersCount
 * @param {string} membersName
 * @param {number} onlineCount
 * @param {string} onlineName
 * @return {React.Component}
 */
export function Stats({
    subredditId,
    membersCount,
    membersName,
    onlineCount,
    onlineName,
}) {
    return (
        <div className={statsClasses.root}>
            <div className={statsClasses.membersWrapper}>
                <div className={statsClasses.membersCount} data-testid={`stats-members-count-${subredditId}`}>
                    {formatNumber(membersCount) || 0}
                </div>
                <div className={statsClasses.membersName} data-testid={`stats-members-name-${subredditId}`}>
                    {membersName || 'Members'}
                </div>
            </div>
            <div className={statsClasses.onlineWrapper}>
                <div className={statsClasses.onlineCount} data-testid={`stats-online-count-${subredditId}`}>
                    {formatNumber(onlineCount) || 0}
                </div>
                <div className={statsClasses.onlineNameWrapper}>
                    <div className={statsClasses.onlineDot}/>
                    <div className={statsClasses.onlineName} data-testid={`stats-online-name-${subredditId}`}>
                        {onlineName || 'Online'}
                    </div>
                </div>
            </div>
        </div>
    );
}

Stats.propTypes = {
    subredditId: PropTypes.string.isRequired,
    membersCount: PropTypes.number.isRequired,
    membersName: PropTypes.string,
    onlineCount: PropTypes.number.isRequired,
    onlineName: PropTypes.string,
};
