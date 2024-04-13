/*eslint-disable*/
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Sidebar} from '../../pages/Profile/SideBar/sidebar';
import {Provider} from 'react-redux';
import store from '../../store/store';


describe('Sidebar', () => {
    it('should render sidebar with correct props', () => {
        const username = 'testuser';

        render(<Provider store={store}><Sidebar username={username} /></Provider>);

        expect(screen.getByTestId('profile-sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('profile-banner')).toBeInTheDocument();
    });
});
