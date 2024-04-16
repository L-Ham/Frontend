import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {Banner} from '../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/Banner/banner.js';
jest.mock('../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/Banner/banner.styles.js', () => ({
    bannerClasses: {
        banner: 'banner',
        bannerImage: 'bannerImage',
    },
}));

describe('Banner Component', () => {
    beforeEach(() => {
        // Ensures a clean slate before each test
        cleanup();
    });

    it('renders without crashing', () => {
        const {getByTestId} = render(<Banner subredditId="sub123" bannerLink="http://example.com/banner.jpg" />);
        expect(getByTestId('subreddit-overlay-banner-sub123')).toBeInTheDocument();
    });

    it('has the correct alt text', () => {
        const {getByAltText} = render(<Banner subredditId="sub123" bannerLink="http://example.com/banner.jpg" />);
        expect(getByAltText('Subreddit Icon')).toBeInTheDocument();
    });

    it('displays the correct image source', () => {
        const {getByTestId} = render(<Banner subredditId="sub123" bannerLink="http://example.com/banner.jpg" />);
        const image = getByTestId('subreddit-overlay-banner-sub123');
        expect(image.src).toBe('http://example.com/banner.jpg');
    });

    it('applies the correct styling', () => {
        const {getByTestId} = render(<Banner subredditId="sub123" bannerLink="http://example.com/banner.jpg" />);
        const image = getByTestId('subreddit-overlay-banner-sub123');
        expect(image).toHaveClass('bannerImage');
    });

    it('has the expected structure', () => {
        const {getByTestId} = render(<Banner subredditId="sub123" bannerLink="http://example.com/banner.jpg" />);
        const bannerDiv = getByTestId('subreddit-overlay-banner-sub123').parentNode;
        expect(bannerDiv).toHaveClass('banner');
    });
});
