import React from 'react';
import {describe, jest, it, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {NotificationFrequencyControl} from '../../../pages/subreddit/SubredditBanner/HeaderButtons/NotificationFrequencyControl/notificationfrequencycontrol';
import {useNotificationFrequencyControl} from '../../../pages/subreddit/SubredditBanner/HeaderButtons/NotificationFrequencyControl/notificationfrequencycontrol.hooks';

jest.mock('../../../pages/subreddit/SubredditBanner/HeaderButtons/NotificationFrequencyControl/notificationfrequencycontrol.hooks.js');

jest.mock('../../../pages/subreddit/General/Components/DropdownMenu/dropdownmenu.js', () => ({
    __esModule: true,
    DropdownMenu: () => {
        return <div data-testid="dropdown-menu"/>;
    },
}));

describe('NotificationFrequencyControl', () => {
    it('renders correctly with valid notification level', () => {
        useNotificationFrequencyControl.mockReturnValue({
            isNotificationLevelsVisible: true,
            NotificationLevelIcon: () => <svg data-testid="notification-level-icon"/>,
            menuItems: ['item1', 'item2'],
            handleNotificationClick: jest.fn(),
        });

        const {getByTestId} = render(<NotificationFrequencyControl notificationLevel="item1" setNotificationLevel={jest.fn()}/>);

        expect(getByTestId('notification-frequency-control-container')).toBeInTheDocument();
        expect(getByTestId('notification-frequency-button')).toBeInTheDocument();
        expect(getByTestId('button-span')).toBeInTheDocument();
        expect(getByTestId('icon-container')).toBeInTheDocument();
        expect(getByTestId('notification-level-icon')).toBeInTheDocument();
        expect(getByTestId('dropdown-menu')).toBeInTheDocument();
    });

    it('does not render NotificationLevelIcon with empty notification level', () => {
        useNotificationFrequencyControl.mockReturnValue({
            isNotificationLevelsVisible: true,
            NotificationLevelIcon: null,
            menuItems: ['item1', 'item2'],
            handleNotificationClick: jest.fn(),
        });

        const {queryByTestId} = render(<NotificationFrequencyControl notificationLevel="item1" setNotificationLevel={jest.fn()}/>);

        expect(queryByTestId('notification-level-icon')).toBeNull();
    });
});
