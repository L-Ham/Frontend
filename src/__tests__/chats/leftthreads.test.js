import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {LeftThreads} from '../../layouts/Chats/leftthreads.js';
import {describe, expect, jest, it} from '@jest/globals';
import '@testing-library/jest-dom';

describe('LeftThreads', () => {
    const mockOnSelect = jest.fn();

    it('renders without any chats', () => {
        render(<LeftThreads onSelect={mockOnSelect} chats={{}} />);
        const threadsDiv = screen.getByText('Threads');
        expect(threadsDiv).toBeInTheDocument();
    });

    it('does not trigger onSelect when there are no chats', () => {
        render(<LeftThreads onSelect={mockOnSelect} chats={{}} />);
        const threadsDiv = screen.getByText('Threads');
        fireEvent.click(threadsDiv);
        expect(mockOnSelect).not.toHaveBeenCalled();
    });

    it('triggers onSelect with the first chat\'s key when clicked', () => {
        const chats = {
            chat1: {message: 'Hello'},
            chat2: {message: 'World'},
        };
        render(<LeftThreads onSelect={mockOnSelect} chats={chats} />);
        const threadsDiv = screen.getByText('Threads');
        fireEvent.click(threadsDiv);
        expect(mockOnSelect).toHaveBeenCalledWith('chat1');
    });
});
