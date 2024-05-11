import React from 'react';
import {render, screen} from '@testing-library/react';
import {Banneduserentry} from '../../pages/UserManagement/banneduserentry';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Banneduserentry', () => {
    const mockProps = {
        username: 'testUsername',
        name: 'testName',
        rules: 'testRules',
        modNotes: 'testModNotes',
        imageurl: 'testImageUrl',
        timestamp: '2022-01-01T00:00:00.000Z',
        // eslint-disable-next-line no-undef
        onnewunbanned: jest.fn(),
    };

    it('should render the component without errors', () => {
        render(<Banneduserentry {...mockProps} />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the username', () => {
        render(<Banneduserentry {...mockProps} />);
        const usernameElement = screen.getByText('testUsername');
        expect(usernameElement).toBeInTheDocument();
    });


    it('should display the rules', () => {
        render(<Banneduserentry {...mockProps} />);
        const rulesElement = screen.getByText('testRules');
        expect(rulesElement).toBeInTheDocument();
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
