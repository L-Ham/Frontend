import React from 'react';
import {render, screen} from '@testing-library/react';
import {Approved} from '../../pages/UserManagement/approved';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
describe('Approved', () => {
    it('should render the component without errors', () => {
        render(<Approved name="testName" />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the "Approve user" button', () => {
        render(<Approved name="testName" />);
        const approveButton = screen.getByRole('button', {name: 'Approve user'});
        expect(approveButton).toBeInTheDocument();
    });

    it('should display the search input field', () => {
        render(<Approved name="testName" />);
        const searchInput = screen.getByPlaceholderText('Search for a user');
        expect(searchInput).toBeInTheDocument();
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});

describe('Approved', () => {
    it('renders without errors', () => {
        render(<Approved name="example" />);
    // Assert that the component renders without throwing any errors
    });

    it('displays the "Approve user" button', () => {
        render(<Approved name="example" />);
        const approveButton = screen.getByRole('button', {name: 'Approve user'});
        expect(approveButton).toBeInTheDocument();
    });

    it('displays the search input', () => {
        render(<Approved name="example" />);
        const searchInput = screen.getByPlaceholderText('Search for a user');
        expect(searchInput).toBeInTheDocument();
    });
});
