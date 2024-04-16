import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {MetadataCard} from '../../../generic components/Post/CreditBar/MetadataCard/metadatacard.js';
import {HoverCard} from '../../../generic components/Post/HoverCard/hovercard.js';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data.js';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
jest.mock('../../../generic components/Post/CreditBar/MetadataCard/metadatacard.styles.js', () => ({
    metaClasses: {
        root: 'metadatacard-root',
        base: 'metadatacard-base',
        time: 'metadatacard-time',
        dot: 'metadatacard-dot',
        comments: 'metadatacard-comments',
    },
}));
jest.mock('../../../generic components/Post/HoverCard/hovercard.js');

describe('MetadataCard Component', () => {
    beforeEach(() => {
        cleanup();
        HoverCard.mockImplementation(() => <div>Hovercard component</div>);
    });

    it('renders correctly with required props', () => {
        const {getByTestId} = render(
            <MetadataCard
                postId="post123"
                subredditId="sub123"
                subredditName="ExampleSubreddit"
                userId="user123"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
                createdAt="2021-04-01T12:00:00Z"
            />,
        );
        expect(getByTestId('metadatacard-post123')).toBeInTheDocument();
    });

    it('applies correct root class', () => {
        const {getByTestId} = render(
            <MetadataCard
                postId="post123"
                subredditId="sub123"
                subredditName="ExampleSubreddit"
                userId="user123"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
                createdAt="2021-04-01T12:00:00Z"
            />,
        );
        expect(getByTestId('metadatacard-post123')).toHaveClass('metadatacard-root');
    });

    it('displays time ago component correctly', () => {
        const {getByText} = render(
            <MetadataCard
                postId="post123"
                subredditId="sub123"
                subredditName="ExampleSubreddit"
                userId="user123"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
                createdAt="2021-04-01T12:00:00Z"
            />,
        );
        expect(getByText('3 years ago')).toBeInTheDocument();
    });

    it('conditionally renders the comments section on COMMENTS_PAGE view context', () => {
        const {getByTestId} = render(
            <MetadataCard
                postId="post123"
                subredditId="sub123"
                subredditName="ExampleSubreddit"
                userId="user123"
                viewContext={VIEW_CONTEXTS.COMMENTS_PAGE}
                createdAt="2021-04-01T12:00:00Z"
            />,
        );
        expect(getByTestId('metadatacard-post123').querySelector('.metadatacard-comments')).toBeInTheDocument();
    });

    it('does not render comments section on SUBREDDIT_FEED view context', () => {
        const {queryByTestId} = render(
            <MetadataCard
                postId="post123"
                subredditId="sub123"
                subredditName="ExampleSubreddit"
                userId="user123"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
                createdAt="2021-04-01T12:00:00Z"
            />,
        );
        expect(queryByTestId('metadatacard-post123').querySelector('.metadatacard-comments')).toBeNull();
    });
});
