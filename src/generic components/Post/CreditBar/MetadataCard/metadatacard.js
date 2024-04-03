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
 * @param {string} authorId
 * @param {string} viewContext
 * @param {number} created
 * @return {React.Component}
 */
export function MetadataCard({
    postId,
    subredditId,
    authorId,
    viewContext,
    created,
}) {
    return (
        <div className={metaClasses.root} data-testid={`metadatacard-${postId}`}>
            <div className={metaClasses.base}>
                <HoverCard postId={postId} viewContext={viewContext} fullName={subredditId}/>
                <div className={metaClasses.time}>
                    <div className={metaClasses.dot}>•</div>
                    <ReactTimeAgo date={new Date(created * 1000)} locale="en-US" className='ml-1' />
                </div>
            </div>
            {viewContext === VIEW_CONTEXTS.COMMENTS_PAGE &&
            <div className={metaClasses.comments}>
                <HoverCard postId={postId} viewContext={viewContext} fullName={authorId}/>
            </div>}
        </div>
    );
}

MetadataCard.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditId: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
};
