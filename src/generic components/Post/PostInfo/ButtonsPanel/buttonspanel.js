import React from 'react';
import PropTypes from 'prop-types';
import {VIEW_CONTEXTS} from '../../data';
import {OptionsButton} from './OptionsButton/options.js';
import {JoinButton} from './JoinButton/join.js';
import {panelClasses} from './buttonspanel.styles.js';
/**
 * ButtonsPanel component
 * @param {string} postId
 * @param {string} viewContext
 * @param {boolean} isSubscriber
 * @return {React.Component}
 */
export function ButtonsPanel({
    postId,
    viewContext,
    isSubscriber,
}) {
    return (
        <div className={panelClasses.root}>
            {(!isSubscriber && viewContext === VIEW_CONTEXTS.AGGREGATE_FEED) && <JoinButton postId={postId} />}
            <OptionsButton postId={postId} />
        </div>
    );
}

ButtonsPanel.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    isSubscriber: PropTypes.bool.isRequired,
};
