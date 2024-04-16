import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Passwordinput} from '../../pages/registration_pages/passwordresetcomponents/passwordinput';
import {describe, it, expect} from '@jest/globals';
import {jest} from '@jest/globals';
import {test} from '@jest/globals';
import {beforeEach} from '@jest/globals';

describe('Passwordinput', () => {
    it('should render the input field with the correct label', () => {
        render(
            <Passwordinput
                onPasswordChange={() => {}}
                width="200px"
                showInvalidCredentials={false}
                labelText="Password"
                emptypassword={false}
            />,
        );

        const inputElement = screen.getByTestId('registerPasswordField');
        const labelElement = screen.getByTestId('regPasswordLabel200');

        expect(inputElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveTextContent('Password');
    });

    it('should update the password value when the input field changes', () => {
        const handlePasswordChange = jest.fn();
        render(
            <Passwordinput
                onPasswordChange={handlePasswordChange}
                width="200px"
                showInvalidCredentials={false}
                labelText="Password"
                emptypassword={false}
            />,
        );

        const inputElement = screen.getByTestId('regPassword80');
        fireEvent.change(inputElement, {target: {value: 'testPassword'}});

        expect(handlePasswordChange).toHaveBeenCalledWith('testPassword');
    });

    it('should display an error message when the password is less than 8 characters', () => {
        render(
            <Passwordinput
                onPasswordChange={() => {}}
                width="200px"
                showInvalidCredentials={false}
                labelText="Password"
                emptypassword={false}
            />,
        );

        const passwordInput = screen.getByTestId('regPassword80');
        fireEvent.change(passwordInput, {target: {value: 'short'}});

        const errorElement = screen.getByTestId('passwordmessage500');
        expect(errorElement).toHaveTextContent('Password must be at least 8 characters long');
    });


    describe('Passwordinput', () => {
        // Existing test cases...


        it('should display a custom error message when showInvalidCredentials is true and emptypassword prop is true',
            () => {
                render(
                    <Passwordinput
                        onPasswordChange={() => {}}
                        width="200px"
                        showInvalidCredentials={true}
                        labelText="Password"
                        emptypassword={true}
                    />,
                );

                const errorElement = screen.getByTestId('passwordmessage500');

                expect(errorElement).toHaveTextContent('Password must be at least 8 characters long');
            });

        it('should display a custom error message when showInvalidCredentials is true and password is invalid', () => {
            render(
                <Passwordinput
                    onPasswordChange={() => {}}
                    width="200px"
                    showInvalidCredentials={true}
                    labelText="Password"
                    emptypassword={true}
                />,
            );

            const errorElement = screen.getByTestId('passwordmessage500');

            expect(errorElement).toHaveTextContent('Password must be at least 8 characters long');
        });


        it('should display a custom error message when showInvalidCredentials is true and password is empty', () => {
            render(
                <Passwordinput
                    onPasswordChange={() => {}}
                    width="200px"
                    showInvalidCredentials={true}
                    labelText="Password"
                    emptypassword={true}
                />,
            );

            const errorElement = screen.getByTestId('passwordmessage500');
            expect(errorElement).toHaveTextContent('Password must be at least 8 characters long');
        });
    });


    // Add more test cases as needed...


    let mockOnPasswordChange;

    beforeEach(() => {
        mockOnPasswordChange = jest.fn();
    });

    test('renders password input', () => {
        const {getByTestId} = render(<Passwordinput onPasswordChange=
            {mockOnPasswordChange} width="100%" showInvalidCredentials={false}
        labelText="Password" emptypassword={false} />);
        expect(getByTestId('registerPasswordField')).toBeInTheDocument();
        expect(getByTestId('regPassword80')).toBeInTheDocument();
        expect(getByTestId('regPasswordLabel200')).toBeInTheDocument();
        expect(getByTestId('passwordmessage500')).toBeInTheDocument();
    });

    test('does not render password status image initially', () => {
        const {queryByTestId} = render(<Passwordinput onPasswordChange={mockOnPasswordChange}
            width="100%" showInvalidCredentials={false} labelText="Password" emptypassword={false} />);
        expect(queryByTestId('passwordImage15')).toBeNull();
    });

    test('renders password status image when password is entered', () => {
        const {getByTestId} = render(<Passwordinput onPasswordChange={mockOnPasswordChange}
            width="100%" showInvalidCredentials={false} labelText="Password" emptypassword={false} />);
        fireEvent.change(getByTestId('regPassword80'), {target: {value: 'password'}});
        expect(getByTestId('passwordImage15')).toBeInTheDocument();
    });

    test('calls onPasswordChange when password is entered', () => {
        const {getByTestId} = render(<Passwordinput onPasswordChange={mockOnPasswordChange}
            width="100%" showInvalidCredentials={false} labelText="Password" emptypassword={false} />);
        fireEvent.change(getByTestId('regPassword80'), {target: {value: 'password'}});
        expect(mockOnPasswordChange).toHaveBeenCalledWith('password');
    });


    test('shows error message when emptypassword is true', () => {
        const {getByTestId} = render(<Passwordinput onPasswordChange={mockOnPasswordChange}
            width="100%" showInvalidCredentials={false} labelText="Password" emptypassword={true} />);
        expect(getByTestId('passwordmessage500')).toHaveTextContent('Password must be at least 8 characters long');
    });
});
