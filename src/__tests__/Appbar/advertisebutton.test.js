// FILEPATH: /d:/UNI/Senior-1/spring/Software/Frontend/src/__tests__/Header/RightItems/Buttons/advertisebutton.test.js
import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {AdvertiseButton} from '../../layouts/Header/RightItems/Buttons/advertisebutton.js';
// import {jest} from '@jest/globals';
import {describe, it, expect} from '@jest/globals';

describe('AdvertiseButton', () => {
    it('renders correctly', () => {
        const {getByTestId} = render(<AdvertiseButton />);

        expect(getByTestId('advertise-button')).toBeInTheDocument();
        expect(getByTestId('advertise-button-icon-container')).toBeInTheDocument();
    });

    it('navigates to correct href when clicked', () => {
        const {getByTestId} = render(<AdvertiseButton />);
        const linkElement = getByTestId('advertise-button');

        expect(linkElement.getAttribute('href')).toBe('/add');
    });
});
