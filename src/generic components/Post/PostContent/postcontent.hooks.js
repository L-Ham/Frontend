import React from 'react';
import {PostText} from './PostText/posttext.js';
import {PostImage} from './PostImage/postimage.js';

export const usePostContent = ({postId, type, text, imageUrls, viewContext}) => {
    let postContent = null;
    if (type === 'text') {
        postContent = <PostText postId={postId} content={text} viewContext={viewContext} />;
    } else if (type === 'image' && imageUrls.length === 1) {
        postContent = <PostImage postId={postId} image={imageUrls[0]} viewContext={viewContext} />;
    }
    return {
        postContent,
    };
};
