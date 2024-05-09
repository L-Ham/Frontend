import React from 'react';
import {describe, jest, it, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {HeaderButtons} from '../../../pages/subreddit/SubredditBanner/HeaderButtons/HeaderButton/headerbuttons';
import {useHeaderButtons}
    from '../../../pages/subreddit/SubredditBanner/HeaderButtons/HeaderButton/headerbuttons.hooks';

jest.mock('../../../pages/subreddit/SubredditBanner/HeaderButtons/JoinButton/joinbutton.js', () => ({
    __esModule: true,
    JoinButton: () => {
        return <div data-testid="join-button"/>;
    },
}));

jest.mock(`../../../pages/subreddit/SubredditBanner/HeaderButtons/NotificationFrequencyControl/notificationfrequencycontrol.js`, () => ({
    __esModule: true,
    NotificationFrequencyControl: () => {
        return <div data-testid="notification-frequency-control"/>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditBanner/HeaderButtons/OverflowControl/overflowcontrol.js', () => ({
    __esModule: true,
    OverflowControl: () => {
        return <div data-testid="overflow-control"/>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditBanner/HeaderButtons/HeaderButton/headerbuttons.hooks.js');

describe('HeaderButtons', () => {
    it('renders correctly with valid data', () => {
        useHeaderButtons.mockReturnValue({
            activeNotificationLevel: 'low',
            setActiveNotificationLevel: jest.fn(),
            isMuted: false,
            handleMuteClick: jest.fn(),
            isFavourite: false,
            handleFavouriteClick: jest.fn(),
            isSubscribed: true,
            handleJoinClick: jest.fn(),
            isJoinDisabled: false,
        });

        const {getByTestId} = render(<HeaderButtons />);

        expect(getByTestId('outer-div')).toBeInTheDocument();
        expect(getByTestId('container')).toBeInTheDocument();
        expect(getByTestId('notification-frequency-control')).toBeInTheDocument();
        expect(getByTestId('join-button')).toBeInTheDocument();
        expect(getByTestId('overflow-control')).toBeInTheDocument();
    });

    it('does not render with empty data', () => {
        useHeaderButtons.mockReturnValue({
            handleMuteClick: null,
        });

        const {queryByTestId} = render(<HeaderButtons />);

        expect(queryByTestId('outer-div')).toBeNull();
    });
});
