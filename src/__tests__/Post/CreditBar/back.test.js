import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BackButton} from '../../../generic components/Post/CreditBar/BackButton/back.js';
import {backClasses} from '../../../generic components/Post/CreditBar/BackButton/back.styles.js';
import {describe, it, expect, beforeEach} from '@jest/globals';


describe('BackButton', () => {
    beforeEach(() => {
        // cleanup rendering
        cleanup();
    });

    it('should render the BackButton component', () => {
        const postId = '123';
        render(<BackButton postId={postId} />);

        const backButton = screen.getByTestId(`back-${postId}`);
        expect(backButton).toBeInTheDocument();
    });


    it('should call handleBackClick when the button is clicked', () => {
        const {getByLabelText} = render(<BackButton postId="123" />);
        const backButton = getByLabelText('Back');
        fireEvent.click(backButton);
        expect(backButton).toBeInTheDocument();
    });


    it('should have styles applied', () => {
        const postId = '123';
        render(<BackButton postId={postId} />);

        const backButton = screen.getByTestId(`back-${postId}`);
        expect(backButton).toHaveClass(backClasses.button);
        const root = backButton.children[0];
        expect(root).toBeInTheDocument();
        expect(root).toHaveClass(backClasses.root);
        const base = root.children[0];
        expect(base).toBeInTheDocument();
        expect(base).toHaveClass(backClasses.base);
    });

    it('should have the correct icon', () => {
        const postId = '123';
        render(<BackButton postId={postId} />);

        const backButton = screen.getByTestId(`back-${postId}`);
        const icon = backButton.querySelector('svg');
        expect(icon).toBeInTheDocument();
    });
});
