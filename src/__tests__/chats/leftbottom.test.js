import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {LeftBottom} from '../../layouts/Chats/leftbottom.js';
import {describe, expect, jest, it} from '@jest/globals';
import '@testing-library/jest-dom';

describe('LeftBottom', () => {
    const mockOnSelectChat = jest.fn();

    it('renders "No chats available." when no chats are provided', () => {
        render(<LeftBottom chatsToBottom={{}} onSelectChat={mockOnSelectChat} />);
        expect(screen.getByText('No chats available.')).toBeInTheDocument();
    });

    it('renders chats correctly when chat data is provided', () => {
        const chatsToBottom = {
            'chat1': {
                name: 'Chat One',
                messages: [{message: 'Hello, World!', time: '10:00 AM'}],
                avatar: 'http://example.com/avatar1.png',
                unreadCount: 1,
            },
        };
        render(<LeftBottom chatsToBottom={chatsToBottom} onSelectChat={mockOnSelectChat} />);
        expect(screen.getByText('Chat One')).toBeInTheDocument();
        expect(screen.getByText('Hello, World!')).toBeInTheDocument();
        expect(screen.getByText('10:00 AM')).toBeInTheDocument();
    });

    it('calls onSelectChat with the correct chat ID when a chat is clicked', () => {
        const chatsToBottom = {
            'chat1': {
                name: 'Chat One',
                messages: [{message: 'Hello, World!', time: '10:00 AM'}],
                avatar: 'http://example.com/avatar1.png',
                unreadCount: 1,
            },
        };
        render(<LeftBottom chatsToBottom={chatsToBottom} onSelectChat={mockOnSelectChat} />);
        fireEvent.click(screen.getByText('Chat One'));
        expect(mockOnSelectChat).toHaveBeenCalledWith('chat1');
    });
});
