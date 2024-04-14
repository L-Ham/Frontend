import React from 'react';
import PropTypes from 'prop-types';
import {VIEW_CONTEXTS} from '../data.js';
import {MetadataCard} from './MetadataCard/metadatacard.js';
import {BackButton} from './BackButton/back.js';
import {creditBarClasses} from './creditbar.styles.js';
import {useCreditBar} from './creditbar.hooks.js';
/**
 * CreditBar component
 * @param {string} postId
 * @param {string} userId
 * @param {string} subredditId
 * @param {string} subredditName
 * @param {string} subredditAvatar
 * @param {string} createdAt
 * @param {string} viewContext
 * @return {React.Component}
 */
export function CreditBar({
    postId,
    userId,
    subredditId,
    subredditName,
    subredditAvatar: avatarImage,
    createdAt,
    viewContext,
}) {
    const {
        handleSubredditRedirect,
        rootClassNames,
        Icon,
    } = useCreditBar({subredditName, avatarImage, viewContext});
    return (
        <div className={creditBarClasses.wrapper} data-testid={`creditbar-${postId}`}>
            <div className={rootClassNames}>
                {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE && <BackButton postId={postId}/>}
                <div className={creditBarClasses.base} onClick={handleSubredditRedirect}>
                    {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE &&
                    <div className={creditBarClasses.icon} data-testid={`subreddit-icon-${postId}`}>
                        {Icon}
                    </div>}
                    <MetadataCard
                        postId={postId}
                        subredditId={subredditId}
                        subredditName={subredditName}
                        userId={userId}
                        viewContext={viewContext}
                        createdAt={createdAt}
                    />
                </div>
            </div>
        </div>
    );
}

CreditBar.propTypes = {
    postId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    subredditId: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    subredditAvatar: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
