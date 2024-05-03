import React from 'react';
import PropTypes from 'prop-types';
import {CommentTextField} from './MakeComment/makecomment';
import {CommentTree} from './CommentTree/commenttree';
import {Sorter} from './Sorter/sorter';

/**
 * Renders Comments Components
 * @param {string} postId
 * @return {JSX.Element} The rendered Comments component.
 */
export function Comments({
    postId,
}) {
    const [isCommentOpen, setIsCommentOpen] = React.useState(false);
    const handleOpenComment = () => {
        setIsCommentOpen(true);
    };
    const handleCloseComment = () => {
        setIsCommentOpen(false);
    };
    return (
        <>
            <div id="#comment" />
            {!isCommentOpen ?
                <button className='h-auto w-full cursor-text rounded-full border border-solid
            border-[color:var(--color-neutral-border)] bg-[var(--color-neutral-background)] px-4 py-2 text-left text-sm
            font-normal leading-6 tracking-tight text-[var(--color-neutral-content-weak)] disabled:cursor-not-allowed
            disabled:opacity-50' onClick={handleOpenComment}>
                Add a comment
                </button> :
                <CommentTextField postId={postId} onCancel={handleCloseComment}/>}
            <Sorter />
            <CommentTree postId={postId} />
        </>
    );
}

Comments.propTypes = {
    postId: PropTypes.string.isRequired,
};
