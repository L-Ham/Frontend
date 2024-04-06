import React from 'react';
import PropTypes from 'prop-types';
import {PostInfo} from './PostInfo/postinfo.js';
import {PostContent} from './PostContent/postcontent.js';
import {PostBoost} from './PostBoost/postboost.js';
import {PostTitle} from './PostTitle/posttitle.js';
import {postClasses} from './post.styles.js';
import {usePost} from './post.hooks.js';
/**
 * Post component
 * @param {string} postId
 * @return {React.Component}
 */
export function Post({
    postId,
    viewContext,
}) {
    const {
        classNames,
        title,
        permalink,
        isCommentsPage,
    } = usePost({postId, viewContext});
    return (
        <div className={classNames}>
            {!isCommentsPage &&
            <a href={permalink} className={postClasses.a} target="_self" data-testid={`link-${postId}`}/>}
            <PostInfo postId={postId} viewContext={viewContext} />
            <div className={postClasses.body} data-testid={`body-${postId}`}>
                <PostTitle postId={postId} title={title} isCommentsPage={isCommentsPage} />
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
