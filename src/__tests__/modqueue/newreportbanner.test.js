import React from 'react';
import {render, screen} from '@testing-library/react';
import {Newreportbanner} from '../../pages/ModQueue/newreportbanner';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';

describe('Newreportbanner', () => {
    it('should render the component without errors', () => {
        render(<Newreportbanner />);
    // Add your assertions here to verify that the component renders correctly
    });


    it('should display the username and timestamp', () => {
        render(<Newreportbanner />);
        const username = screen.getByText('u/3abwareth');
        const timestamp = screen.getByText('1 month ago');
        expect(username).toBeInTheDocument();
        expect(timestamp).toBeInTheDocument();
    });

    // Add more test cases as needed to cover different scenarios and functionalities of the component
});
