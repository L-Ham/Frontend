import React from 'react';
import PropTypes from 'prop-types';
import {CreditBar} from '../CreditBar/creditbar.js';
import {ButtonsPanel} from './ButtonsPanel/buttonspanel.js';
import {postInfoClasses} from './postinfo.styles.js';
import {usePostInfo} from './postinfo.hooks.js';

/**
 * PostInfo component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostInfo({
    postId,
    viewContext,
}) {
    const {
        isSubscriber,
    } = usePostInfo({postId});
    return (
        <div className={postInfoClasses.root} data-testid={`post-info-${postId}`}>
            <CreditBar
                postId={postId}
                viewContext={viewContext}
            />
            <ButtonsPanel
                postId={postId}
                viewContext={viewContext}
                isSubscriber={isSubscriber}
            />
        </div>
    );
}

PostInfo.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
