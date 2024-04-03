// FILEPATH: /D:/2025/Courses_175/Spring 2024/SW/Frontend/src/__tests__/Post/CreditBar/MetadataCard/metadatacard.test.js

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {MetadataCard} from '../../../generic components/Post/CreditBar/MetadataCard/metadatacard.js';
import {metaClasses} from '../../../generic components/Post/CreditBar/MetadataCard/metadatacard.styles.js';
import {describe, it, expect} from '@jest/globals';
import {DATA, VIEW_CONTEXTS} from '../../../generic components/Post/data.js';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
describe('MetadataCard', () => {
    const postId = 't3_1bmnuhw';
    const subredditId = DATA[postId].subreddit_id;
    const authorId = DATA[postId].author_fullname;
    const created = DATA[postId].created;

    it('should render the MetadataCard component', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<MetadataCard
            postId={postId}
            subredditId={subredditId}
            authorId={authorId}
            viewContext={viewContext}
            created={created}
        />);

        const metadataCard = screen.getByTestId(`metadatacard-${postId}`);
        expect(metadataCard).toBeInTheDocument();
    });

    it('should contain the HoverCard component for subreddit', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<MetadataCard
            postId={postId}
            subredditId={subredditId}
            authorId={authorId}
            viewContext={viewContext}
            created={created}
        />);

        const hoverCard = screen.getByTestId(`hovercard-${postId}-${subredditId}`);
        expect(hoverCard).toBeInTheDocument();
    });

    it('should contain the HoverCard component for author when viewContext is COMMENTS_PAGE', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<MetadataCard
            postId={postId}
            subredditId={subredditId}
            authorId={authorId}
            viewContext={viewContext}
            created={created}
        />);

        const hoverCard = screen.getByTestId(`hovercard-${postId}-${authorId}`);
        expect(hoverCard).toBeInTheDocument();
    });

    it('should not contain the HoverCard component for author when viewContext is not COMMENTS_PAGE', () => {
        const viewContext = VIEW_CONTEXTS.AGGREGATE_FEED;
        render(<MetadataCard
            postId={postId}
            subredditId={subredditId}
            authorId={authorId}
            viewContext={viewContext}
            created={created}
        />);

        const hoverCard = screen.queryByTestId(`hovercard-${postId}-${authorId}`);
        expect(hoverCard).not.toBeInTheDocument();
    });

    it('should have styles applied', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<MetadataCard
            postId={postId}
            subredditId={subredditId}
            authorId={authorId}
            viewContext={viewContext}
            created={created}
        />);

        const metadataCard = screen.getByTestId(`metadatacard-${postId}`);
        expect(metadataCard).toHaveClass(metaClasses.root);
    });
});
