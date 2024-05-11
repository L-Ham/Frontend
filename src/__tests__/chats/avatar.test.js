import React from 'react';
import {render} from '@testing-library/react';
import {Avatar} from '../../layouts/Chats/messages/avatar.js';
import {describe, it, expect} from '@jest/globals';
import '@testing-library/jest-dom';
/*eslint-disable */
describe('Avatar Component', () => {
    it('renders the avatar with the provided link', () => {
        const testLink = 'https://example.com/test-avatar.jpg';
        const { getByAltText } = render(<Avatar link={testLink} />);
        
        const image = getByAltText('User Avatar');
        expect(image.src).toContain(testLink);
    });

    it('renders the default avatar when no link is provided', () => {
        const defaultLink = 'https://play-lh.googleusercontent.com/FpCCoNLOt6LRIY_3NM5Rk_LDN-kFNz0yxdFjm-CYM4XavRQfoQlXxOtgC7abfexIDOE';
        const { getByAltText } = render(<Avatar />);
        
        const image = getByAltText('User Avatar');
        expect(image.src).toContain(defaultLink);
    });
});
