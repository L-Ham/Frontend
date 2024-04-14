import React from 'react';
import PropTypes from 'prop-types';
import {HoverCard} from '../../HoverCard/hovercard.js';
import {VIEW_CONTEXTS} from '../../data.js';
import ReactTimeAgo from 'react-time-ago';
import {metaClasses} from './metadatacard.styles.js';
/**
 * MetadataCard component
 * @param {string} postId
 * @param {string} subredditId
 * @param {string} subredditName
 * @param {string} userId
 * @param {string} viewContext
 * @param {string} createdAt
 * @return {React.Component}
 */
export function MetadataCard({
    postId,
    subredditId,
    subredditName,
    userId,
    viewContext,
    createdAt,
}) {
    const Icon = <img src={require('../../../../assets/images/avatar_default_0.png')}
        alt='avatar' className='size-6 rounded-full'/>;
    return (
        <div className={metaClasses.root} data-testid={`metadatacard-${postId}`}>
            <div className={metaClasses.base}>
                <HoverCard
                    postId={postId}
                    viewContext={viewContext}
                    entityName={subredditName}
                    entityId={viewContext == VIEW_CONTEXTS.SUBREDDIT_FEED ? userId:subredditId}
                    icon={viewContext == VIEW_CONTEXTS.SUBREDDIT_FEED ? Icon:null}
                    isUser={viewContext == VIEW_CONTEXTS.SUBREDDIT_FEED}
                />
                <div className={metaClasses.time}>
                    <div className={metaClasses.dot}>•</div>
                    <ReactTimeAgo date={new Date(createdAt)} locale="en-US" className='ml-1' />
                </div>
            </div>
            {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE &&
            <div className={metaClasses.comments}>
                <HoverCard
                    postId={postId}
                    viewContext={viewContext}
                    entityId={userId}
                    entityName={subredditName}
                    isUser={true}
                    icon={Icon}
                />
            </div>}
        </div>
    );
}

MetadataCard.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditId: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};
