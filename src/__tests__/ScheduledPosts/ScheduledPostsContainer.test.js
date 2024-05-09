/* eslint-disable */
import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import {ScheduledPostsContainer} from '../../pages/ScheduledPosts/ScheduledPostsContainer';
import {Post} from '../../pages/ScheduledPosts/Post';
import {axiosInstance} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';
import { act } from 'react-dom/test-utils';

jest.mock('../../generic components/Notifications/notificationsContext.js', () => ({
    useNotifications: jest.fn(),
}));

jest.mock('../../pages/ScheduledPosts/Post', () => ({
    __esModule: true,
    Post: () => {
        return <div data-testid="post-component"/>;
    },
}));

// Mock axios
jest.mock('../../requests/axios', () => ({
    axiosInstance: {
        post: jest.fn(),
        patch: jest.fn(),
        delete: jest.fn(),
        get: jest.fn(),
    },
}));


describe('ScheduledPostsContainer', () => {
    const mockAbout = { communityDetails: { subredditId: 'testId' } };
    const mockPosts = [
        {
            title: 'testTitle',
            userName: 'testUser',
            type: 'testType',
            subredditName: 'testSubreddit',
            createdAt: new Date().toISOString(),
            scheduledMinutes: 30,
            isNSFW: false,
            isSpoiler: false,
        },
    ];
    const mockFormattedPosts = [
        {
            title: 'testTitle',
            user: 'testUser',
            type: 'testType',
            subreddit: 'testSubreddit',
            scheduledTime: '12:30 AM',
            scheduledDate: '1/1',
            isNsfw: false,
            isSpoiler: false,
        },
    ];
    const mockError = { response: { data: { message: 'testError' } } };

    beforeEach(() => {
        useNotifications.mockReturnValue({ addNotification: jest.fn() });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders without crashing', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });
         await act(async () => {
        render(<ScheduledPostsContainer about={mockAbout} />);
        });
        expect(screen.getByTestId('scheduled-posts-container-div')).toBeInTheDocument();
    });

    test('renders loading state', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: [] } });
        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders Post components', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });
        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        await waitFor(() => expect(screen.getAllByTestId('post-component').length).toBe(mockPosts.length));
    });

    test('handles absence of id', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });
        await act(async () => {
            render(<ScheduledPostsContainer about={{}} />);
            });
        expect(axiosInstance.get).not.toHaveBeenCalled();
    });

    test('handles presence of id', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });
        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        expect(axiosInstance.get).toHaveBeenCalledWith(API_ROUTES.getScheduledPosts(mockAbout.communityDetails.subredditId));
    });

    test('handles getScheduledPosts API call', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });
        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());
    });

    test('handles error in getScheduledPosts API call', async () => {
        axiosInstance.get.mockRejectedValueOnce(mockError);
        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        await waitFor(() => expect(useNotifications().addNotification).toHaveBeenCalledWith({ type: 'error', message: mockError.response.data.message }));
    });

    test('handles loadPosts function', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });

        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());
    });

    test('handles useEffect hook', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });

        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        await waitFor(() => expect(axiosInstance.get).toHaveBeenCalled());
    });

    test('handles addNotification function', async () => {
        axiosInstance.get.mockRejectedValueOnce(mockError);
        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        await waitFor(() => expect(useNotifications().addNotification).toHaveBeenCalledWith({ type: 'error', message: mockError.response.data.message }));
    });

    test('handles useNotifications hook', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });

        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        expect(useNotifications).toHaveBeenCalled();
    });

    test('handles useState hook', async () => {
        axiosInstance.get.mockResolvedValueOnce({ data: { scheduledPosts: mockPosts } });

        const useStateSpy = jest.spyOn(React, 'useState');
        await act(async () => {
            render(<ScheduledPostsContainer about={mockAbout} />);
            });
        expect(useStateSpy).toHaveBeenCalled();
    });
});
