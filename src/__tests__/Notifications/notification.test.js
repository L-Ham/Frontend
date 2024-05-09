import {render, fireEvent} from '@testing-library/react';
import {Notification} from '../../generic components/Notifications/Notification/notification.js';
import {useNotification} from '../../generic components/Notifications/Notification/notification.hooks.js';

jest.mock('../../generic components/Notifications/Notification/notification.hooks.js');

describe('Notification', () => {
    const mockHandleClose = jest.fn();

    beforeEach(() => {
        useNotification.mockReturnValue({
            Icon: () => <div data-testid="icon-container-#wqdqwd1212" />,
            CloseIcon: () => <div data-testid="close-icon-ad##@$&@123sd" onClick={mockHandleClose} />,
            handleClose: mockHandleClose,
        });
    });


    it('renders correctly when notification is provided', () => {
        const notification = {type: 'info', message: 'Test message', id: '123'};
        const {getByTestId} = render(<Notification notification={notification} onClose={jest.fn()} />);
        expect(getByTestId('toaster-123@@#324sd')).toBeInTheDocument();
        expect(getByTestId('inner-container-124321asd12')).toBeInTheDocument();
        expect(getByTestId('icon-container-#wqdqwd1212')).toBeInTheDocument();
        expect(getByTestId('message-container-#12eds')).toHaveTextContent('Test message');
        expect(getByTestId('empty-div-1232#asd')).toBeInTheDocument();
        expect(getByTestId('close-icon-ad##@$&@123sd')).toBeInTheDocument();
    });

    it('calls handleClose when CloseIcon is clicked', () => {
        const notification = {type: 'info', message: 'Test message', id: '123'};
        const {getByTestId} = render(<Notification notification={notification} onClose={jest.fn()} />);
        fireEvent.click(getByTestId('close-icon-ad##@$&@123sd'));
        expect(mockHandleClose).toHaveBeenCalled();
    });

    it('uses correct id in the id attribute of the main div', () => {
        const notification = {type: 'info', message: 'Test message', id: '123'};
        const {getByTestId} = render(<Notification notification={notification} onClose={jest.fn()} />);
        expect(getByTestId('toaster-123@@#324sd')).toHaveAttribute('id', 'toaster-123');
    });

    it('uses correct type in the className of the main div', () => {
        const notification = {type: 'info', message: 'Test message', id: '123'};
        const {getByTestId} = render(<Notification notification={notification} onClose={jest.fn()} />);
        expect(getByTestId('toaster-123@@#324sd')).toHaveClass('info');
    });
});
