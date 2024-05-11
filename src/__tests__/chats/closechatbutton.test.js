import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {CloseChatButton} from '../../layouts/Chats/closechatbutton';
import {describe, it, jest, expect} from '@jest/globals';
import '@testing-library/jest-dom';

describe('CloseChatButton', () => {
    // Test to ensure it renders without crashing
    it('renders without crashing', () => {
        const mockMinimizeChat = jest.fn();
        const {getByRole} = render(<CloseChatButton minimizeChat={mockMinimizeChat} />);
        expect(getByRole('button')).toBeInTheDocument();
    });

    // Test to check if clicking the button calls the minimizeChat function
    it('calls minimizeChat when clicked', () => {
        const mockMinimizeChat = jest.fn();
        const {getByRole} = render(<CloseChatButton minimizeChat={mockMinimizeChat} />);
        fireEvent.click(getByRole('button'));
        expect(mockMinimizeChat).toHaveBeenCalled();
    });

    // Accessibility test to ensure the button has the correct aria-label
    it('has proper aria-label for accessibility', () => {
        const mockMinimizeChat = jest.fn();
        const {getByLabelText} = render(<CloseChatButton minimizeChat={mockMinimizeChat} />);
        expect(getByLabelText('Minimize chat')).toBeInTheDocument();
    });

    // Snapshot test to ensure the rendered output does not change unexpectedly
    it('matches snapshot', () => {
        const mockMinimizeChat = jest.fn();
        const {asFragment} = render(<CloseChatButton minimizeChat={mockMinimizeChat} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
