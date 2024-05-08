import React from 'react';
import PropTypes from 'prop-types';
import {CreditBar} from '../CreditBar/creditbar.js';
import {ButtonsPanel} from './ButtonsPanel/buttonspanel.js';
import {postInfoClasses} from './postinfo.styles.js';

/**
 * PostInfo component
 * @param {string} postId
 * @param {string} userData
 * @param {string} subredditData
 * @param {string} createdAt
 * @param {string} isSaved
 * @param {string} viewContext
 * @param {string} isHidden
 * @return {React.Component}
 */
function PostInfoNonMemo({
    postId,
    userData,
    subredditData,
    createdAt,
    isSaved,
    viewContext,
    isHidden,
}) {
    return (
        <div className={postInfoClasses.root} data-testid={`post-info-${postId}`}>
            <CreditBar
                postId={postId}
                userData={userData}
                subredditData={subredditData}
                createdAt={createdAt}
                viewContext={viewContext}
            />
            <ButtonsPanel
                postId={postId}
                subredditId={subredditData.subredditId}
                isMember={subredditData.isMember}
                isSaved={isSaved}
                viewContext={viewContext}
                isHidden={isHidden}
            />
        </div>
    );
}
export const PostInfo = React.memo(PostInfoNonMemo, (prevProps, nextProps) => {
    return prevProps.postId === nextProps.postId &&
        prevProps.userData === nextProps.userData &&
        prevProps.subredditData === nextProps.subredditData &&
        prevProps.createdAt === nextProps.createdAt &&
        prevProps.isSaved === nextProps.isSaved &&
        prevProps.isHidden === nextProps.isHidden &&
        prevProps.viewContext === nextProps.viewContext;
});
PostInfoNonMemo.propTypes = {
    postId: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired,
    subredditData: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    isSaved: PropTypes.bool.isRequired,
    viewContext: PropTypes.string.isRequired,
    isHidden: PropTypes.bool.isRequired,
};
