import React from 'react';
import {render, screen} from '@testing-library/react';
import {Footer} from '../../pages/Message/Footer/footer';
/*eslint-disable*/
describe('Footer', () => {
    it('should render the footer with correct props', () => {
        render(<Footer />);

        const footer = screen.getByTestId('message-fotter');
        expect(footer).toBeInTheDocument();

    });
});
