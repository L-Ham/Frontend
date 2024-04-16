import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Emailinput} from '../../pages/registration_pages/passwordresetcomponents/emailinput';
import {describe, it, expect} from '@jest/globals';
import {jest} from '@jest/globals';

describe('Emailinput', () => {
    it('should render the input field with the correct label', () => {
        render(
            <Emailinput
                onEmailChange={() => {}}
                width="200px"
                labelText="Email"
                emptyemail={false}
            />,
        );

        const inputElement = screen.getByTestId('emailinput');
        const labelElement = screen.getByTestId('password-label');

        expect(inputElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveTextContent('Email');
    });

    it('should update the email value when the input field changes', () => {
        const handleEmailChange = jest.fn();
        render(
            <Emailinput
                onEmailChange={handleEmailChange}
                width="200px"
                labelText="Email"
                emptyemail={false}
            />,
        );

        const inputElement = screen.getByTestId('emailinput');
        fireEvent.change(inputElement, {target: {value: 'test@example.com'}});

        expect(handleEmailChange).toHaveBeenCalledWith('test@example.com');
    });

    it('should display an error message when the email is invalid', () => {
        render(
            <Emailinput
                onEmailChange={() => {}}
                width="200px"
                labelText="Email"
                emptyemail={false}
            />,
        );

        const emailInput = screen.getByTestId('emailinput');
        fireEvent.change(emailInput, {target: {value: 'invalidemail'}});

        const errorElement = screen.getByTestId('email-error');
        expect(errorElement).toHaveTextContent('Please fix your email to continue');
    });

    it('should display an error message when the email is empty', () => {
        render(
            <Emailinput
                onEmailChange={() => {}}
                width="200px"
                labelText="Email"
                emptyemail={true}
            />,
        );

        const errorElement = screen.getByTestId('email-error');
        expect(errorElement).toHaveTextContent('Please enter an email address to continue');
    });


    it('should render without crashing', () => {
        render(<Emailinput onEmailChange={() => {}} width="200px" labelText="Email" emptyemail={false} />);
        const emailInput = screen.getByTestId('emailinput');
        expect(emailInput).toBeInTheDocument();
    });

    it('should call onEmailChange when the email is changed', () => {
        const mockOnChange = jest.fn();
        render(<Emailinput onEmailChange={mockOnChange} width="200px" labelText="Email" emptyemail={false} />);
        const emailInput = screen.getByTestId('emailinput');
        fireEvent.change(emailInput, {target: {value: 'test@example.com'}});
        expect(mockOnChange).toHaveBeenCalledWith('test@example.com');
    });

    it('should display an error message when the email is invalid', () => {
        render(<Emailinput onEmailChange={() => {}} width="200px" labelText="Email" emptyemail={false} />);
        const emailInput = screen.getByTestId('emailinput');
        fireEvent.change(emailInput, {target: {value: 'invalid email'}});
        const errorElement = screen.getByTestId('email-error');
        expect(errorElement).toHaveTextContent('Please fix your email to continue');
    });

    it('should not display an error message when the email is valid', () => {
        render(<Emailinput onEmailChange={() => {}} width="200px" labelText="Email" emptyemail={false} />);
        const emailInput = screen.getByTestId('emailinput');
        fireEvent.change(emailInput, {target: {value: 'test@example.com'}});
        const errorElement = screen.queryByTestId('email-error');
        expect(errorElement).not.toHaveTextContent('Please fix your email to continue');
    });

    it('should display an error message when the email is empty and emptyemail prop is true', () => {
        render(<Emailinput onEmailChange={() => {}} width="200px" labelText="Email" emptyemail={true} />);
        const errorElement = screen.getByTestId('email-error');
        expect(errorElement).toHaveTextContent('Please enter an email address to continue');
    });


    it('should display the correct label', () => {
        render(<Emailinput onEmailChange={() => {}} width="200px" labelText="Email" emptyemail={false} />);
        const labelElement = screen.getByTestId('password-label');
        expect(labelElement).toHaveTextContent('Email');
    });


    it('should have the correct type', () => {
        render(<Emailinput onEmailChange={() => {}} width="200px" labelText="Email" emptyemail={false} />);
        const emailInput = screen.getByTestId('emailinput');
        expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should have the correct initial value', () => {
        render(<Emailinput onEmailChange={() => {}} width="200px" labelText="Email" emptyemail={false} />);
        const emailInput = screen.getByTestId('emailinput');
        expect(emailInput).toHaveValue('');
    });


    // Add more test cases as needed...
});
