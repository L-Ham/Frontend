import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {PrivateMenu} from '../../pages/Settings/tab specific components/chats tab/privatemenu.js';
import '@testing-library/jest-dom';
import {describe, expect, it, jest, beforeEach} from '@jest/globals';

describe('PrivateMenu', () => {
    const mockFunc = jest.fn();

    beforeEach(() => {
        mockFunc.mockClear();
    });

    it('renders correctly with initial value', () => {
        render(<PrivateMenu init="EVERYONE" func={mockFunc} id="test1" />);
        expect(screen.getByText('EVERYONE')).toBeInTheDocument();
    });

    it('toggles dropdown on button click', () => {
        render(<PrivateMenu init="EVERYONE" func={mockFunc} id="test1" />);
        const button = screen.getByText('EVERYONE');
        fireEvent.click(button); // Open dropdown
        expect(screen.getByText('Nobody')).toBeInTheDocument();
        fireEvent.click(button); // Close dropdown
        expect(screen.queryByText('Nobody')).not.toBeInTheDocument();
    });

    it('handles gender selection and function call', () => {
        render(<PrivateMenu init="EVERYONE" func={mockFunc} id="test1" />);
        const button = screen.getByText('EVERYONE');
        fireEvent.click(button); // Open dropdown
        const option = screen.getByText('Nobody');
        fireEvent.click(option); // Select option
        expect(screen.getByText('Nobody')).toBeInTheDocument();
        expect(mockFunc).toHaveBeenCalledWith('privateMessages', 'Nobody');
    });
});
