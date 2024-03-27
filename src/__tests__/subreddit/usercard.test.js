import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {UserCard} from '../../pages/subreddit/usercard';

describe('UserCard', () => {
    // Renders user card with all required props
    it('should render user card with all required props', () => {
        const name = 'testUser';
        const displayName = 'Test User';
        const pictureSrc = 'test.jpg';
        const isLink = true;

        render(<UserCard name={name} displayName={displayName} pictureSrc={pictureSrc} isLink={isLink} />);

        expect(new URL(screen.getByAltText('picture').src).pathname).toEqual(`/${pictureSrc}`);
        expect(screen.getByText(`u/${name}`)).toBeInTheDocument();
        expect(screen.getByText(displayName)).toBeInTheDocument();
        expect(screen.getByText(`u/${name}`).closest('a')).
            toHaveAttribute('href', `https://www.reddit.com/user/${name}/`);
        expect(screen.getByText(`u/${name}`).closest('a')).toHaveAttribute('target', '_blank');
        expect(screen.getByText(`u/${name}`).closest('a')).toHaveAttribute('rel', 'noreferrer');
    });

    // Renders user card with empty name
    it('should render user card with empty name', () => {
        const name = '';
        const displayName = 'Test User';
        const pictureSrc = 'test.jpg';
        const isLink = true;

        render(<UserCard name={name} displayName={displayName} pictureSrc={pictureSrc} isLink={isLink} />);

        expect(new URL(screen.getByAltText('picture').src).pathname).toEqual(`/${pictureSrc}`);
        expect(screen.getByText(`u/${name}`)).toBeInTheDocument();
        expect(screen.getByText(displayName)).toBeInTheDocument();
        expect(screen.getByText(`u/${name}`).closest('a')).toHaveAttribute('href', '#');
        expect(screen.getByText(`u/${name}`).closest('a')).toHaveAttribute('target', '_blank');
        expect(screen.getByText(`u/${name}`).closest('a')).toHaveAttribute('rel', 'noreferrer');
    });
});
