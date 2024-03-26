import React from 'react';
import PropTypes from 'prop-types';
import {Vote} from './vote.js';
import {Comments} from './comments.js';
import {Share} from './share.js';
import {VIEW_CONTEXTS} from '../data.js';
/**
 * PostBoost component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostBoost({
    postId,
    viewContext,
}) {
    const classNames = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE ?
        'mt-4 flex h-12 flex-row flex-nowrap items-center justify-start overflow-hidden md:px-0 px-4' :
        'mt-2 flex flex-row flex-nowrap items-center justify-start overflow-hidden';
    return (
        <div className={classNames}>
            <Vote postId={postId} />
            <Comments postId={postId} />
            <Share postId={postId} />
        </div>
    );
}

PostBoost.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
