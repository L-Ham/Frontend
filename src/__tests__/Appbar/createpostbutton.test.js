// FILEPATH: /d:/UNI/Senior-1/spring/Software/Frontend/src/__tests__/Header/RightItems/Buttons/createpost.test.js
import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {CreatePost} from '../../layouts/Header/RightItems/Buttons/createpost.js';
// import {jest} from '@jest/globals';
import {describe, it, expect} from '@jest/globals';

describe('CreatePost', () => {
    it('renders correctly', () => {
        const {getByTestId} = render(<CreatePost />);

        expect(getByTestId('appbar-create-post')).toBeInTheDocument();
        expect(getByTestId('create-post-content')).toBeInTheDocument();
        expect(getByTestId('create-post-icon-container')).toBeInTheDocument();
        expect(getByTestId('create-post-label')).toBeInTheDocument();
    });

    it('navigates to correct href when clicked', () => {
        const {getByTestId} = render(<CreatePost />);
        const linkElement = getByTestId('appbar-create-post');

        expect(linkElement.getAttribute('href')).toBe('/submit');
    });
});
