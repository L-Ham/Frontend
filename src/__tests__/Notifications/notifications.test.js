import {render, fireEvent} from '@testing-library/react';
import {Notifications} from '../../generic components/Notifications/notifications.js';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';
import {Notification} from '../../generic components/Notifications/Notification/notification.js';

jest.mock('../../generic components/Notifications/notificationsContext.js', () => ({
    useNotifications: jest.fn(),
}));

jest.mock('../../generic components/Notifications/Notification/notification.js', () => ({
    __esModule: true,
    Notification: ({onClose}) => {
        return <div data-testid="notification" onClick={onClose} />;
    },
}));

describe('Notifications', () => {
    beforeEach(() => {
        useNotifications.mockClear();
    });

    for (let i = 1; i < 51; i++) {
        test(`renders correctly with ${i} notifications`, () => {
            const notifications = Array(i).fill().map((_, id) => ({id}));
            const removeNotification = jest.fn();
            useNotifications.mockReturnValue({notifications, removeNotification});

            const {queryByTestId, getAllByTestId} = render(<Notifications />);

            if (i === 0) {
                expect(queryByTestId('notifications-container-#98**sjkss$$')).toBeNull();
            } else {
                expect(queryByTestId('notifications-container-#98**sjkss$$')).toBeInTheDocument();
                expect(getAllByTestId('notification')).toHaveLength(i);
                fireEvent.click(getAllByTestId('notification')[0]);
                expect(removeNotification).toHaveBeenCalled();
            }
        });
    }
});
