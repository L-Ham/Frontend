import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react';
import {it, expect, describe, jest} from '@jest/globals';
import {Vote} from '../../generic components/Post/PostBoost/vote.js';

describe('Vote', () => {
    const postId = 't3_1bmnuhw';

    it('should render upvote button', () => {
        const {getByTestId} = render(<Vote postId={postId} />);
        expect(getByTestId(`upvote-${postId}`)).toBeInTheDocument();
    });

    it('should render downvote button', () => {
        const {getByTestId} = render(<Vote postId={postId} />);
        expect(getByTestId(`downvote-${postId}`)).toBeInTheDocument();
    });

    it('should stop propagation when upvote button is clicked', () => {
        const {getByTestId} = render(<Vote postId={postId} />);
        const button = getByTestId(`upvote-${postId}`);
        const onClick = jest.fn();
        button.onclick = onClick;
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });

    it('should stop propagation when downvote button is clicked', () => {
        const {getByTestId} = render(<Vote postId={postId} />);
        const button = getByTestId(`downvote-${postId}`);
        const onClick = jest.fn();
        button.onclick = onClick;
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
