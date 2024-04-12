import React from 'react';
import {PostText} from './PostText/posttext.js';
import {PostImage} from './PostImage/postimage.js';
import {DATA} from '../data.js';

export const usePostContent = ({postId, viewContext}) => {
    const {postType} = DATA[postId];
    let postContent = null;
    if (postType === 'text') {
        postContent = <PostText postId={postId} viewContext={viewContext} />;
    } else if (postType === 'image') {
        postContent = <PostImage postId={postId} viewContext={viewContext} />;
    }
    return {
        postContent,
    };
};
