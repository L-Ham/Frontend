import React from 'react';
import {render, screen} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {ModeratorsWidget} from '../../pages/subreddit/ModeratorsWidget';

describe('ModeratorsWidget component', () => {
    // Renders the ModeratorsWidget component with valid props.
    it('should render the ModeratorsWidget component with valid props', () => {
        const users = [
            {username: 'user1', profilePictureSrc: 'profile1.jpg'},
            {username: 'user2', profilePictureSrc: 'profile2.jpg'},
        ];
        const name = 'subreddit';

        render(<ModeratorsWidget users={users} name={name} />);

        expect(screen.getByText('Moderators')).toBeInTheDocument();
        // Check for specific user names instead of a general query.
        users.forEach((user) => {
            expect(screen.getByText(`u/${user.username}`)).toBeInTheDocument();
        });
    });

    // Renders the ModeratorsWidget component with no users.
    it('should render the ModeratorsWidget component with no users', () => {
        const users = [];
        const name = 'subreddit';

        render(<ModeratorsWidget users={users} name={name} />);

        expect(screen.getByText('Moderators')).toBeInTheDocument();
        users.forEach((user) => {
            expect(screen.queryByText(`u/${user.username}`)).not.toBeInTheDocument();
        });
    });
});
