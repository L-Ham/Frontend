import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {titleClasses} from '../../generic components/Post/PostTitle/posttitle.styles.js';
import {PostTitle} from '../../generic components/Post/PostTitle/posttitle.js';

jest.mock('../../generic components/Post/PostTitle/posttitle.styles.js', () => ({
    titleClasses: {
        h1: 'post-title-h1',
        a: 'post-title-a',
    },
}));

describe('PostTitle Component', () => {
    beforeEach(() => {
        cleanup();
    });

    it('renders an h1 element when isCommentsPage is true', () => {
        const {getByTestId} = render(
            <PostTitle postId="123" title="Test Title" isCommentsPage={true} />,
        );
        const titleElement = getByTestId('title-123');
        expect(titleElement.tagName).toBe('H1');
        expect(titleElement.textContent).toBe('Test Title');
        expect(titleElement).toHaveClass('post-title-h1');
    });

    it('renders an a element when isCommentsPage is false', () => {
        const {getByTestId} = render(
            <PostTitle postId="123" title="Test Title" isCommentsPage={false} />,
        );
        const titleElement = getByTestId('title-123');
        expect(titleElement.tagName).toBe('A');
        expect(titleElement.textContent).toBe('Test Title');
        expect(titleElement).toHaveClass('post-title-a');
    });

    it('uses correct class for h1 based on titleClasses style', () => {
        const {getByTestId} = render(
            <PostTitle postId="123" title="Test Title" isCommentsPage={true} />,
        );
        const titleElement = getByTestId('title-123');
        expect(titleElement.className).toBe(titleClasses.h1);
    });

    it('uses correct class for a based on titleClasses style', () => {
        const {getByTestId} = render(
            <PostTitle postId="123" title="Test Title" isCommentsPage={false} />,
        );
        const titleElement = getByTestId('title-123');
        expect(titleElement.className).toBe(titleClasses.a);
    });
});
