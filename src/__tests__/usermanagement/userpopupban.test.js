import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Userpopupban} from '../../pages/UserManagement/userpopupban';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Userpopupban', () => {
    it('should render the component without errors', () => {
        render(<Userpopupban />);
    // Add your assertions here to verify that the component renders correctly
    });


    it('should update the username state when the input value changes', () => {
        render(<Userpopupban />);
        const input = screen.getByTestId('WRBVEARBVER');
        fireEvent.change(input, {target: {value: 'testUsername'}});
        expect(input.value).toBe('testUsername');
    });

    it('should display an error message when the username is empty and the "Add user" button is clicked', () => {
        render(<Userpopupban />);
        const addButton = screen.getByText('Add user');
        fireEvent.click(addButton);
        const errorMessage = screen.getByText('Can\'t leave Approve name empty');
        expect(errorMessage).toBeInTheDocument();
    });


    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
