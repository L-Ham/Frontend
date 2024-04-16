import React from 'react';
import {render, screen} from '@testing-library/react';
import {Divider} from '../../generic components/guestpagecomponents/divider';
import {describe, it, expect} from '@jest/globals';
import {beforeEach} from '@jest/globals';


describe('Divider', () => {
    const length = 200;
    beforeEach(() => {
        render(<Divider length={length} />);
    });

    it('should render the divider component', () => {
        const dividerElement = screen.getByTestId('divider');
        expect(dividerElement).toBeInTheDocument();
    });

    it('should render two line elements', () => {
        const lineElements = screen.getAllByRole('separator');
        expect(lineElements).toHaveLength(2);
    });

    it('should render the first line element with the correct length', () => {
        const lineElements = screen.getAllByRole('separator');
        expect(lineElements[0]).toHaveStyle(`flexBasis: ${length / 2}px`);
    });

    it('should render the second line element with the correct length', () => {
        const lineElements = screen.getAllByRole('separator');
        expect(lineElements[1]).toHaveStyle(`flexBasis: ${length / 2}px`);
    });

    it('should render the text "OR"', () => {
        const textElement = screen.getByText('OR');
        expect(textElement).toBeInTheDocument();
    });
});

// Add more test cases as needed...

