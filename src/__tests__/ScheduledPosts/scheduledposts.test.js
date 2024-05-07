/* eslint-disable */
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import React from 'react';
import {ScheduledPosts} from '../../pages/ScheduledPosts/scheduledposts';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';
import {axiosInstance} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';

jest.mock('../../generic components/Notifications/notificationsContext');
jest.mock('../../requests/axios');
// Mocking the child components
jest.mock('../../pages/ScheduledPosts/Header', () => ({
    __esModule: true,
    Header: () => {
        return <div data-testid="header"/>;
    },
}));

jest.mock('../../pages/ScheduledPosts/Main', () => ({
    __esModule: true,
    Main: () => {
        return <div data-testid="main"/>;
    },
}));

describe('ScheduledPosts', () => {
    const mockSetAbout = jest.fn();
    const mockAddNotification = jest.fn();
    const mockFetchSubredditAbout = jest.fn();
    const mockLoadData = jest.fn();

    beforeEach(() => {
        jest.spyOn(React, 'useState').mockReturnValue([null, mockSetAbout]);
        useNotifications.mockReturnValue({addNotification: mockAddNotification});
        axiosInstance.get.mockResolvedValue({data: {}});
        mockFetchSubredditAbout.mockResolvedValue({data: {}});
        mockLoadData.mockResolvedValue();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders without crashing', () => {
        render(<ScheduledPosts name="test"/>);
        expect(screen.getByTestId('scheduled-posts-div')).toBeInTheDocument();
    });

    test('renders Header component', () => {
        render(<ScheduledPosts name="test"/>);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    test('renders Main component', () => {
        render(<ScheduledPosts name="test"/>);
        expect(screen.getByTestId('main')).toBeInTheDocument();
    });

    // test('calls loadData on mount', async () => {
    //     render(<ScheduledPosts name="test"/>);
    //     await waitFor(() => expect(mockLoadData).toHaveBeenCalledTimes(1));
    // });

    // test('calls fetchSubredditAbout with correct argument', async () => {
    //     render(<ScheduledPosts name="test"/>);
    //     await waitFor(() => expect(mockFetchSubredditAbout).toHaveBeenCalledWith('test'));
    // });

    // test('calls setAbout with correct data', async () => {
    //     const testData = {data: 'testData'};
    //     mockFetchSubredditAbout.mockResolvedValueOnce(testData);
    //     render(<ScheduledPosts name="test"/>);
    //     await waitFor(() => expect(mockSetAbout).toHaveBeenCalledWith(testData.data));
    // });

    // test('calls addNotification when fetchSubredditAbout throws error', async () => {
    //     mockFetchSubredditAbout.mockRejectedValueOnce(new Error('Error'));
    //     render(<ScheduledPosts name="test"/>);
    //     await waitFor(() => expect(mockAddNotification).toHaveBeenCalledWith({type: 'error', message: 'Error fetching subreddit about data'}));
    // });

    // test('calls loadData when name prop changes', async () => {
    //     const {rerender} = render(<ScheduledPosts name="test"/>);
    //     rerender(<ScheduledPosts name="test2"/>);
    //     await waitFor(() => expect(mockLoadData).toHaveBeenCalledTimes(2));
    // });
});
