import React from 'react';
import {render, screen} from '@testing-library/react';
import {Userpopupapprove} from '../../pages/UserManagement/userpopupapprove';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Userpopupapprove', () => {
    it('should render the component without errors', () => {
        render(<Userpopupapprove />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the "Enter username" input field', () => {
        render(<Userpopupapprove />);
        const inputField = screen.getByPlaceholderText('Enter username');
        expect(inputField).toBeInTheDocument();
    });

    it('should display the "Cancel" button', () => {
        render(<Userpopupapprove />);
        const cancelButton = screen.getByRole('button', {name: 'Cancel'});
        expect(cancelButton).toBeInTheDocument();
    });

    it('should display the "Add user" button', () => {
        render(<Userpopupapprove />);
        const addUserButton = screen.getByRole('button', {name: 'Add user'});
        expect(addUserButton).toBeInTheDocument();
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
