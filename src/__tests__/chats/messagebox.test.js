import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import {describe, expect, jest, it} from '@jest/globals';
import {MessageBox} from '../../layouts/Chats/messagebox.js';
import '@testing-library/jest-dom';
describe('MessageBox', () => {
    const mockSetMessage = jest.fn();

    it('renders with empty input as default', () => {
        render(<MessageBox setMessage={mockSetMessage} message="" />);
        const textarea = screen.getByPlaceholderText('Message written'); // Match the placeholder text exactly
        expect(textarea.value).toBe('');
    });

    it('updates local state and calls setMessage on input change', () => {
        render(<MessageBox setMessage={mockSetMessage} message="" />);
        const textarea = screen.getByPlaceholderText('Message written'); // Match the placeholder text exactly
        fireEvent.change(textarea, {target: {value: 'Hello, world!'}});
        expect(textarea.value).toBe('Hello, world!');
        expect(mockSetMessage).toHaveBeenCalledWith('Hello, world!');
    });

    it('syncs local state with external message prop', () => {
        const {rerender} = render(<MessageBox setMessage={mockSetMessage} message="" />);
        const textarea = screen.getByPlaceholderText('Message written'); // Match the placeholder text exactly
        // Initially empty
        expect(textarea.value).toBe('');
        // Re-render with new prop
        rerender(<MessageBox setMessage={mockSetMessage} message="New message" />);
        expect(textarea.value).toBe('New message');
    });
});
