import React from 'react';
import PropTypes from 'prop-types';
import {VIEW_CONTEXTS} from '../../data';
import {OptionsButton} from './OptionsButton/options.js';
import {JoinButton} from './JoinButton/join.js';
import {panelClasses} from './buttonspanel.styles.js';
/**
 * ButtonsPanel component
 * @param {string} postId
 * @param {string} subredditId
 * @param {string} viewContext
 * @param {boolean} isMember
 * @return {React.Component}
 */
export function ButtonsPanel({
    postId,
    subredditId,
    viewContext,
    isMember,
}) {
    return (
        <div className={panelClasses.root}>
            {(!isMember && viewContext === VIEW_CONTEXTS.AGGREGATE_FEED) &&
            <JoinButton postId={postId} subredditId={subredditId} />}
            <OptionsButton postId={postId} isMember={isMember} />
        </div>
    );
}

ButtonsPanel.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    isMember: PropTypes.bool.isRequired,
};
