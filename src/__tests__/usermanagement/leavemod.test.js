/* eslint-disable no-undef */
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Leavmod} from '../../pages/UserManagement/leavemod';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';
import {beforeEach} from '@jest/globals';

jest.mock('../../generic components/Notifications/notificationsContext.js');

describe('Leavmod', () => {
    beforeEach(() => {
        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });

    it('should render the component without errors', () => {
        render(<Leavmod />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should call the onxclick function when the cancel button is clicked', () => {
        const mockOnxclick = jest.fn();
        render(<Leavmod onxclick={mockOnxclick} />);
        const cancelButton = screen.getByTestId('myju67t54redcf');
        fireEvent.click(cancelButton);
        expect(mockOnxclick).toHaveBeenCalled();
    });


    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
