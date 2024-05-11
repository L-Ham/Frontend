import React from 'react';
import {render, screen} from '@testing-library/react';
import {Banbutton} from '../../pages/UserManagement/banbutton';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Banbutton', () => {
    it('should render the component without errors', () => {
        render(<Banbutton />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the "Ban a user" header', () => {
        render(<Banbutton />);
        const header = screen.getByText('Ban a user:');
        expect(header).toBeInTheDocument();
    });

    it('should display the close button', () => {
        render(<Banbutton />);
        const closeButton = screen.getByTestId('rgvbth5ynj46');
        expect(closeButton).toBeInTheDocument();
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
