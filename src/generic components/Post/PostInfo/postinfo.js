import React from 'react';
import PropTypes from 'prop-types';
import {CreditBar} from '../CreditBar/creditbar.js';
import {ButtonsPanel} from './ButtonsPanel/buttonspanel.js';
import {postInfoClasses} from './postinfo.styles.js';
import {usePostInfo} from './postinfo.hooks.js';

/**
 * PostInfo component
 * @param {string} postId
 * @param {string} userId
 * @param {string} subredditName
 * @param {string} createdAt
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostInfo({
    postId,
    userId,
    subredditName,
    createdAt,
    viewContext,
}) {
    const {
        isMember,
        subredditAvatar,
        subredditId,
    } = usePostInfo({subredditName});
    return (
        <div className={postInfoClasses.root} data-testid={`post-info-${postId}`}>
            <CreditBar
                postId={postId}
                userId={userId}
                subredditId={subredditId}
                subredditName={subredditName}
                subredditAvatar={subredditAvatar}
                createdAt={createdAt}
                viewContext={viewContext}
            />
            <ButtonsPanel
                postId={postId}
                subredditId={subredditId}
                viewContext={viewContext}
                isMember={isMember}
            />
        </div>
    );
}

PostInfo.propTypes = {
    postId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
