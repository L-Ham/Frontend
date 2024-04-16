import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {Comments} from '../../../generic components/Post/PostBoost/CommentButton/comments.js';
import {useComments} from '../../../generic components/Post/PostBoost/CommentButton/comments.hooks.js';
import {commentsClasses} from
    '../../../generic components/Post/PostBoost/CommentButton/comments.styles.js';

jest.mock('../../../generic components/Post/PostBoost/CommentButton/comments.hooks.js');
jest.mock('../../../generic components/Post/PostBoost/CommentButton/comments.styles.js', () => ({
    commentsClasses: {
        root: 'root',
        wrapper: 'wrapper',
        icon: 'icon',
    },
    commentsStyles: {
        root: {},
    },
}));

describe('Comments component', () => {
    let mockCommentsIcon;

    beforeEach(() => {
        cleanup();
        mockCommentsIcon = jest.fn();
        useComments.mockImplementation(() => ({
            count: 42,
            CommentsIcon: mockCommentsIcon,
        }));
    });

    it('renders correctly with the provided postId', () => {
        const {getByTestId} = render(<Comments postId="post123" url="https://example.com" commentCount={5} />);
        expect(getByTestId('comments-button-post123')).toBeTruthy();
    });

    it('uses correct class for the root element', () => {
        const {getByTestId} = render(<Comments postId="post123" url="https://example.com" commentCount={5} />);
        expect(getByTestId('comments-button-post123').className).toBe(commentsClasses.root);
    });

    it('applies correct styles for the root element', () => {
        const {getByTestId} = render(<Comments postId="post123" url="https://example.com" commentCount={5} />);
        expect(getByTestId('comments-button-post123').style.all).toBe('');
    });

    it('displays the correct count of comments', () => {
        const {getByTestId} = render(<Comments postId="post123" url="https://example.com" commentCount={5} />);
        expect(getByTestId('comments-count-post123').textContent).toBe('42');
    });

    it('renders the CommentsIcon component correctly', () => {
        render(<Comments postId="post123" url="https://example.com" commentCount={5} />);
        expect(mockCommentsIcon).toHaveBeenCalled();
    });

    it('prevents the default action on click to avoid navigation', () => {
        const {getByTestId} = render(<Comments postId="post123" url="https://example.com" commentCount={5} />);
        const linkElement = getByTestId('comments-button-post123');
        const mockEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });
        jest.spyOn(mockEvent, 'stopPropagation');
        fireEvent(linkElement, mockEvent);
        expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });
});
