/* eslint-disable */
import {render, fireEvent, screen, waitFor} from '@testing-library/react';
import {AddReason} from '../../pages/RulesPage/Forms/AddReason/addreason';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';
import {axiosInstance} from '../../requests/axios';

jest.mock('../../pages/RulesPage/rulespagecontext');
jest.mock('../../generic components/Notifications/notificationsContext');
jest.mock('../../requests/axios');

describe('AddReason', () => {
    beforeEach(() => {
        useRulesPage.mockReturnValue({
            setAddReasonView: jest.fn(),
            about: {communityDetails: {subredditId: 'testSubredditId'}},
            setRemovalReasons: jest.fn(),
        });

        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });

        axiosInstance.get.mockResolvedValue({data: {}});
        axiosInstance.post.mockResolvedValue({data: {message: 'Success'}});
        axiosInstance.patch.mockResolvedValue({data: {message: 'Success'}});
        axiosInstance.delete.mockResolvedValue({data: {message: 'Success'}});
    });

    it('renders without crashing', () => {
        render(<AddReason reason={{}} idx={0} />);
    });

    it('renders all elements with data-testid', () => {
        render(<AddReason reason={{}} idx={0} />);
        expect(screen.getByTestId('section-reason')).toBeInTheDocument();
        expect(screen.getByTestId('header-reason')).toBeInTheDocument();
        expect(screen.getByTestId('close-button')).toBeInTheDocument();
        expect(screen.getByTestId('close-svg')).toBeInTheDocument();
        expect(screen.getByTestId('body-reason')).toBeInTheDocument();
        expect(screen.getByTestId('label-reason')).toBeInTheDocument();
        expect(screen.getByTestId('input-title')).toBeInTheDocument();
        expect(screen.getByTestId('characters-remaining')).toBeInTheDocument();
        expect(screen.getByTestId('message-label')).toBeInTheDocument();
        expect(screen.getByTestId('greeting-text')).toBeInTheDocument();
        expect(screen.getByTestId('textarea-message')).toBeInTheDocument();
        expect(screen.getByTestId('characters-remaining-message')).toBeInTheDocument();
        expect(screen.getByTestId('footer-reason')).toBeInTheDocument();
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
        expect(screen.getByTestId('cancel-button')).toBeInTheDocument();
    });
});

describe('AddReason Form Submission', () => {
    beforeEach(() => {
        useRulesPage.mockReturnValue({
            setAddReasonView: jest.fn(),
            about: {communityDetails: {subredditId: 'testSubredditId'}},
            setRemovalReasons: jest.fn(),
        });

        useNotifications.mockReturnValue({
            addNotification: (notification) => {
                return <div data-testid="mocked-div">{notification.message}</div>;
            },
        });

        axiosInstance.get.mockResolvedValue({data: {}});
        axiosInstance.post.mockResolvedValue({data: {message: 'Success'}});
        axiosInstance.patch.mockResolvedValue({data: {message: 'Success'}});
        axiosInstance.delete.mockResolvedValue({data: {message: 'Success'}});
    });

    it('submits new reason correctly', async () => {
        const {getByTestId} = render(<AddReason reason={{}} idx={0} />);
        fireEvent.change(getByTestId('input-title'), {target: {value: 'New Reason'}});
        fireEvent.change(getByTestId('textarea-message'), {target: {value: 'Detailed explanation'}});
        fireEvent.click(getByTestId('submit-button'));

        await waitFor(() => {
            expect(axiosInstance.post).toHaveBeenCalledWith(expect.anything(), {
                subredditId: 'testSubredditId',
                title: 'New Reason',
                message: 'Detailed explanation',
            });
            expect(screen.getByTestId('section-reason')).toBeInTheDocument();
        });
    });

    it('submits edited reason correctly', async () => {
        const reason = {title: 'Existing Reason', message: 'Existing message', _id: 'reason123'};
        const {getByTestId} = render(<AddReason reason={reason} idx={0} />);
        fireEvent.click(getByTestId('submit-button'));

        await waitFor(() => {
            expect(axiosInstance.patch).toHaveBeenCalledWith(expect.anything(), {
                subredditId: 'testSubredditId',
                title: 'Existing Reason',
                message: 'Existing message',
                reasonId: 'reason123',
            });
        });
    });

    //     it('handles API errors on submission', async () => {
    //         axiosInstance.post.mockRejectedValueOnce({response: {data: {message: 'Error occurred'}}});
    //         const {getByTestId} = render(<AddReason reason={{}} idx={0} />);
    //         fireEvent.click(getByTestId('submit-button'));

    //         await waitFor(() => {
    //             expect(screen.getByText('Error occurred')).toBeInTheDocument();
    //         });
    //     });
    // });

    // describe('AddReason Validation', () => {
    //     beforeEach(() => {
    //         useRulesPage.mockReturnValue({
    //             setAddReasonView: jest.fn(),
    //             about: {communityDetails: {subredditId: 'testSubredditId'}},
    //             setRemovalReasons: jest.fn(),
    //         });

    //         useNotifications.mockReturnValue({
    //             addNotification: jest.fn(),
    //         });

    //         axiosInstance.get.mockResolvedValue({data: {}});
    //         axiosInstance.post.mockResolvedValue({data: {message: 'Success'}});
    //         axiosInstance.patch.mockResolvedValue({data: {message: 'Success'}});
    //         axiosInstance.delete.mockResolvedValue({data: {message: 'Success'}});
    //     });

    //     it('does not submit with empty fields', () => {
    //         const {getByTestId} = render(<AddReason reason={{}} idx={0} />);
    //         fireEvent.click(getByTestId('submit-button'));

//         expect(axiosInstance.post).not.toHaveBeenCalled();
//         expect(screen.getByText('Please fill in all the fields')).toBeInTheDocument();
//     });
});

