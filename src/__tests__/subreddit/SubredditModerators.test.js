import React from 'react';
import {render, screen} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {SubredditModerators} from '../../pages/subreddit/SubredditModerators';

describe('SubredditModerators component', () => {
    // Renders the SubredditModerators component with valid props.
    it('should render the SubredditModerators component with valid props', () => {
        const users = [
            {username: 'user1', profilePictureSrc: 'profile1.jpg'},
            {username: 'user2', profilePictureSrc: 'profile2.jpg'},
        ];
        const name = 'subreddit';

        render(<SubredditModerators users={users} name={name} />);

        expect(screen.getByText('Moderators')).toBeInTheDocument();
        // Check for specific user names instead of a general query.
        users.forEach((user) => {
            expect(screen.getByText(`u/${user.username}`)).toBeInTheDocument();
        });
    });

    // Renders the SubredditModerators component with no users.
    it('should render the SubredditModerators component with no users', () => {
        const users = [];
        const name = 'subreddit';

        render(<SubredditModerators users={users} name={name} />);

        expect(screen.getByText('Moderators')).toBeInTheDocument();
        users.forEach((user) => {
            expect(screen.queryByText(`u/${user.username}`)).not.toBeInTheDocument();
        });
    });
});
