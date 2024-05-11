import React from 'react';
import {render, screen} from '@testing-library/react';
import {Newapprovebanner} from '../../pages/ModQueue/newapprovebanner';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Newapprovebanner', () => {
    it('should render the component without errors', () => {
        render(<Newapprovebanner />);
    // Add your assertions here to verify that the component renders correctly
    });

    it('should display the approved user name', () => {
        const approvedByUserame = 'testUser';
        render(<Newapprovebanner approvedByUserame={approvedByUserame} />);
        const userNameElement = screen.getByText(`u/${approvedByUserame}`);
        expect(userNameElement).toBeInTheDocument();
    });


    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
