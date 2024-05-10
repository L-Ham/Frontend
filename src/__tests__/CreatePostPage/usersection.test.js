/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {UserSection} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/UserSection/usersection.js';
import {useSelector, useDispatch} from 'react-redux';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock('../../generic components/Notifications/notificationsContext.js', () => ({
    useNotifications: jest.fn(),
}));

describe('UserSection', () => {
    beforeEach(() => {
        useSelector.mockImplementation((selector) => selector({
            user: {
                displayName: 'Test User',
                avatar: 'testAvatar.jpg',
                username: 'testUser',
            },
        }));

        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });

    afterEach(() => {
        useSelector.mockClear();
        useNotifications.mockClear();
    });

    test('renders user section', () => {
        const {getByTestId} = render(<UserSection />);
        expect(getByTestId('user-section-div')).toBeInTheDocument();
        expect(getByTestId('user-section-hr')).toBeInTheDocument();
        expect(getByTestId('user-section-inner-div')).toBeInTheDocument();
        expect(getByTestId('user-section-preview-div')).toBeInTheDocument();
        expect(getByTestId('user-section-button')).toBeInTheDocument();
        expect(getByTestId('user-section-edit-icon')).toBeInTheDocument();
        expect(getByTestId('user-section-mx-div')).toBeInTheDocument();
        expect(getByTestId('user-section-flex-div')).toBeInTheDocument();
        expect(getByTestId('user-section-relative-div')).toBeInTheDocument();
        expect(getByTestId('user-section-flair-profile-icon')).toBeInTheDocument();
        expect(getByTestId('user-section-ml-div')).toBeInTheDocument();
        expect(getByTestId('user-section-wfull-div')).toBeInTheDocument();
        expect(getByTestId('user-section-span')).toBeInTheDocument();
    });

    test('displays correct user data', () => {
        const {getByTestId} = render(<UserSection />);
        expect(getByTestId('user-section-span').textContent).toBe('Test User');
        expect(getByTestId('user-section-flair-profile-icon').src).toBe('http://localhost/testAvatar.jpg');
    });

    test('calls addNotification on button click', () => {
        const {addNotification} = useNotifications();
        const {getByTestId} = render(<UserSection />);
        fireEvent.click(getByTestId('user-section-button'));
        expect(addNotification).toHaveBeenCalled();
    });
});
