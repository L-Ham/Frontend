import React from 'react';
import PropTypes from 'prop-types';
import {statsClasses} from './stats.styles';
/**
 * Stats component
 * @param {string} authorId
 * @param {number} postKarma
 * @param {number} commentKarma
 * @return {React.Component}
 */
export function Stats({
    authorId,
    postKarma,
    commentKarma,
}) {
    return (
        <div className={statsClasses.root} data-testid={`stats-${authorId}`}>
            <div className={statsClasses.postKarma}>
                <div className={statsClasses.value} data-testid={`postKarma-${authorId}`}>
                    {postKarma.toLocaleString()}
                </div>
                <div className={statsClasses.label}>
                    Post Karma
                </div>
            </div>
            <div className={statsClasses.commentKarma}>
                <div className={statsClasses.value} data-testid={`commentKarma-${authorId}`}>
                    {commentKarma.toLocaleString()}
                </div>
                <div className={statsClasses.label}>
                    Comment Karma
                </div>
            </div>
        </div>
    );
}

Stats.propTypes = {
    authorId: PropTypes.string.isRequired,
    postKarma: PropTypes.number.isRequired,
    commentKarma: PropTypes.number.isRequired,
};
