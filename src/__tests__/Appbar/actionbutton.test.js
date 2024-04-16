// FILEPATH: /d:/UNI/Senior-1/spring/Software/Frontend/src/layouts/Header/RightItems/Buttons/actionbutton.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ActionButton} from '../../layouts/Header/RightItems/Buttons/actionbutton.js';
import {jest} from '@jest/globals';
import {describe, it, expect} from '@jest/globals';


describe('ActionButton', () => {
    it('renders correctly', () => {
        const icon = 'low';
        const {getByTestId} = render(<ActionButton icon={icon} onClick={() => {}} />);

        expect(getByTestId(`action-button-${icon}`)).toBeInTheDocument();
        expect(getByTestId(`action-button-icon-container-${icon}`)).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const icon = 'low';
        const onClick = jest.fn();
        const {getByTestId} = render(<ActionButton icon={icon} onClick={onClick} />);

        fireEvent.click(getByTestId(`action-button-${icon}`));
        expect(onClick).toHaveBeenCalled();
    });
});
