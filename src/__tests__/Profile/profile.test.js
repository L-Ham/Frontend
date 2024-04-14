/*eslint-disable*/
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Profile} from '../../pages/Profile/profile.js';
import '@testing-library/jest-dom';
import {Provider} from 'react-redux';
import store from '../../store/store.js';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Profile', () => {
    it('should render profile with correct props', () => {
        const name = 'Marly';
        const section = 'posts';

        render(<Provider store={store}><Router><Profile name={name} section={section}/></Router></Provider>);

        expect(screen.getByTestId("profile-body")).toBeInTheDocument();
        expect(screen.getByTestId('profile-sidebar')).toBeInTheDocument();
    });
});
