import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {ChatPreview} from '../../layouts/Chats/chatpreview.js';
import {describe, expect, jest, it} from '@jest/globals';
import '@testing-library/jest-dom';


describe('ChatPreview Component', () => {
    const mockOnSelect = jest.fn();
    const props = {
        sender: 'John Doe',
        lastMessage: 'Hello, World!',
        senderImageURL: 'https://example.com/avatar.png',
        date: '2024-05-10',
        unreadTotal: 5,
        onSelect: mockOnSelect,
    };

    it('renders correctly with given props', () => {
        render(<ChatPreview {...props} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Hello, World!')).toBeInTheDocument();
        expect(screen.getByText('2024-05-10')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument(); // Check if the unread messages indicator shows up
    });

    it('calls onSelect when clicked', () => {
        render(<ChatPreview {...props} />);
        const linkElement = screen.getByRole('link');
        fireEvent.click(linkElement);
        expect(mockOnSelect).toHaveBeenCalled();
    });

    it('does not show unread messages indicator when unreadTotal is 0', () => {
        render(<ChatPreview {...props} unreadTotal={0} />);
        const unreadIndicator = screen.queryByText('5');
        expect(unreadIndicator).toBeNull(); // The unread messages indicator should not be found
    });
});
