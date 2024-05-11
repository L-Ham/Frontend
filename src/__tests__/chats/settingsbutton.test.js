import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {SettingsButton} from '../../layouts/Chats/settingsbutton.js';
import {describe, expect, test} from '@jest/globals';
describe('SettingsButton', () => {
    test('renders without crashing', () => {
        render(<SettingsButton />);
        const button = document.querySelector('#settinggss'); // Select by ID
        expect(button).toBeInTheDocument();
    });

    test('toggles menu visibility on click', () => {
        render(<SettingsButton />);
        const button = document.querySelector('#settinggss'); // Select by ID
        fireEvent.click(button);
        expect(screen.getByText(/mute notifications/i)).toBeVisible();
        fireEvent.click(button);
        expect(screen.queryByText(/mute notifications/i)).not.toBeInTheDocument();
    });

    test('handles mute notifications', () => {
        render(<SettingsButton />);
        const button = document.querySelector('#settinggss'); // Select by ID
        fireEvent.click(button);
        const muteButton = screen.getByText(/mute notifications/i);
        fireEvent.click(muteButton);
        expect(screen.queryByText(/mute notifications/i)).not.toBeInTheDocument();
    });

    test('handles hide chat', () => {
        render(<SettingsButton />);
        const button = document.querySelector('#settinggss'); // Select by ID
        fireEvent.click(button);
        const hideButton = screen.getByText(/hide chat/i);
        fireEvent.click(hideButton);
        expect(screen.queryByText(/hide chat/i)).not.toBeInTheDocument();
    });
});
