/* eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {ProfileBody} from '../../pages/Profile/Main/profilebody.js';
import '@testing-library/jest-dom';
import {Provider} from 'react-redux';
import store from '../../store/store.js';
import {BrowserRouter as Router} from 'react-router-dom';

describe('ProfileBody', () => {
    it('should render profile body with correct props', () => {
        const name = 'Marly';
        const section = 'posts';

        render(<Provider store={store}><Router><ProfileBody name={name} section={section} /></Router></Provider>);

        expect(screen.getByTestId('profile-body')).toBeInTheDocument();
        expect(screen.getByTestId('profile-MainBody-Header')).toHaveTextContent('Marly');
        expect(screen.getByTestId('profile-selectors')).toBeInTheDocument();
        expect(screen.getByTestId('profile-empty-page')).toBeInTheDocument();
    });

    it('should render profile body with default section', () => {
        const name = 'Marly';

        render(<Provider store={store}><Router><ProfileBody name={name} /></Router></Provider>);

        expect(screen.getByTestId('profile-body')).toBeInTheDocument();
        expect(screen.getByTestId('profile-MainBody-Header')).toHaveTextContent('Marly');
        expect(screen.getByTestId('profile-selectors')).toBeInTheDocument();
        expect(screen.getByTestId('profile-empty-page')).toBeInTheDocument();
    });
});
