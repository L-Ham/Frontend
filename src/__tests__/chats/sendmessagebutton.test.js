import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {SendMessageButton} from '../../layouts/Chats/sendmessagebutton.js';
import {describe, expect, test, jest} from '@jest/globals';

describe('SendMessageButton', () => {
    test('renders without crashing', () => {
        const mockSend = jest.fn();
        render(<SendMessageButton sendMessage={mockSend} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('calls sendMessage without args when image is not true', () => {
        const mockSend = jest.fn();
        render(<SendMessageButton sendMessage={mockSend} image={false} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockSend).toHaveBeenCalledTimes(1);
        expect(mockSend).toHaveBeenCalledWith(); // No arguments
    });

    test('calls sendMessage with 2 when image is true', () => {
        const mockSend = jest.fn();
        render(<SendMessageButton sendMessage={mockSend} image={true} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockSend).toHaveBeenCalledTimes(1);
        expect(mockSend).toHaveBeenCalledWith(2); // Argument 2 when image is true
    });
});
