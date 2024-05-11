import React from 'react';
import {render, screen} from '@testing-library/react';
import {Moderatorentry} from '../../pages/UserManagement/moderatorentry';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Moderatorentry', () => {
    it('should render the component without errors', () => {
        render(<Moderatorentry username="testUsername" imageurl="testImageUrl" />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the username', () => {
        render(<Moderatorentry username="testUsername" imageurl="testImageUrl" />);
        const usernameElement = screen.getByText('testUsername');
        expect(usernameElement).toBeInTheDocument();
    });

    it('should display the user avatar', () => {
        render(<Moderatorentry username="testUsername" imageurl="testImageUrl" />);
        const avatarElement = screen.getByAltText('User avatar');
        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveAttribute('src', 'testImageUrl');
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
