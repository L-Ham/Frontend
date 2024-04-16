import React from 'react';
import {render, screen} from '@testing-library/react';
import {ChatSettings} from '../../pages/Settings/main components/tabs/chatsettings.js';
import '@testing-library/jest-dom';
import {describe, expect, it} from '@jest/globals';

describe('ChatSettings Component', () => {
    it('renders the component with initial settings', () => {
        render(<ChatSettings id="chatSettings1" />);

        // Check if the main heading is rendered
        expect(screen.getByText('Chat & messaging')).toBeInTheDocument();

        // Check if the settings tab headings are rendered
        expect(screen.getByText('MESSAGES')).toBeInTheDocument();

        // Check for presence of settings components
        expect(screen.getByText('Who can send you chat requests')).toBeInTheDocument();
        expect(screen.getByText('Who can send you private messages')).toBeInTheDocument();
        expect(screen.getByText('Mark all as read')).toBeInTheDocument();

        // Assert that the 'Everyone' text appears exactly twice for both settings
        const everyoneElements = screen.getAllByText('Everyone');
        expect(everyoneElements.length).toBe(2); // Adjust the number if 'Everyone' appears more times
    });
});
