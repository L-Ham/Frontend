import React from 'react';
import {render, screen} from '@testing-library/react';
import {UserCard} from '../../generic components/UserCard';
import {expect, describe, it} from '@jest/globals';

describe('UserCard', () => {
    it('renders the user flair with correct name and picture', () => {
        const name = 'John Doe';
        const pictureSrc = 'https://example.com/profile.jpg';

        render(<UserCard name={name} pictureSrc={pictureSrc} />);

        const profilePicture = screen.getByAltText('picture');
        const username = screen.getByText(name);

        expect(profilePicture).toBeInTheDocument();
        expect(profilePicture).toHaveAttribute('src', pictureSrc);
        expect(username).toBeInTheDocument();
    });
});
