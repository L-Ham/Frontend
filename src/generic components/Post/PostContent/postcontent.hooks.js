import React from 'react';
import {PostText} from './PostText/posttext.js';
import {PostImage} from './PostImage/postimage.js';
import {PostPoll} from './PostPoll/postpoll.js';
import {PostLink} from './PostLink/postlink.js';
export const usePostContent = ({postId, type, text, imageUrls, poll, url, createdAt, viewContext}) => {
    let postContent = null;
    if (type === 'text') {
        postContent = <PostText postId={postId} content={text} viewContext={viewContext} />;
    } else if (type === 'image' && imageUrls.length === 1) {
        postContent = <PostImage postId={postId} image={imageUrls[0]} viewContext={viewContext} />;
    } else if (type === 'poll') {
        postContent = <PostPoll postId={postId} poll={poll} viewContext={viewContext} createdAt={createdAt}/>;
    } else if (type === 'link') {
        postContent = <PostLink postId={postId} url={url} viewContext={viewContext} />;
    } else {
        console.log('Unexpected post type', type);
        postContent = (
            <div>
                Unexptected post type
            </div>
        );
    }
    return {
        postContent,
    };
};
