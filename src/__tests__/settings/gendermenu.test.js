import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {GenderMenu} from '../../pages/Settings/tab specific components/account tab/menus/gendermenu.js';
import '@testing-library/jest-dom';
import {describe, expect, it} from '@jest/globals';


describe('GenderMenu', () => {
    it('renders with initial gender', () => {
        render(<GenderMenu init="Man" id="123" />);
        expect(screen.getByText('MAN')).toBeInTheDocument();
    });

    it('toggles dropdown visibility on button click', () => {
        render(<GenderMenu init="Man" id="123" />);
        const button = screen.getByText('MAN');
        fireEvent.click(button); // Open dropdown
        expect(screen.getByText('Woman')).toBeInTheDocument();
        fireEvent.click(button); // Close dropdown
        expect(screen.queryByText('Woman')).not.toBeInTheDocument();
    });

    it('changes selected gender on item click', () => {
        render(<GenderMenu init="Man" id="123" />);
        const button = screen.getByText('MAN');
        fireEvent.click(button); // Open dropdown
        const selection = screen.getByText('Woman');
        fireEvent.click(selection);
        expect(screen.getByText('WOMAN')).toBeInTheDocument();
    });

    it('closes dropdown after selecting a gender', () => {
        render(<GenderMenu init="Man" id="123" />);
        fireEvent.click(screen.getByText('MAN')); // Open dropdown
        fireEvent.click(screen.getByText('Non-Binary')); // Select 'Non-Binary'
        expect(screen.queryByText('Woman')).not.toBeInTheDocument(); // Dropdown should be closed
    });
});
