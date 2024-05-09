import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {describe, jest, it, expect} from '@jest/globals';
import {OverflowControl} from '../../../pages/subreddit/SubredditBanner/HeaderButtons/OverflowControl/overflowcontrol';
import {useOverflowControl} from '../../../pages/subreddit/SubredditBanner/HeaderButtons/OverflowControl/overflowcontrol.hooks';

jest.mock('../../../pages/subreddit/SubredditBanner/HeaderButtons/OverflowControl/overflowcontrol.hooks.js');
jest.mock('../../../pages/subreddit/General/Components/DropdownMenu/dropdownmenu.js', () => ({
    __esModule: true,
    DropdownMenu: () => {
        return <div data-testid="dropdown-menu"/>;
    },
}));

describe('OverflowControl', () => {
    it('renders correctly with valid data', () => {
        useOverflowControl.mockReturnValue({
            isOtherOptionsVisible: true,
            handleOtherOptionsClick: jest.fn(),
            menuItems: [],
            OverflowHorizontalIcon: () => <svg data-testid="overflow-horizontal-icon"/>,
        });

        const {getByTestId} = render(<OverflowControl isMuted={false} onMuteClick={jest.fn()} isFavourite={false} onFavouriteClick={jest.fn()} handleJoinClick={jest.fn()} isSubscribed={false}/>);

        expect(getByTestId('overflow-control-container')).toBeInTheDocument();
        expect(getByTestId('overflow-control-button')).toBeInTheDocument();
        expect(getByTestId('button-span')).toBeInTheDocument();
        expect(getByTestId('icon-container')).toBeInTheDocument();
        expect(getByTestId('overflow-horizontal-icon')).toBeInTheDocument();
        expect(getByTestId('dropdown-menu')).toBeInTheDocument();
    });

    it('calls handleOtherOptionsClick when overflow control button is clicked', () => {
        const handleOtherOptionsClickMock = jest.fn();

        useOverflowControl.mockReturnValue({
            isOtherOptionsVisible: true,
            handleOtherOptionsClick: handleOtherOptionsClickMock,
            menuItems: [],
            OverflowHorizontalIcon: () => <svg data-testid="overflow-horizontal-icon"/>,
        });

        const {getByTestId} = render(<OverflowControl isMuted={false} onMuteClick={jest.fn()} isFavourite={false} onFavouriteClick={jest.fn()} handleJoinClick={jest.fn()} isSubscribed={false}/>);

        fireEvent.click(getByTestId('overflow-control-button'));

        expect(handleOtherOptionsClickMock).toHaveBeenCalled();
    });
});
