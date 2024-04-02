// FILEPATH: /D:/2025/Courses_175/Spring 2024/SW/Frontend/src/__tests__/Post/CreditBar/creditbar.test.js

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {CreditBar} from '../../../generic components/Post/CreditBar/creditbar.js';
import {creditBarClasses} from '../../../generic components/Post/CreditBar/creditbar.styles.js';
import {describe, it, expect} from '@jest/globals';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data.js';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
describe('CreditBar', () => {
    const postId = 't3_1bmnuhw';

    it('should render the CreditBar component [COMMENTS]', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<CreditBar postId={postId} viewContext={viewContext} />);

        const creditBar = screen.getByTestId(`creditbar-${postId}`);
        expect(creditBar).toBeInTheDocument();
    });

    it('should render the CreditBar component [AGGREGATE FEED]', () => {
        const viewContext = VIEW_CONTEXTS.AGGREGATE_FEED;
        render(<CreditBar postId={postId} viewContext={viewContext} />);

        const creditBar = screen.getByTestId(`creditbar-${postId}`);
        expect(creditBar).toBeInTheDocument();
    });

    it('should render the BackButton component [COMMENTS]', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<CreditBar postId={postId} viewContext={viewContext} />);

        const backButton = screen.getByTestId(`back-${postId}`);
        expect(backButton).toBeInTheDocument();
    });

    it('shouldn\'t render the BackButton component [AGGREGATE FEED]', () => {
        const viewContext = VIEW_CONTEXTS.AGGREGATE_FEED;
        render(<CreditBar postId={postId} viewContext={viewContext} />);

        const backButton = screen.queryByTestId(`back-${postId}`);
        expect(backButton).not.toBeInTheDocument();
    });

    it('should render the MetadataCard component [COMMENTS]', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<CreditBar postId={postId} viewContext={viewContext} />);

        const metadataCard = screen.getByTestId(`metadatacard-${postId}`);
        expect(metadataCard).toBeInTheDocument();
    });

    it('should render the MetadataCard component [AGGREGATE FEED]', () => {
        const viewContext = VIEW_CONTEXTS.AGGREGATE_FEED;
        render(<CreditBar postId={postId} viewContext={viewContext} />);

        const metadataCard = screen.getByTestId(`metadatacard-${postId}`);
        expect(metadataCard).toBeInTheDocument();
    });

    it('should render the MetadataCard component', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<CreditBar postId={postId} viewContext={viewContext} />);

        const metadataCard = screen.getByTestId(`metadatacard-${postId}`);
        expect(metadataCard).toBeInTheDocument();
    });

    it('should have styles applied', () => {
        const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;
        render(<CreditBar postId={postId} viewContext={viewContext} />);

        const creditBar = screen.getByTestId(`creditbar-${postId}`);
        expect(creditBar).toHaveClass(creditBarClasses.wrapper);
    });
});
