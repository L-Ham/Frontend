// FILEPATH: /d:/UNI/Senior-1/spring/Software/Frontend/src/__tests__/Header/LeftItems/menubutton.test.js

import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {MenuButton} from '../../layouts/Header/LeftItems/menubutton.js';

describe('MenuButton', () => {
    const mockOnClick = jest.fn();
    it('should render menu button', () => {
        render(<MenuButton onClick={mockOnClick} />);
        const menuButton = screen.getByTestId('menu-button');
        expect(menuButton).toBeInTheDocument();
    });

    it('should render button icon wrapper', () => {
        render(<MenuButton onClick={mockOnClick} />);
        const buttonIconWrapper = screen.getByTestId('button-icon-wrapper');
        expect(buttonIconWrapper).toBeInTheDocument();
    });

    it('should render button icon', () => {
        render(<MenuButton onClick={mockOnClick} />);
        const buttonIcon = screen.getByTestId('button-icon');
        expect(buttonIcon).toBeInTheDocument();
    });

    it('should call onClick when button is clicked', () => {
        // const handleClick = jest.fn();
        render(<MenuButton onClick={mockOnClick} />);
        const menuButton = screen.getByTestId('menu-button');
        fireEvent.click(menuButton);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
