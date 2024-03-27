import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react';
import {it, expect, describe} from '@jest/globals';
import {CreditBar} from '../../generic components/Post/creditbar.js';
import {VIEW_CONTEXTS, DATA} from '../../generic components/Post/data.js';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

global.window = Object.create(window);
const url = 'https://www.reddit.com/';
Object.defineProperty(window, 'location', {
    value: {
        href: url,
    },
});

describe('CreditBar', () => {
    const postId = 't3_1bmnuhw';
    const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;

    it('should render back button', () => {
        const {getByTestId} = render(<CreditBar postId={postId} viewContext={viewContext} />);
        expect(getByTestId(`back-${postId}`)).toBeInTheDocument();
    });

    it('should render subreddit button', () => {
        const {getByTestId} = render(<CreditBar postId={postId} viewContext={viewContext} />);
        expect(getByTestId(`subreddit-${postId}`)).toBeInTheDocument();
    });

    it('should navigate to subreddit when subreddit button is clicked', () => {
        const {getByTestId} = render(<CreditBar postId={postId} viewContext={viewContext} />);
        const button = getByTestId(`subreddit-${postId}`);
        fireEvent.click(button);
        const subredditPrefixedName = DATA[postId].subreddit_name_prefixed;
        expect(window.location.href).toBe('https://www.reddit.com/' + subredditPrefixedName);
    });

    // Add more tests as needed
});
