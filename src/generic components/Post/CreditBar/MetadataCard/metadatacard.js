import React from 'react';
import PropTypes from 'prop-types';
import {HoverCard} from '../../HoverCard/hovercard.js';
import {VIEW_CONTEXTS} from '../../data.js';
import ReactTimeAgo from 'react-time-ago';
import {metaClasses} from './metadatacard.styles.js';
/**
 * MetadataCard component
 * @param {string} postId
 * @param {object} userData
 * @param {object} subredditData
 * @param {string} viewContext
 * @param {string} createdAt
 * @return {React.Component}
 */
export function MetadataCard({
    postId,
    userData,
    subredditData,
    viewContext,
    createdAt,
}) {
    return (
        <div className={metaClasses.root} data-testid={`metadatacard-${postId}`}>
            <div className={metaClasses.base}>
                {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE && subredditData.name == null ?
                    <div className='font-bold text-[var(--color-neutral-content)]
                    hover:text-[var(--color-a-hover)]'>
                        {`u/${userData.username}`}
                    </div>:
                    <HoverCard
                        postId={postId}
                        viewContext={viewContext}
                        entityData={viewContext === VIEW_CONTEXTS.SUBREDDIT_FEED || subredditData.name == null ?
                            userData:subredditData}
                        isUser={viewContext === VIEW_CONTEXTS.SUBREDDIT_FEED || subredditData.name == null}
                    />}
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
                    entityData={userData}
                    isUser={true}
                />
            </div>}
        </div>
    );
}

MetadataCard.propTypes = {
    postId: PropTypes.string.isRequired,
    userData: PropTypes.object.isRequired,
    subredditData: PropTypes.object.isRequired,
    viewContext: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};
