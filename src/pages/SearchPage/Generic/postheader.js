import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import {HoverCard} from '../../../generic components/Post/HoverCard/hovercard';
import PropTypes from 'prop-types';

/**
 * PostHeader component.
 * @return {JSX.Element} The PostHeader component.
 */
function PosthHeader({
    postId,
    entityData,
    isUser,
    createdAt,
    viewContext,
}) {
    return (
        <div className='relative mb-2 flex max-w-full items-center whitespace-nowrap'>
            {/* header {subreddit icon and name. Time posted. Hovercard} */}
            <span className='flex items-center
                text-xs text-[var(--color-neutral-content-weak)]'>
                <HoverCard
                    postId={postId}
                    viewContext={viewContext}
                    isUser={isUser}
                    entityData={entityData}
                />
                <span className="mx-1">·</span>
                <ReactTimeAgo date={new Date(createdAt)} locale="en-US" className='ml-1' />
            </span>
        </div>
    );
}

PosthHeader.propTypes = {
    postId: PropTypes.string.isRequired,
    entityData: PropTypes.object.isRequired,
    isUser: PropTypes.bool.isRequired,
    createdAt: PropTypes.number.isRequired,
    viewContext: PropTypes.string.isRequired,
};

export {PosthHeader};
