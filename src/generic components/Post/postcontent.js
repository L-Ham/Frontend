import React from 'react';
import PropTypes from 'prop-types';
import {DATA, VIEW_CONTEXTS} from './data.js';
import parse from 'html-react-parser';
import './md.css';
/**
 * Replaces html entities with their respective characters
 * @param {string} str
 * @return {string}
 */
function replaceHtmlEntities(str) {
    return str.replaceAll(/&lt;/g, '<').replaceAll(/&gt;/g, '>')
        .replaceAll(/&quot;/g, '"').replaceAll(/&nbsp;/g, ' ')
        .replaceAll(/&apos;/g, '\'').replaceAll(/&amp;/g, '&');
}

/**
 * PostContent component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostContent({
    postId,
    viewContext,
}) {
    const {postType, selftext_html: content} = DATA[postId];
    const isCommentsPage = viewContext === VIEW_CONTEXTS.COMMENTS_PAGE;
    let toRender = null;
    if (postType === 'text') {
        const startTag = '&lt;!-- SC_OFF --&gt;';
        const closingTag = '&lt;!-- SC_ON --&gt;';
        let postContent = content.replaceAll(startTag, '').replaceAll(closingTag, '');
        postContent = replaceHtmlEntities(postContent);
        postContent = postContent
            .replaceAll('<a', '<a className=\'text-[var(--color-a-default)] no-underline break-words\'');
        postContent = parse(replaceHtmlEntities(postContent));
        const classNames = isCommentsPage ? 'mb-2 px-1 md:px-0 text-sm text-ellipsis' :
            'line-clamp-3 h-[60px] text-ellipsis break-words text-sm md:line-clamp-6 md:h-fit';
        toRender =
        <div className={classNames} data-testid={`content-${postId}-${viewContext}`}
            style={{lineHeight: '20px'}}>
            {postContent}
        </div>;
    }
    return (
        <div className='mb-1 text-[--color-neutral-content]'>
            {toRender}
        </div>
    );
}

PostContent.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
