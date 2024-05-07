/* eslint-disable */
import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import {ScheduledPostsContainer} from '../../pages/ScheduledPosts/ScheduledPostsContainer';
import {Post} from '../../pages/ScheduledPosts/Post';
import {axiosInstance} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';

jest.mock('../../generic components/Notifications/notificationsContext.js', () => ({
    useNotifications: jest.fn(),
}));

jest.mock('../../pages/ScheduledPosts/Post', () => ({
    __esModule: true,
    Post: () => {
        return <div data-testid="post-component"/>;
    },
}));

jest.mock('../../requests/axios', () => ({
    __esModule: true,
    axiosInstance: {
        get: jest.fn(),
    },
}));

jest.mock('../../requests/routes', () => ({
    __esModule: true,
    API_ROUTES: {
        getSchedulePosts: jest.fn(),
    },
}));

const mockPosts = [
    {
        title: 'testing sched',
        user: 'artyyyGuy',
        subreddit: 'flowersWorldForYou',
        scheduledTime: '9:00pm',
        scheduledDate: '5/1',
        isNsfw: true,
        isSpoiler: true,
    },
    {
        title: 'this is a post',
        user: 'gaser',
        subreddit: 'flowersWorldForYou',
        scheduledTime: '8:00pm',
        scheduledDate: '2/4',
        isNsfw: false,
        isSpoiler: true,
    },
];


describe('ScheduledPostsContainer2', () => {
    beforeEach(() => {
        axiosInstance.get.mockResolvedValue({data: mockPosts});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
        expect(screen.getByTestId('scheduled-posts-container-div')).toBeInTheDocument();
    });

    it('calls getSchedulePosts function on component mount', () => {
        render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
        expect(API_ROUTES.getSchedulePosts).toHaveBeenCalled();
    });

    it('calls loadPosts function on component mount', () => {
        render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
        expect(axiosInstance.get).toHaveBeenCalled();
    });

    // it('calls setScheduledPosts function with the correct data', async () => {
    //     render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(setScheduledPosts).toHaveBeenCalledWith(mockPosts);
    //     });
    // });

    // it('calls addNotification function when there is an error fetching posts', async () => {
    //     axiosInstance.get.mockRejectedValueOnce(new Error('Failed to fetch posts'));
    //     render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(addNotification).toHaveBeenCalledWith('Failed to fetch posts');
    //     });
    // });

    // it('renders the correct number of Post components based on the scheduledPosts state', async () => {
    //     render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(mockPosts.length);
    //     });
    // });

    // it('renders the Post components with the correct props', async () => {
    //     render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         const postComponents = screen.getAllByTestId('post-component');
    //         postComponents.forEach((component, index) => {
    //             expect(component).toHaveAttribute('title', mockPosts[index].title);
    //             expect(component).toHaveAttribute('user', mockPosts[index].user);
    //             expect(component).toHaveAttribute('subreddit', mockPosts[index].subreddit);
    //             expect(component).toHaveAttribute('scheduledTime', mockPosts[index].scheduledTime);
    //             expect(component).toHaveAttribute('scheduledDate', mockPosts[index].scheduledDate);
    //             expect(component).toHaveAttribute('isNsfw', mockPosts[index].isNsfw.toString());
    //             expect(component).toHaveAttribute('isSpoiler', mockPosts[index].isSpoiler.toString());
    //         });
    //     });
    // });

    it('renders the scheduled-posts-container-div', () => {
        render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
        expect(screen.getByTestId('scheduled-posts-container-div')).toBeInTheDocument();
    });

    // it('renders the post-idx for each post', async () => {
    //     render(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         const postComponents = screen.getAllByTestId('post-component');
    //         postComponents.forEach((component, index) => {
    //             expect(component).toHaveAttribute('post-idx', index.toString());
    //         });
    //     });
    // });

    it('re-renders correctly when the id prop changes', () => {
        const {rerender} = render(
            <ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />,
        );
        rerender(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'newTestId'}}} />);
        expect(API_ROUTES.getSchedulePosts).toHaveBeenCalledTimes(2);
    });

    // it('re-renders correctly when the scheduledPosts state changes', async () => {
    //     const {rerender} = render(
    //         <ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />,
    //     );
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(mockPosts.length);
    //     });
    //     const newMockPosts = [
    //         {
    //             title: 'new post',
    //             user: 'newUser',
    //             subreddit: 'newSubreddit',
    //             scheduledTime: '10:00pm',
    //             scheduledDate: '5/2',
    //             isNsfw: false,
    //             isSpoiler: false,
    //         },
    //     ];
    //     axiosInstance.get.mockResolvedValueOnce({data: newMockPosts});
    //     rerender(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(newMockPosts.length);
    //     });
    // });

    // it('re-renders correctly when there is an error fetching posts', async () => {
    //     const {rerender} = render(
    //         <ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />,
    //     );
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(mockPosts.length);
    //     });
    //     axiosInstance.get.mockRejectedValueOnce(new Error('Failed to fetch posts'));
    //     rerender(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(addNotification).toHaveBeenCalledWith('Failed to fetch posts');
    //     });
    // });

    // it('re-renders correctly when the getSchedulePosts function returns different data', async () => {
    //     const {rerender} = render(
    //         <ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />,
    //     );
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(mockPosts.length);
    //     });
    //     const newMockPosts = [
    //         {
    //             title: 'new post',
    //             user: 'newUser',
    //             subreddit: 'newSubreddit',
    //             scheduledTime: '10:00pm',
    //             scheduledDate: '5/2',
    //             isNsfw: false,
    //             isSpoiler: false,
    //         },
    //     ];
    //     axiosInstance.get.mockResolvedValueOnce({data: newMockPosts});
    //     rerender(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(newMockPosts.length);
    //     });
    // });

    // it('re-renders correctly when the loadPosts function is called with different data', async () => {
    //     const {rerender} = render(
    //         <ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />,
    //     );
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(mockPosts.length);
    //     });
    //     const newMockPosts = [
    //         {
    //             title: 'new post',
    //             user: 'newUser',
    //             subreddit: 'newSubreddit',
    //             scheduledTime: '10:00pm',
    //             scheduledDate: '5/2',
    //             isNsfw: false,
    //             isSpoiler: false,
    //         },
    //     ];
    //     axiosInstance.get.mockResolvedValueOnce({data: newMockPosts});
    //     rerender(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(newMockPosts.length);
    //     });
    // });

    // it('re-renders correctly when the setScheduledPosts function is called with different data', async () => {
    //     const {rerender} = render(
    //         <ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />,
    //     );
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(mockPosts.length);
    //     });
    //     const newMockPosts = [
    //         {
    //             title: 'new post',
    //             user: 'newUser',
    //             subreddit: 'newSubreddit',
    //             scheduledTime: '10:00pm',
    //             scheduledDate: '5/2',
    //             isNsfw: false,
    //             isSpoiler: false,
    //         },
    //     ];
    //     axiosInstance.get.mockResolvedValueOnce({data: newMockPosts});
    //     rerender(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(newMockPosts.length);
    //     });
    // });

    // it('re-renders correctly when the addNotification function is called with different data', async () => {
    //     const {rerender} = render(
    //         <ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />,
    //     );
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(mockPosts.length);
    //     });
    //     axiosInstance.get.mockRejectedValueOnce(new Error('Failed to fetch posts'));
    //     rerender(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         expect(addNotification).toHaveBeenCalledWith('Failed to fetch posts');
    //     });
    // });

    // it('re-renders correctly when the Post components are rendered with different props', async () => {
    //     const {rerender} = render(
    //         <ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />,
    //     );
    //     await waitFor(() => {
    //         expect(screen.getAllByTestId('post-component')).toHaveLength(mockPosts.length);
    //     });
    //     const newMockPosts = [
    //         {
    //             title: 'new post',
    //             user: 'newUser',
    //             subreddit: 'newSubreddit',
    //             scheduledTime: '10:00pm',
    //             scheduledDate: '5/2',
    //             isNsfw: false,
    //             isSpoiler: false,
    //         },
    //     ];
    //     axiosInstance.get.mockResolvedValueOnce({data: newMockPosts});
    //     rerender(<ScheduledPostsContainer about={{communityDetails: {subredditId: 'testId'}}} />);
    //     await waitFor(() => {
    //         const postComponents = screen.getAllByTestId('post-component');
    //         postComponents.forEach((component, index) => {
    //             expect(component).toHaveAttribute('title', newMockPosts[index].title);
    //             expect(component).toHaveAttribute('user', newMockPosts[index].user);
    //             expect(component).toHaveAttribute('subreddit', newMockPosts[index].subreddit);
    //             expect(component).toHaveAttribute('scheduledTime', newMockPosts[index].scheduledTime);
    //             expect(component).toHaveAttribute('scheduledDate', newMockPosts[index].scheduledDate);
    //             expect(component).toHaveAttribute('isNsfw', newMockPosts[index].isNsfw.toString());
    //             expect(component).toHaveAttribute('isSpoiler', newMockPosts[index].isSpoiler.toString());
    //         });
    //     });
    // });
});
