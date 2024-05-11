import React from 'react';
import {render, screen} from '@testing-library/react';
import {Modonly} from '../../pages/UserManagement/modonly';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Modonly', () => {
    it('should render the component without errors', () => {
        render(<Modonly name="testName" />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the "Sorry, this is a moderator-only page" message', () => {
        render(<Modonly name="testName" />);
        const message = screen.getByText('Sorry, this is a moderator-only page');
        expect(message).toBeInTheDocument();
    });


    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
