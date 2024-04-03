import React from 'react';
import {PostText} from './PostText/posttext.js';
import {DATA} from '../data.js';

export const usePostContent = ({postId, viewContext}) => {
    const {postType} = DATA[postId];
    let postContent = null;
    if (postType === 'text') {
        postContent = <PostText postId={postId} viewContext={viewContext} />;
    }
    return {
        postContent,
    };
};
