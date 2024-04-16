import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data.js';
import {CreditBar} from '../../../generic components/Post/CreditBar/creditbar.js';
// import {MetadataCard} from '../../../generic components/Post/CreditBar/MetadataCard/metadatacard.js';
// import {BackButton} from '../../../generic components/Post/CreditBar/BackButton/back.js';
import {useCreditBar} from '../../../generic components/Post/CreditBar/creditbar.hooks.js';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
jest.mock('../../../generic components/Post/CreditBar/creditbar.styles.js', () => ({
    creditBarClasses: {
        wrapper: 'wrapper',
        base: 'base',
        icon: 'icon',
    },
}));

jest.mock('../../../generic components/Post/CreditBar/creditbar.hooks.js');
// jest.mock('../../../generic components/Post/CreditBar/BackButton/back.js');
// jest.mock('../../../generic components/Post/CreditBar/MetadataCard/metadatacard.js');

describe('CreditBar Component', () => {
    let handleSubredditRedirect;
    let Icon;

    beforeEach(() => {
        cleanup();
        handleSubredditRedirect = jest.fn();
        Icon = <div>Subreddit Icon</div>;
        useCreditBar.mockImplementation(() => ({
            handleSubredditRedirect,
            rootClassNames: 'root-class',
            Icon,
        }));
        // MetadataCard.mockImplementation(() => <div>metadatacard</div>);
        // BackButton.mockImplementation(() => <div>backbutton</div>);
    });

    it('renders correctly with minimal props', () => {
        const {getByTestId} = render(
            <CreditBar
                postId="t3_1c2k4vg"
                userId="65f5f5c26c3fec25017c306d"
                subredditId="t5_33vsv"
                subredditName="MBA"
                createdAt="2020-01-01T00:00:00Z"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
            />,
        );
        expect(getByTestId('creditbar-t3_1c2k4vg')).toBeInTheDocument();
    });

    it('applies correct class names', () => {
        const {getByTestId} = render(
            <CreditBar
                postId="t3_1c2k4vg"
                userId="65f5f5c26c3fec25017c306d"
                subredditId="t5_33vsv"
                subredditName="csMajors"
                createdAt="2020-01-01T00:00:00Z"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
            />,
        );
        expect(getByTestId('creditbar-t3_1c2k4vg')).toHaveClass('wrapper');
    });

    it('renders MetadataCard with correct props', () => {
        const {getByTestId} = render(
            <CreditBar
                postId="t3_1c2k4vg"
                userId="65f5f5c26c3fec25017c306d"
                subredditId="t5_33vsv"
                subredditName="csMajors"
                createdAt="2020-01-01T00:00:00Z"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
            />,
        );
        expect(getByTestId('metadatacard-t3_1c2k4vg')).toBeInTheDocument();
    });

    it('conditionally renders the icon div on COMMENTS_PAGE viewContext', () => {
        const {getByTestId} = render(
            <CreditBar
                postId="t3_1c2k4vg"
                userId="65f5f5c26c3fec25017c306d"
                subredditId="t5_33vsv"
                subredditName="csMajors"
                createdAt="2020-01-01T00:00:00Z"
                viewContext={VIEW_CONTEXTS.COMMENTS_PAGE}
            />,
        );
        expect(getByTestId('subreddit-icon-t3_1c2k4vg')).toBeInTheDocument();
    });

    it('does not render BackButton on SUBREDDIT_FEED viewContext', () => {
        const {queryByTestId} = render(
            <CreditBar
                postId="t3_1c2k4vg"
                userId="65f5f5c26c3fec25017c306d"
                subredditId="t5_33vsv"
                subredditName="csMajors"
                createdAt="2020-01-01T00:00:00Z"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
            />,
        );
        expect(queryByTestId('back-button-t3_1c2k4vg')).not.toBeInTheDocument();
    });

    it('does not render the icon div on SUBREDDIT_FEED viewContext', () => {
        const {queryByTestId} = render(
            <CreditBar
                postId="t3_1c2k4vg"
                userId="65f5f5c26c3fec25017c306d"
                subredditId="t5_33vsv"
                subredditName="csMajors"
                createdAt="2020-01-01T00:00:00Z"
                viewContext={VIEW_CONTEXTS.SUBREDDIT_FEED}
            />,
        );
        expect(queryByTestId('subreddit-icon-t3_1c2k4vg')).not.toBeInTheDocument();
    });
});
