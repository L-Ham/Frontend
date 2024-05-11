import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Muted} from '../../pages/UserManagement/muted';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Muted', () => {
    it('should render the component without errors', () => {
        render(<Muted />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the "Mute user" button', () => {
        render(<Muted />);
        const button = screen.getByRole('button', {name: 'Mute user'});
        expect(button).toBeInTheDocument();
    });

    it('should display the search input field', () => {
        render(<Muted />);
        const input = screen.getByPlaceholderText('Search for a user');
        expect(input).toBeInTheDocument();
    });

    it('should display the search button', () => {
        render(<Muted />);
        const button = screen.getByTestId('vabtwny5eme');
        expect(button).toBeInTheDocument();
    });

    it('should update the search value when typing in the input field', () => {
        render(<Muted />);
        const input = screen.getByPlaceholderText('Search for a user');
        fireEvent.change(input, {target: {value: 'testUser'}});
        expect(input.value).toBe('testUser');
    });

    it('should trigger the search when clicking the search button', () => {
        render(<Muted />);
        const input = screen.getByPlaceholderText('Search for a user');
        const button = screen.getByTestId('vabtwny5eme');
        fireEvent.change(input, {target: {value: 'testUser'}});
        fireEvent.click(button);
    // Add your assertions here to verify the search functionality
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
