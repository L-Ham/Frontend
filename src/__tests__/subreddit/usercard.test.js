import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {UserCard} from '../../pages/subreddit/SubredditSidebar/Widgets/Moderators/Usercard/usercard.js';

describe('UserCard', () => {
    // Renders user card with all required props
    it('should render user card with all required props', () => {
        const name = 'testUser';
        const displayName = 'Test User';
        const pictureSrc = 'test.jpg';

        render(<UserCard name={name} displayName={displayName} pictureSrc={pictureSrc} />);

        expect(new URL(screen.getByAltText(`u/${name} avatar`).src).pathname).toEqual(`/${pictureSrc}`);
        expect(screen.getByText(`u/${name}`)).toBeInTheDocument();
        expect(screen.getByText(displayName)).toBeInTheDocument();
    });
});
