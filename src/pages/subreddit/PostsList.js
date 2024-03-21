import React from 'react';
import './PostsList.css';

/**
 * Renders the posts list.
 * @return {JSX.Element} The rendered component.
 */
export function PostsList() {
    return (
        <div className="posts-container">
            {/* place holder for posts*/}
            <div className="posts-container__post"></div>
            <div className="posts-container__post"></div>
            <div className="posts-container__post"></div>
            <div className="posts-container__post"></div>
            <div className="posts-container__post"></div>
            <div className="posts-container__post"></div>
        </div>
    );
}
