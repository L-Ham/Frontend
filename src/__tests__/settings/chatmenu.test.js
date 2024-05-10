import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {ChatMenu} from '../../pages/Settings/tab specific components/chats tab/chatmenu.js';
import '@testing-library/jest-dom';
import {describe, expect, it, jest} from '@jest/globals';

describe('ChatMenu', () => {
    const mockFunc = jest.fn();

    it('renders correctly', () => {
        render(<ChatMenu init="EVERYONE" func={mockFunc} id="test1" />);
        expect(screen.getByText('EVERYONE')).toBeInTheDocument();
    });

    it('toggles dropdown on button click', () => {
        render(<ChatMenu init="EVERYONE" func={mockFunc} id="test1" />);
        const button = screen.getByText('EVERYONE');
        fireEvent.click(button); // Open dropdown
        expect(screen.getByText('Accounts Older Than 30 Days')).toBeInTheDocument();
        fireEvent.click(button); // Close dropdown
        expect(screen.queryByText('Accounts Older Than 30 Days')).not.toBeInTheDocument();
    });

    it('handles gender selection', () => {
        render(<ChatMenu init="EVERYONE" func={mockFunc} id="test1" />);
        const button = screen.getByText('EVERYONE');
        fireEvent.click(button); // Open dropdown
        const option = screen.getByText('Accounts Older Than 30 Days');
        fireEvent.click(option);
        expect(mockFunc).toHaveBeenCalledWith('chatRequests', 'Accounts Older Than 30 Days');
    });
});
