import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Banner} from '../../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/Banner/banner.js';
import {describe, it, expect} from '@jest/globals';
describe('Banner', () => {
    // Renders Banner with all required props
    it('should render Banner with all required props', () => {
        const subredditId = 'testSubreddit';
        const bannerLink = 'https://test.com/banner.jpg';

        render(<Banner subredditId={subredditId} bannerLink={bannerLink} />);

        const bannerImage = screen.getByTestId(`subreddit-overlay-banner-${subredditId}`);
        expect(bannerImage).toBeInTheDocument();
        expect(bannerImage).toHaveAttribute('src', bannerLink);
        expect(bannerImage).toHaveAttribute('alt', 'Subreddit Icon');
    });
});
