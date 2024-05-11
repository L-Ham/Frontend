import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {ExitChats} from '../../layouts/Chats/exitchats';
import {describe, expect, jest, it} from '@jest/globals';
import '@testing-library/jest-dom';

describe('ExitChats', () => {
    // Test to ensure it renders without crashing
    it('renders without crashing', () => {
        const mockShow = jest.fn();
        const {getByRole} = render(<ExitChats show={mockShow} />);
        expect(getByRole('button')).toBeInTheDocument();
    });

    // Test to check if clicking the button calls the show function with false
    it('calls show with false when clicked', () => {
        const mockShow = jest.fn();
        const {getByRole} = render(<ExitChats show={mockShow} />);
        fireEvent.click(getByRole('button'));
        expect(mockShow).toHaveBeenCalledWith(false);
    });

    // Accessibility test to ensure the button has the correct aria-label
    it('has proper aria-label for accessibility', () => {
        const mockShow = jest.fn();
        const {getByLabelText} = render(<ExitChats show={mockShow} />);
        expect(getByLabelText('Minimize chat')).toBeInTheDocument();
    });

    // Snapshot test to ensure the rendered output does not change unexpectedly
    it('matches snapshot', () => {
        const mockShow = jest.fn();
        const {asFragment} = render(<ExitChats show={mockShow} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
