import React from 'react';
import {render, screen} from '@testing-library/react';
import {Banned} from '../../pages/UserManagement/banned';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Banned', () => {
    it('should render the component without errors', () => {
        render(<Banned name="testName" />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the "Ban user" button', () => {
        render(<Banned name="testName" />);
        const banButton = screen.getByRole('button', {name: 'Ban user'});
        expect(banButton).toBeInTheDocument();
    });

    it('should display the search input field', () => {
        render(<Banned name="testName" />);
        const searchInput = screen.getByPlaceholderText('Search for a user');
        expect(searchInput).toBeInTheDocument();
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
