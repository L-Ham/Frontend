import React from 'react';
import PropTypes from 'prop-types';
import {DATA, VIEW_CONTEXTS} from './data.js';
import {PostInfo} from './postinfo.js';
import {PostContent} from './postcontent.js';
import {PostBoost} from './PostBoost/postboost.js';
/**
 * Post component
 * @param {string} postId
 * @return {React.Component}
 */
export function Post({
    postId,
    viewContext,
}) {
    const {title, contentHref} = DATA[postId];
    // viewContexts: AggregateFeed, CommentsPage, SubredditFeed
    // postTypes: gallery, text, image, link, video
    let classNames = `relative my-1 block w-10/12 rounded-[16px] bg-[var(--bg-neutral)] px-4 py-1 `;
    if (viewContext !== VIEW_CONTEXTS.COMMENTS_PAGE) {
        classNames += 'hover:bg-[var(--bg-neutral-hover)]';
    }
    const isCommentsPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE;
    return (
        <div className={classNames}>
            {viewContext !== VIEW_CONTEXTS.COMMENTS_PAGE &&
            <a href={contentHref} className='absolute inset-0' target="_self" data-testid={`link-${postId}`}></a>}
            <PostInfo postId={postId} viewContext={viewContext} />
            <div className='m-0 mb-1 flex-col text-left'>
                {isCommentsPage ?
                    <h1 className="m-0 mb-2 px-1 font-semibold text-[var(--color-neutral-content-strong)] md:mb-4
                    md:px-0 md:text-2xl md:leading-7" data-testid={`title-${postId}`}>
                        {title}
                    </h1> :
                    <div className="m-0 mb-1 block text-base font-semibold text-[var(--color-neutral-content-strong)]
                    md:mb-2 md:text-lg md:leading-6" data-testid={`title-${postId}`}>
                        {title}
                    </div>
                }
                <PostContent postId={postId} viewContext={viewContext}/>
            </div>
            <PostBoost postId={postId} viewContext={viewContext} />
        </div>
    );
}

Post.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
