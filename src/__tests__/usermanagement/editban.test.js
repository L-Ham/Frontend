/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Editban} from '../../pages/UserManagement/editban';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';
import {beforeEach} from '@jest/globals';

jest.mock('../../generic components/Notifications/notificationsContext.js');

describe('Editban', () => {
    const mockOnXClick = jest.fn();
    const mockOnRemoveBan = jest.fn();

    beforeEach(() => {
        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
        render(
            <Editban
                name="testName"
                onxclick={mockOnXClick}
                username="testUsername"
                labeltext="testLabelText"
                onremoveban={mockOnRemoveBan}
            />,
        );
    });

    it('should render the component without errors', () => {
        const editBanElement = screen.getByTestId('2QVEWQ3RWGV3Q');
        expect(editBanElement).toBeInTheDocument();
    });


    it('should render the component without errors', () => {
        render(<Editban />);
    // Add your assertions here to verify that the component renders correctly
    });
});
