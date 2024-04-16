import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Usernameinput} from '../../pages/registration_pages/passwordresetcomponents/usernameinput';
import {describe, it, expect} from '@jest/globals';
import {jest} from '@jest/globals';


describe('Usernameinput', () => {
    it('should render the input field with the correct label', () => {
        render(<Usernameinput onUsernameChange={() => {}} width="200px" />);

        const inputElement = screen.getByTestId('username-input-tag');
        const labelElement = screen.getByTestId('username-label');

        expect(inputElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveTextContent('Username');
    });

    it('should update the username value when the input field changes', () => {
        const handleUsernameChange = jest.fn();
        render(<Usernameinput onUsernameChange={handleUsernameChange} width="200px" />);

        const inputElement = screen.getByTestId('username-input-tag');
        fireEvent.change(inputElement, {target: {value: 'testUser'}});

        expect(handleUsernameChange).toHaveBeenCalledWith('testUser');
    });

    it('should display an error message when the username is invalid', () => {
        render(<Usernameinput onUsernameChange={() => {}} width="200px" showInvalidCredentials={true} />);

        const errorElement = screen.getByTestId('username-errorr');

        expect(errorElement).toHaveTextContent('Incorrect username or password');
    });
    // Existing test cases...


    it('should display a fake account message when showfakeaccount is true', () => {
        render(<Usernameinput onUsernameChange={() => {}} width="200px" showfakeaccount={true} />);

        const fakeAccountElement = screen.getByTestId('username-errorr');

        expect(fakeAccountElement).toHaveTextContent('That user doesn\'t exist');
    });


    it('should display an empty username message when emptyusername is true', () => {
        render(<Usernameinput onUsernameChange={() => {}} width="200px" emptyusername={true} />);

        const emptyUsernameElement = screen.getByTestId('username-errorr');

        expect(emptyUsernameElement).toHaveTextContent('Username must be between 3 and 20 characters');
    });

    it('should not display an empty username message when emptyusername is false', () => {
        render(<Usernameinput onUsernameChange={() => {}} width="200px" emptyusername={false} />);

        const emptyUsernameElement = screen.queryByTestId('empty-username-message');

        expect(emptyUsernameElement).toBeNull();
    });
    // Add more test cases as needed...

    // Existing test cases...


    it('should display a custom error message when showInvalidCredentials is true', () => {
        render(<Usernameinput onUsernameChange={() => {}} width="200px" showInvalidCredentials={true} />);

        const errorElement = screen.getByTestId('username-errorr');

        expect(errorElement).toHaveTextContent('Incorrect username or password');
    });
});

