/* eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Header} from '../../pages/Profile/Main/Header/header.js';
import '@testing-library/jest-dom';
import {Provider} from 'react-redux';
import store from '../../store/store';

describe('Header', () => {
    it('should render the header with correct props', () => {
        const username = 'testuser';
        render(<Provider store={store}><Header username={username} /></Provider>);

        const profileHeader = screen.getByTestId('profile-MainBody-Header');
        expect(profileHeader).toBeInTheDocument();

        const profileAvatar = screen.getByTestId('profile-add-avatar');
        expect(profileAvatar).toBeInTheDocument();

        const profileUsername = screen.getByTestId('profile-u/username-small');
        expect(profileUsername).toHaveTextContent(username);
    });
});
