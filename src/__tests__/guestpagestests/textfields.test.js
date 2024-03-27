import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {BasicTextFields} from '../../generic components/guestpagecomponents/logincomponents/textfields';
import {describe} from '@jest/globals'; // Import the 'describe' function
import {it} from '@jest/globals'; // Import the 'it' function
import {expect} from '@jest/globals'; // Import the 'expect' function

describe('BasicTextFields', () => {
    it('renders without crashing', () => {
        render(<BasicTextFields />);
    });

    it('updates username and password on change', () => {
        const {getByLabelText} = render(<BasicTextFields />);
        const usernameInput = getByLabelText('USERNAME');
        const passwordInput = getByLabelText('PASSWORD');

        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'testpass'}});
        expect(usernameInput.value).toBe('testuser');
        expect(passwordInput.value).toBe('testpass');
    });

    // Add more tests as needed
});


describe('BasicTextFields', () => {
    // ...existing tests...

    it('does not allow form submission with empty fields', () => {
        const {getByLabelText, getByRole} = render(<BasicTextFields />);
        const usernameInput = getByLabelText('USERNAME');
        const passwordInput = getByLabelText('PASSWORD');
        const submitButton = getByRole('button', {name: /LOG IN/i});

        fireEvent.click(submitButton);

        expect(usernameInput.value).toBe('');
        expect(passwordInput.value).toBe('');
    // Add assertion to check form submission event
    });

    it('allows form submission with valid input', () => {
        const {getByLabelText, getByRole} = render(<BasicTextFields />);
        const usernameInput = getByLabelText('USERNAME');
        const passwordInput = getByLabelText('PASSWORD');
        const submitButton = getByRole('button', {name: /LOG IN/i});

        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'testpass'}});
        fireEvent.click(submitButton);

        expect(usernameInput.value).toBe('testuser');
        expect(passwordInput.value).toBe('testpass');
    // Add assertion to check form submission event
    });
});
