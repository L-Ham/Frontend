import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {SendingMessage} from '../../pages/Message/SendingMessage/sengingmessage';
/*eslint-disable*/

describe('SendingMessage', () => {
    test('should render the SendingMessage component', () => {
        render(<SendingMessage />);

        // Assert that the component renders correctly
        expect(screen.getByText('send a private message')).toBeInTheDocument();
    });

    test('should submit the form when all fields are filled', () => {
        render(<SendingMessage />);

        const usernameInput = screen.getByTestId('message-username-send');
        const subjectInput = screen.getByTestId('message-input-subject--send');
        const messageInput = screen.getByTestId('message-send-text');
        const sendButton = screen.getByTestId('message-sendbutton');

        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(subjectInput, {target: {value: 'Test Subject'}});
        fireEvent.change(messageInput, {target: {value: 'Test Message'}});
        fireEvent.click(sendButton);

    // Assert that the form is submitted
    // Add your own assertions here based on your submit logic
    });
});
