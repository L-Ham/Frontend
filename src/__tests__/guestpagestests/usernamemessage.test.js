import React from 'react';
import {render, screen} from '@testing-library/react';
import {Usermessage} from '../../generic components/guestpagecomponents/forgotpasswordcomponents/usernamemessage';
import {expect} from '@jest/globals';
import {test} from '@jest/globals';

test('Usermessage should render the component with the first part of the message', () => {
    render(<Usermessage />);
    expect(screen.getByText(/Tell us the email address associated with your Reddit/i)).toBeInTheDocument();
});

test('Usermessage should render the component with the second part of the message', () => {
    render(<Usermessage />);
    expect(screen.getByText(/account, and we’ll send you an email with your username./i)).toBeInTheDocument();
});

test('Usermessage should have the correct test id', () => {
    render(<Usermessage />);
    expect(screen.getByTestId('usermessage5')).toBeInTheDocument();
});
