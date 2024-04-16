import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {Stats} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/Stats/stats.js';
import {statsClasses} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/Stats/stats.styles.js';

jest.mock('../../../../generic components/Post/HoverCard/Overlays/UserOverlay/Stats/stats.styles.js', () => ({
    statsClasses: {
        root: 'stats-root',
        postKarma: 'post-karma',
        commentKarma: 'comment-karma',
        value: 'karma-value',
        label: 'karma-label',
    },
}));

describe('Stats', () => {
    beforeEach(() => {
        cleanup();
    });

    it('should render the root element with correct class', () => {
        const {getByTestId} = render(<Stats authorId="user123" postKarma={1000} commentKarma={500} />);
        const statsElement = getByTestId('stats-user123');
        expect(statsElement).toHaveClass(statsClasses.root);
    });

    it('should render the post karma section with correct structure and classes', () => {
        const {getByTestId} = render(<Stats authorId="user123" postKarma={1000} commentKarma={500} />);
        const postKarma = getByTestId('postKarma-user123');
        expect(postKarma).toHaveClass(statsClasses.value);
        expect(postKarma.parentElement).toHaveClass(statsClasses.postKarma);
        expect(postKarma.nextSibling).toHaveClass(statsClasses.label);
    });

    it('should display the correct post karma value', () => {
        const {getByTestId} = render(<Stats authorId="user123" postKarma={1000} commentKarma={500} />);
        const postKarmaValue = getByTestId('postKarma-user123');
        expect(postKarmaValue.textContent).toBe('1,000');
    });

    it('should render the comment karma section with correct structure and classes', () => {
        const {getByTestId} = render(<Stats authorId="user123" postKarma={1000} commentKarma={500} />);
        const commentKarma = getByTestId('commentKarma-user123');
        expect(commentKarma).toHaveClass(statsClasses.value);
        expect(commentKarma.parentElement).toHaveClass(statsClasses.commentKarma);
        expect(commentKarma.nextSibling).toHaveClass(statsClasses.label);
    });

    it('should display the correct comment karma value', () => {
        const {getByTestId} = render(<Stats authorId="user123" postKarma={1000} commentKarma={500} />);
        const commentKarmaValue = getByTestId('commentKarma-user123');
        expect(commentKarmaValue.textContent).toBe('500');
    });
});
