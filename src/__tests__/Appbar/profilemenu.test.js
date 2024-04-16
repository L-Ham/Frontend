// FILEPATH: /d:/UNI/Senior-1/spring/Software/Frontend/src/__tests__/layouts/Header/RightItems/ProfileMenu/profilemenu.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ProfileMenu} from '../../layouts/Header/RightItems/ProfileMenu/profilemenu.js';
import {describe, it, expect} from '@jest/globals';
import {Provider} from 'react-redux';
import store from '../../store/store.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {useProfileMenu, useProfileIcon} from '../../layouts/Header/RightItems/ProfileMenu/profilemenu.hooks.js';

// Mocking the useProfileMenu and useProfileIcon hooks
jest.mock('../../layouts/Header/RightItems/ProfileMenu/profilemenu.hooks.js', () => ({
    useProfileMenu: jest.fn(),
    useProfileIcon: jest.fn(),
}));

describe('ProfileMenu', () => {
    beforeEach(() => {
        const setIsUserMenuOpen = jest.fn();
        const UserMenuRef = {current: null};
        const userMenuDropdownStyles = '';
        const tabSections = [
            [
                (
                    <div key="1" >
                    test
                    </div>
                ),
                (
                    <div key="2" >
                    test
                    </div>
                ),
            ],
            [
                (
                    <div key="3" >
                    test
                    </div>
                ),
                (
                    <div key="4" >
                    test
                    </div>
                ),
            ],

        ];

        useProfileMenu.mockReturnValue({
            isUserMenuOpen: false,
            setIsUserMenuOpen,
            UserMenuRef,
            userMenuDropdownStyles,
            tabSections,
        });

        useProfileIcon.mockReturnValue({
            imgSrc: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
        });
    });
    it('renders correctly', () => {
        const {getByTestId} = render(
            <Provider store={store}>
                <Router>
                    <ProfileMenu />
                </Router>
            </Provider>,
        );

        expect(getByTestId('profile-menu')).toBeInTheDocument();
        expect(getByTestId('profile-icon-button')).toBeInTheDocument();
        expect(getByTestId('user-menu-dropdown')).toBeInTheDocument();
    });

    it('renders correct number of user menu list and list items', () => {
        const {getAllByTestId} = render(
            <Provider store={store}>
                <Router>
                    <ProfileMenu />
                </Router>
            </Provider>,
        );
        const userMenuLists = getAllByTestId(/user-menu-list-/i);
        const userMenuListItems = getAllByTestId(/user-menu-list-item-/i);

        expect(userMenuLists.length).toBeGreaterThan(0);
        expect(userMenuListItems.length).toBeGreaterThan(0);
    });
});
