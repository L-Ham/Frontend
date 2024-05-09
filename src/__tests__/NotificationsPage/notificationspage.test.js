import {render, screen} from '@testing-library/react';
import {NotificationsPage} from '../../pages/NotificationsPage/notificationspage';
import {NotificationsContainer} from '../../layouts/Header/RightItems/Buttons/NotificationButton/Notifications/notificationscontainer';
import {NotificationsButtonProvider} from '../../layouts/Header/RightItems/Buttons/NotificationButton/notificationsbuttoncontext';

jest.mock('../../layouts/Header/RightItems/Buttons/NotificationButton/Notifications/notificationscontainer', () => ({
    __esModule: true,
    NotificationsContainer: () => {
        return <div data-testid="notifications-container"/>;
    },
}));

jest.mock('../../layouts/Header/RightItems/Buttons/NotificationButton/notificationsbuttoncontext', () => ({
    __esModule: true,
    NotificationsButtonProvider: () => {
        return <div data-testid="notifications-button-provider"/>;
    },
}));

describe('NotificationsPage', () => {
    test('renders without crashing', () => {
        render(<NotificationsPage />);
    });

    test('renders NotificationsContainer', () => {
        render(<NotificationsPage />);
        const notificationsContainer = screen.getByTestId('notifications-container');
        expect(notificationsContainer).toBeInTheDocument();
    });

    test('renders NotificationsButtonProvider', () => {
        render(<NotificationsPage />);
        const notificationsButtonProvider = screen.getByTestId('notifications-button-provider');
        expect(notificationsButtonProvider).toBeInTheDocument();
    });

    test('renders correct text', () => {
        render(<NotificationsPage />);
        const textElement = screen.getByText(/Notifications/i);
        expect(textElement).toBeInTheDocument();
    });

    // TODO: Repeat the above tests with different mock return values to maximize coverage
});
