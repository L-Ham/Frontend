// FILEPATH: /d:/UNI/Senior-1/spring/Software/Frontend/src/layouts/Header/LeftItems/logo.test.js

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {Logo} from '../../layouts/Header/LeftItems/logo.js';

describe('Logo', () => {
    it('should render logo container', () => {
        render(<Logo />);
        const logoContainer = screen.getByTestId('logo-container');
        expect(logoContainer).toBeInTheDocument();
    });

    it('should render logo link', () => {
        render(<Logo />);
        const logoLink = screen.getByTestId('logo-link');
        expect(logoLink).toBeInTheDocument();
        expect(logoLink.getAttribute('href')).toBe('/');
    });

    it('should render logo icon wrapper', () => {
        render(<Logo />);
        const logoIconWrapper = screen.getByTestId('logo-icon-wrapper');
        expect(logoIconWrapper).toBeInTheDocument();
    });

    it('should render logo name wrapper', () => {
        render(<Logo />);
        const logoNameWrapper = screen.getByTestId('logo-name-wrapper');
        expect(logoNameWrapper).toBeInTheDocument();
    });
});
