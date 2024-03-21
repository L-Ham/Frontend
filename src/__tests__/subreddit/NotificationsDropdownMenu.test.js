import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {expect, describe, it, jest} from '@jest/globals';
import {NotificationsDropdownMenu} from '../../pages/subreddit/NotificationsDropdownMenu';

describe('NotificationsDropdownMenu', () => {
    const onItemClick = jest.fn();

    it('renders correctly', () => {
        const {getByText} = render(
            <NotificationsDropdownMenu activeItem="notification" onItemClick={onItemClick} />,
        );

        expect(getByText('frequent')).toBeInTheDocument();
        expect(getByText('Low')).toBeInTheDocument();
        expect(getByText('off')).toBeInTheDocument();
    });

    it('calls onItemClick when a menu item is clicked', () => {
        const {getByText} = render(
            <NotificationsDropdownMenu activeItem="notification" onItemClick={onItemClick} />,
        );

        fireEvent.click(getByText('frequent'));
        expect(onItemClick).toHaveBeenCalledWith('notification-frequent');

        fireEvent.click(getByText('Low'));
        expect(onItemClick).toHaveBeenCalledWith('notification');

        fireEvent.click(getByText('off'));
        expect(onItemClick).toHaveBeenCalledWith('notification-off');
    });
});
