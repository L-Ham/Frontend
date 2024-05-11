import React from 'react';
import {render, screen} from '@testing-library/react';
import {Newactionentry} from '../../pages/ModQueue/actionentry';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Newactionentry', () => {
    it('should render the component without errors', () => {
        render(<Newactionentry label="Test Label" username="testUser" imageurl="testImageUrl" />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the label correctly', () => {
        render(<Newactionentry label="Test Label" username="testUser" imageurl="testImageUrl" />);
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toBeInTheDocument();
    });

    it('should display the username correctly', () => {
        render(<Newactionentry label="Test Label" username="testUser" imageurl="testImageUrl" />);
        const usernameElement = screen.getByText('u/testUser');
        expect(usernameElement).toBeInTheDocument();
    });

    it('should display the image correctly', () => {
        render(<Newactionentry label="Test Label" username="testUser" imageurl="testImageUrl" />);
        const imageElement = screen.getByAltText('User avatar');
        expect(imageElement).toHaveAttribute('src', 'testImageUrl');
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
