import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {Vote} from '../../../generic components/Post/PostBoost/VoteButton/vote.js';
import {Comments} from '../../../generic components/Post/PostBoost/CommentButton/comments.js';
import {Share} from '../../../generic components/Post/PostBoost/ShareButton/share.js';
import {usePostBoost} from '../../../generic components/Post/PostBoost/postboost.hooks.js';
import {PostBoost} from '../../../generic components/Post/PostBoost/postboost.js';
jest.mock('../../../generic components/Post/PostBoost/VoteButton/vote.js');
jest.mock('../../../generic components/Post/PostBoost/CommentButton/comments.js');
jest.mock('../../../generic components/Post/PostBoost/ShareButton/share.js');
jest.mock('../../../generic components/Post/PostBoost/postboost.hooks.js');

describe('PostBoost Component', () => {
    beforeEach(() => {
        cleanup();
        usePostBoost.mockImplementation(() => ({
            classNames: 'post-footer',
        }));
        Vote.mockImplementation(() => <div>Vote Component</div>);
        Comments.mockImplementation(() => <div>Comments Component</div>);
        Share.mockImplementation(() => <div>Share Component</div>);
    });

    it('renders with correct class names from usePostBoost hook', () => {
        const {getByTestId} = render(
            <PostBoost postId="1" upvotes={5} downvotes={3} isUpvoted={true}
                isDownvoted={false} commentCount={10} url="https://example.com" viewContext="home" />,
        );
        const postBoost = getByTestId('post-footer-1');
        expect(postBoost.className).toBe('post-footer');
    });

    it('contains Vote component with correct props', () => {
        const {getByText} = render(
            <PostBoost postId="1" upvotes={5} downvotes={3} isUpvoted={true}
                isDownvoted={false} commentCount={10} url="https://example.com" viewContext="home" />,
        );
        expect(getByText('Vote Component')).toBeInTheDocument();
        expect(Vote).toHaveBeenCalledWith({
            postId: '1',
            upvotes: 5,
            downvotes: 3,
            isUpvoted: true,
            isDownvoted: false,
        }, expect.anything());
    });

    it('contains Comments component with correct props', () => {
        const {getByText} = render(
            <PostBoost postId="1" upvotes={5} downvotes={3} isUpvoted={true}
                isDownvoted={false} commentCount={10} url="https://example.com" viewContext="home" />,
        );
        expect(getByText('Comments Component')).toBeInTheDocument();
        expect(Comments).toHaveBeenCalledWith({
            postId: '1',
            url: 'https://example.com',
            commentCount: 10,
        }, expect.anything());
    });

    it('contains Share component with correct props', () => {
        const {getByText} = render(
            <PostBoost postId="1" upvotes={5} downvotes={3} isUpvoted={true}
                isDownvoted={false} commentCount={10} url="https://example.com" viewContext="home" />,
        );
        expect(getByText('Share Component')).toBeInTheDocument();
        expect(Share).toHaveBeenCalledWith({
            postId: '1',
            url: 'https://example.com',
        }, expect.anything());
    });
});
