/* eslint-disable */
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import React from 'react';
import {ScheduledPosts} from '../../pages/ScheduledPosts/scheduledposts';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';
import {axiosInstance} from '../../requests/axios';
import { act } from 'react-dom/test-utils';

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

    // it('renders without crashing', async () => {
    //     const mockData = { description: 'Test subreddit' };
    
    //     const axiosInstance = require('../../requests/axios').axiosInstance;
    //     axiosInstance.get.mockResolvedValue({ data: mockData });
    
    //     await act(async () => {
    //       render(<ScheduledPosts name="testSubreddit" />);
    //     });
    
    //     expect(screen.getByTestId('scheduled-posts-div')).toBeInTheDocument();
    //   });
      
      it('calls the API on load', async () => {
        useNotifications.mockReturnValue({ addNotification: jest.fn() });
        axiosInstance.get.mockResolvedValue({ data: { description: 'Test subreddit' } });
        await act(async() => {
          render(<ScheduledPosts name="testSubreddit" />);
      });
        await waitFor(() => expect(axiosInstance.get).toHaveBeenCalledTimes(1));
      });

      it('does not render content if data is not available', async () => {
        useNotifications.mockReturnValue({ addNotification: jest.fn() });
        axiosInstance.get.mockResolvedValue({ data: null });
        await act(async() => {
          render(<ScheduledPosts name="testSubreddit" />);
      });
        expect(screen.queryByTestId('scheduled-posts-div')).toBeNull();
      });
      
      it('displays an error notification when the API call fails', async () => {
        const addNotification = jest.fn();
        useNotifications.mockReturnValue({ addNotification });
        axiosInstance.get.mockRejectedValue(new Error('API Error'));
        await act(async() => {
          render(<ScheduledPosts name="testSubreddit" />);
      });
        await waitFor(() => expect(addNotification).toHaveBeenCalledWith({ type: 'error', message: 'Error fetching subreddit about data' }));
      });

      it('refetches data when name prop changes', async () => {
        const addNotification = jest.fn();
        useNotifications.mockReturnValue({ addNotification });
        axiosInstance.get.mockResolvedValueOnce({ data: { description: 'First subreddit' } });
        const { rerender } = render(<ScheduledPosts name="subreddit1" />);
        axiosInstance.get.mockResolvedValueOnce({ data: { description: 'Second subreddit' } });
        await act(async() => {
          render(<ScheduledPosts name="testSubreddit" />);
      });
        await waitFor(() => expect(axiosInstance.get).toHaveBeenCalledTimes(2));
      });
});
