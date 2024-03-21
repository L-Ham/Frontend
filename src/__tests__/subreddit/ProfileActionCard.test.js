import React from 'react';
import {render, screen} from '@testing-library/react';
import {ProfileActionCard} from '../../generic components/ProfileActionCard';
import {expect, describe, it} from '@jest/globals';

describe('ProfileActionCard', () => {
    it('renders the user flair with correct name and picture', () => {
        const name = 'John Doe';
        const pictureSrc = 'https://example.com/profile.jpg';

        render(<ProfileActionCard name={name} pictureSrc={pictureSrc} />);

        const profilePicture = screen.getByAltText('picture');
        const username = screen.getByText(name);

        expect(profilePicture).toBeInTheDocument();
        expect(profilePicture).toHaveAttribute('src', pictureSrc);
        expect(username).toBeInTheDocument();
    });
});
