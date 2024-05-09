/* eslint-disable */
import React from 'react';
import {render} from '@testing-library/react';
import {MainContainer} from '../../pages/ScheduledPosts/MainContainer';

jest.mock('../../pages/ScheduledPosts/ScheduledPostsContainer', () => ({
    __esModule: true,
    ScheduledPostsContainer: ({about}) => <div data-testid="scheduled-posts-container" about={about} />,
}));

jest.mock('../../pages/ScheduledPosts/RecurringPosts', () => ({
    __esModule: true,
    RecurringPosts: () => <div data-testid="recurring-posts" />,
}));

describe('MainContainer', () => {
    const aboutMock = {someKey: 'someValue'};

    test('renders correctly when about prop is provided', () => {
        const {getByTestId} = render(<MainContainer about={aboutMock} />);
        expect(getByTestId('main-container-div')).toBeInTheDocument();
    });

    test('does not render when about prop is not provided', () => {
        const {queryByTestId} = render(<MainContainer />);
        expect(queryByTestId('main-container-div')).not.toBeInTheDocument();
    });

    test('renders ScheduledPostsContainer with correct props when about prop is provided', () => {
        const {getByTestId} = render(<MainContainer about={aboutMock} />);
        expect(getByTestId('main-container-div')).toBeInTheDocument();
        expect(getByTestId('scheduled-posts-container')).toBeInTheDocument();
    });

    test('renders RecurringPosts when about prop is provided', () => {
        const {getByTestId} = render(<MainContainer about={aboutMock} />);
        expect(getByTestId('recurring-posts')).toBeInTheDocument();
    });

    // Repeat the following test for all data-testid attributes
    test('has data-testid attribute', () => {
        const {getByTestId} = render(<MainContainer about={aboutMock} />);
        expect(getByTestId('main-container-div')).toBeInTheDocument();
        expect(getByTestId('scheduled-posts-container')).toBeInTheDocument();
        expect(getByTestId('recurring-posts')).toBeInTheDocument();
    });
});
