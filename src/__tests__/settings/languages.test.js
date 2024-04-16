import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {LanguagesMenu} from '../../pages/Settings/tab specific components/account tab/menus/languagesmenu.js';
import '@testing-library/jest-dom';
import {describe, expect, it, jest} from '@jest/globals';

describe('LanguagesMenu', () => {
    it('renders correctly', () => {
        render(<LanguagesMenu id="123" />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });


    it('logs the change to the console', () => {
        console.log = jest.fn(); // Mock console.log to check if it is called
        render(<LanguagesMenu id="123" />);
        const select = screen.getByRole('combobox'); // Targeting the select dropdown
        fireEvent.mouseDown(select);
        const option = screen.getByText('Español (ES)');
        fireEvent.click(option);
        expect(console.log).toHaveBeenCalledWith('Español (ES) is now selected');
    });
});
