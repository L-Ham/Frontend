// FILEPATH: /d:/Gaser/Univeristy/2024 spring/SW/Frontend/src/__tests__/CreatePostPage/Header/header.test.js

import React from 'react';
import {cleanup, render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect, beforeEach} from '@jest/globals';
import {Header} from '../../pages/CreatePostPage/CreatePostPageMain/Header/header.js';

describe('Header', () => {
    beforeEach(() => {
        cleanup();
    });

    it('should render the header', () => {
        render(<Header numberDrafts={5} />);

        const headerDiv = screen.getByTestId('header-div');
        expect(headerDiv).toBeInTheDocument();

        const headerInnerDiv = screen.getByTestId('header-inner-div');
        expect(headerInnerDiv).toBeInTheDocument();
        expect(headerInnerDiv).toHaveTextContent('Create a post');

        const headerButton = screen.getByTestId('header-button');
        expect(headerButton).toBeInTheDocument();

        const headerButtonSpan = screen.getByTestId('header-button-span');
        expect(headerButtonSpan).toBeInTheDocument();
        expect(headerButtonSpan).toHaveTextContent('5');
    });

    it('should handle button click', () => {
        const {getByTestId} = render(<Header numberDrafts={5} />);
        window.alert = jest.fn();

        fireEvent.click(getByTestId('header-button'));
        expect(window.alert).toHaveBeenCalledWith('not supported yet :)');
    });
});
