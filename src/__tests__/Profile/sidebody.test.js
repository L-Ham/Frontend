/*eslint-disable*/
import React from 'react';
import {render, screen} from '@testing-library/react';
import {SideBody} from '../../pages/Profile/SideBar/SideBody/sidebody.js';
import '@testing-library/jest-dom';
import store from '../../store/store.js';
import {Provider} from 'react-redux';

describe('SideBody', () => {
    it('should render SideBody component with correct props', () => {
        const username = 'testuser';

        render(<Provider store={store}><SideBody username={username} /></Provider>);

        expect(screen.getByTestId('profile-settings')).toBeInTheDocument();
    });
});
