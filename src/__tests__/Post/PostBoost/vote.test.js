import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {useVote} from '../../../generic components/Post/PostBoost/VoteButton/vote.hooks.js';
import {Vote} from '../../../generic components/Post/PostBoost/VoteButton/vote.js';
jest.mock('../../../generic components/Post/PostBoost/VoteButton/vote.styles.js', () => ({
    voteStyles: {
        score: {
            padding: '5px',
            fontSize: '14px',
        },
    },
}));

jest.mock('../../../generic components/Post/PostBoost/VoteButton/vote.hooks.js');

describe('Vote component tests', () => {
    const postId = 'post123';
    const mockUpvote = jest.fn();
    const mockDownvote = jest.fn();
    const defaultProps = {
        postId: postId,
        upvotes: 10,
        downvotes: 3,
        isUpvoted: false,
        isDownvoted: false,
    };

    beforeEach(() => {
        cleanup();
        useVote.mockImplementation(() => ({
            score: 7,
            UpvoteIcon: () => <span>Up</span>,
            DownvoteIcon: () => <span>Down</span>,
            handleDownvote: mockDownvote,
            handleUpvote: mockUpvote,
            rootClasses: 'root-class',
            upvoteClasses: 'upvote-class',
            downvoteClasses: 'downvote-class',
        }));
    });

    it('renders correctly', () => {
        const {getByTestId} = render(<Vote {...defaultProps} />);
        expect(getByTestId(`upvote-${postId}`)).toBeInTheDocument();
        expect(getByTestId(`downvote-${postId}`)).toBeInTheDocument();
        expect(getByTestId(`score-${postId}`)).toHaveTextContent('7');
    });

    it('displays the correct score', () => {
        const {getByTestId} = render(<Vote {...defaultProps} />);
        const scoreElement = getByTestId(`score-${postId}`);
        expect(scoreElement).toHaveTextContent('7');
    });

    it('applies the correct styles to the score', () => {
        const {getByTestId} = render(<Vote {...defaultProps} />);
        const scoreElement = getByTestId(`score-${postId}`);
        expect(scoreElement).toHaveStyle('padding: 5px');
        expect(scoreElement).toHaveStyle('fontSize: 14px');
    });

    it('triggers handleUpvote on upvote button click', () => {
        const {getByTestId} = render(<Vote {...defaultProps} />);
        fireEvent.click(getByTestId(`upvote-${postId}`));
        expect(mockUpvote).toHaveBeenCalled();
    });

    it('triggers handleDownvote on downvote button click', () => {
        const {getByTestId} = render(<Vote {...defaultProps} />);
        fireEvent.click(getByTestId(`downvote-${postId}`));
        expect(mockDownvote).toHaveBeenCalled();
    });
});
