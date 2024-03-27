// FILEPATH: /D:/2025/Courses_175/Spring 2024/SW/Frontend/src/__tests__/Post/postinfo.test.js

import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react';
import {it, expect, describe, jest} from '@jest/globals';
import {PostInfo} from '../../generic components/Post/postinfo.js';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
describe('PostInfo', () => {
    const postId = 't3_1bmnuhw';
    const viewContext = VIEW_CONTEXTS.AGGREGATE_FEED;

    it('should render join button when user is not a subscriber and viewContext is AggregateFeed', () => {
        const {getByTestId} = render(<PostInfo postId={postId} viewContext={viewContext} />);
        expect(getByTestId(`join-${postId}`)).toBeInTheDocument();
    });

    it('should render more button', () => {
        const {getByTestId} = render(<PostInfo postId={postId} viewContext={viewContext} />);
        expect(getByTestId(`more-${postId}`)).toBeInTheDocument();
    });

    it('should stop propagation when join button is clicked', () => {
        const {getByTestId} = render(<PostInfo postId={postId} viewContext={viewContext} />);
        const button = getByTestId(`join-${postId}`);
        const onClick = jest.fn();
        button.onclick = onClick;
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });

    it('should stop propagation when more button is clicked', () => {
        const {getByTestId} = render(<PostInfo postId={postId} viewContext={viewContext} />);
        const button = getByTestId(`more-${postId}`);
        const onClick = jest.fn();
        button.onclick = onClick;
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
