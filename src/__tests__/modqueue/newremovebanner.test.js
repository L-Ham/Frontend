import React from 'react';
import {render, screen} from '@testing-library/react';
import {Newremovebanner} from '../../pages/ModQueue/newremovebanner';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Newremovebanner', () => {
    it('should render the component without errors', () => {
        render(<Newremovebanner />);
    // Add your assertions here to verify that the component renders correctly
    });


    it('should display the default avatar image if no avatar image URL is provided', () => {
        render(<Newremovebanner />);
        const defaultAvatarImage = screen.getByAltText('User avatar');
        expect(defaultAvatarImage).toHaveAttribute(
            'src',
            'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
        );
    });


    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
