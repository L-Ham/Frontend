import React from 'react';
import PropTypes from 'prop-types';
import {VIEW_CONTEXTS} from '../../data';
import {OptionsButton} from './OptionsButton/options.js';
import {JoinButton} from './JoinButton/join.js';
import {panelClasses} from './buttonspanel.styles.js';
/**
 * ButtonsPanel component
 * @param {string} postId
 * @param {object} subredditData
 * @param {string} viewContext
 * @param {boolean} isMember
 * @param {boolean} isSaved
 * @return {React.Component}
 */
export function ButtonsPanel({
    postId,
    subredditId,
    viewContext,
    isMember,
    isSaved,
    isHidden,
}) {
    return (
        <div className={panelClasses.root}>
            {(!isMember && viewContext === VIEW_CONTEXTS.AGGREGATE_FEED && subredditId !== 'loading') &&
            <JoinButton postId={postId} subredditId={subredditId} />}
            <OptionsButton postId={postId} isMember={isMember} isSaved={isSaved} isHidden={isHidden}/>
        </div>
    );
}

ButtonsPanel.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    isMember: PropTypes.bool.isRequired,
    isSaved: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
};
