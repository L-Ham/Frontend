import React from 'react';
import {render, screen} from '@testing-library/react';
import {UserHelp} from '../../generic components/guestpagecomponents/forgotpasswordcomponents/usernamehelp';
import {expect} from '@jest/globals';
import {test} from '@jest/globals';

test('UserHelp should render the component with the correct text', () => {
    render(<UserHelp />);
    expect(screen.getByText('Don\'t have an email or need assistance logging in?')).toBeInTheDocument();
});

test('UserHelp should render the GET HELP link', () => {
    render(<UserHelp />);
    // eslint-disable-next-line max-len
    expect(screen.getByRole('link', {name: /get help/i})).toHaveAttribute('href', 'https://support.reddithelp.com/hc/en-us/sections/360008917491-Account-Security');
});

test('UserHelp should render the LOG IN link', () => {
    render(<UserHelp />);
    expect(screen.getByRole('link', {name: /log in •/i})).toHaveAttribute('href', '/login');
});

test('UserHelp should render the SIGN UP link', () => {
    render(<UserHelp />);
    expect(screen.getByRole('link', {name: /sign up/i})).toHaveAttribute('href', '/register');
});
