// FILEPATH: /d:/UNI/Senior-1/spring/Software/Frontend/src/__tests__/ProfileIcon.test.js

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ProfileIcon} from '../../layouts/Header/RightItems/ProfileMenu/profileicon.js';
import {describe, it, expect} from '@jest/globals';
// import {afterEach} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store/store.js';

afterEach(cleanup);

describe('ProfileIcon', () => {
    it('renders correctly', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <ProfileIcon isOnline={true} />
            </Provider>,
        );

        expect(getByTestId('profile-icon')).toBeInTheDocument();
        expect(getByTestId('avatar-container')).toBeInTheDocument();
        expect(getByTestId('avatar-image')).toBeInTheDocument();
        expect(getByTestId('status')).toBeInTheDocument();
    });

    it('does not render status when isOnline is false', () => {
        const {queryByTestId} = render(
            <Provider store={store}>
                <ProfileIcon isOnline={false} />
            </Provider>,
        );

        expect(queryByTestId('status')).not.toBeInTheDocument();
    });

    it('renders status when isOnline is true', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <ProfileIcon isOnline={true} />
            </Provider>,
        );

        expect(getByTestId('status')).toBeInTheDocument();
    });
});
