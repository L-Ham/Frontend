/* eslint-disable no-undef */
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Invitepopup} from '../../pages/UserManagement/invitemod';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';

jest.mock('../../generic components/Notifications/notificationsContext.js');
import {beforeEach} from '@jest/globals';

describe('Invitepopup', () => {
    beforeEach(() => {
        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });

    it('should render the component without errors', () => {
        render(<Invitepopup />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should call the onxclick function when the cancel button is clicked', () => {
        const mockOnxclick = jest.fn();
        render(<Invitepopup onxclick={mockOnxclick} />);
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);
        expect(mockOnxclick).toHaveBeenCalled();
    });

    it('should update the username state when the input value changes', () => {
        render(<Invitepopup />);
        const usernameInput = screen.getByPlaceholderText('Enter username');
        fireEvent.change(usernameInput, {target: {value: 'testUsername'}});
        expect(usernameInput.value).toBe('testUsername');
    });


    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
