/* eslint-disable no-undef */
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Betterban} from '../../pages/UserManagement/betterban';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';

jest.mock('../../generic components/Notifications/notificationsContext.js');

describe('Betterban', () => {
    beforeEach(() => {
        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });


    it('should render the component without errors', () => {
        render(<Betterban />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should call the onxclick function when the cancel button is clicked', () => {
        const mockOnxclick = jest.fn();
        render(<Betterban onxclick={mockOnxclick} />);
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);
        expect(mockOnxclick).toHaveBeenCalled();
    });

    it('should update the username state when the username input value changes', () => {
        render(<Betterban />);
        const usernameInput = screen.getByPlaceholderText('u/username');
        fireEvent.change(usernameInput, {target: {value: 'testUsername'}});
        expect(usernameInput.value).toBe('testUsername');
    });

    it('should display an error message if the username is empty', () => {
        render(<Betterban />);
        const banUserButton = screen.getByText('Ban user');
        fireEvent.click(banUserButton);
        const errorMessage = screen.getByText('Can\'t leave Ban name empty');
        expect(errorMessage).toBeInTheDocument();
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
