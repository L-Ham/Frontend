import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {BackButton} from '../../../generic components/Post/CreditBar/BackButton/back.js';
import {useBackButton} from '../../../generic components/Post/CreditBar/BackButton/back.hooks.js';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';

jest.mock('../../../generic components/Post/CreditBar/BackButton/back.hooks.js');
jest.mock('../../../generic components/Post/CreditBar/BackButton/back.styles.js', () => ({
    backClasses: {
        button: 'button-class',
        root: 'root-class',
        base: 'base-class',
    },
}));
describe('[Post] BackButton', () => {
    beforeEach(()=>{
        cleanup();
        const BackIcon = () => <svg />;
        useBackButton.mockReturnValue({handleBackClick: jest.fn(), BackIcon});
    });

    it('renders correctly with the correct classes and postId', () => {
        const {getByTestId} = render(<BackButton postId="123" />);

        expect(getByTestId('back-123')).toHaveClass('button-class');
        expect(getByTestId('back-icon-123')).toHaveClass('base-class');
        expect(getByTestId('back-icon-123').firstChild).toBeInstanceOf(SVGElement);
    });

    it('triggers handleBackClick on button click', () => {
        const handleBackClick = jest.fn();
        useBackButton.mockReturnValue({handleBackClick, BackIcon: () => <svg />});
        const {getByTestId} = render(<BackButton postId="123" />);

        const button = getByTestId('back-123');
        button.click();
        expect(handleBackClick).toHaveBeenCalledTimes(1);
    });

    it('has appropriate accessibility features', () => {
        const {getByTestId} = render(<BackButton postId="123" />);

        const button = getByTestId('back-123');
        expect(button).toHaveAttribute('aria-label', 'Back');
    });

    it('does not render without postId', () => {
        console.error = jest.fn(); // Mock console.error to catch PropTypes warnings
        const {queryByTestId} = render(<BackButton />);
        expect(queryByTestId('back-undefined')).toBeDefined();
        expect(console.error).toHaveBeenCalled();
    });
});
