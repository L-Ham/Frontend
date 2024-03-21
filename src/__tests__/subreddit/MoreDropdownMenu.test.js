import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {expect, describe, it, jest} from '@jest/globals';
import {MoreDropdownMenu} from '../../pages/subreddit/MoreDropdownMenu';

describe('MoreDropdownMenu', () => {
    const mockProps = {
        name: 'testSubreddit',
        isMuted: false,
        onMuteClick: jest.fn(),
        isFavourite: false,
        onFavouriteClick: jest.fn(),
    };

    it('renders correctly', () => {
        const {getByText} = render(<MoreDropdownMenu {...mockProps} />);
        expect(getByText('Add to Favourites')).toBeInTheDocument();
        expect(getByText('Mute r/testSubreddit')).toBeInTheDocument();
    });

    it('calls onFavouriteClick when favourite button is clicked', () => {
        const {getByText} = render(<MoreDropdownMenu {...mockProps} />);
        fireEvent.click(getByText('Add to Favourites'));
        expect(mockProps.onFavouriteClick).toHaveBeenCalled();
    });

    it('calls onMuteClick when mute button is clicked', () => {
        const {getByText} = render(<MoreDropdownMenu {...mockProps} />);
        fireEvent.click(getByText('Mute r/testSubreddit'));
        expect(mockProps.onMuteClick).toHaveBeenCalled();
    });
});
