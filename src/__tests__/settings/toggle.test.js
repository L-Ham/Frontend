import React from 'react';
import {render, screen} from '@testing-library/react';
import {ToggleButton} from '../../pages/Settings/general components/buttons/togglebutton';
import {describe, expect, it} from '@jest/globals';


describe('ToggleButton', () => {
    it('renders the button', () => {
        render(<ToggleButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });


    it('initializes with provided state', () => {
        const {getByRole} = render(<ToggleButton init={true} />);
        const button = getByRole('button');
        // Check initial state as 'on'
        expect(button).toHaveStyle('background-color: #007bff');
    });
});
