import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {it, expect, describe} from '@jest/globals';
import {Post} from '../../generic components/Post/post.js';
import {VIEW_CONTEXTS, DATA} from '../../generic components/Post/data.js';


import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

describe('Post', () => {
    const postId = 't3_1bmnuhw';
    const viewContextAggregateFeed = VIEW_CONTEXTS.AGGREGATE_FEED;
    const viewContextCommentsPage = VIEW_CONTEXTS.COMMENTS_PAGE;

    it('should render post title correctly in AggregateFeed context', () => {
        const {getByTestId} = render(<Post postId={postId} viewContext={viewContextAggregateFeed} />);
        const titleElement = getByTestId(`title-${postId}`);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.tagName).toBe('DIV');
    });

    it('should render post title correctly in CommentsPage context', () => {
        const {getByTestId} = render(<Post postId={postId} viewContext={viewContextCommentsPage} />);
        const titleElement = getByTestId(`title-${postId}`);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.tagName).toBe('H1');
    });

    it('should render anchor element when context is not CommentsPage', () => {
        const {getByTestId} = render(<Post postId={postId} viewContext={viewContextAggregateFeed} />);
        // use testid link-<postId> to test for anchor element
        const anchorElement = getByTestId(`link-${postId}`);
        expect(anchorElement).toBeInTheDocument();
        expect(anchorElement.getAttribute('href')).toBe(DATA[postId].contentHref);
    });

    it('should not render anchor element when context is CommentsPage', () => {
        const {getByTestId} = render(<Post postId={postId} viewContext={viewContextCommentsPage} />);
        // expect no anchor element to be rendered
        expect(() => getByTestId(`link-${postId}`)).toThrow();
    });

    it('should have correct styling in AggregateFeed context', () => {
        const {container} = render(<Post postId={postId} viewContext={viewContextAggregateFeed} />);
        const postElement = container.firstChild;
        expect(postElement).toHaveClass(`relative my-1 block w-10/12 rounded-[16px] bg-[var(--bg-neutral)]` +
        ` px-4 py-1 hover:bg-[var(--bg-neutral-hover)]`);
    });

    it('should have correct styling in CommentsPage context', () => {
        const {container} = render(<Post postId={postId} viewContext={viewContextCommentsPage} />);
        const postElement = container.firstChild;
        expect(postElement).toHaveClass('relative my-1 block w-10/12 rounded-[16px] bg-[var(--bg-neutral)] px-4 py-1');
    });
});
