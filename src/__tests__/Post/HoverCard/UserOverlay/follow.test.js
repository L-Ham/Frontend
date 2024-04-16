import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {FollowButtons} from
    '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/FollowButton/follow.js';
import {followClasses} from
    '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/FollowButton/follow.styles.js';

// Mock the follow.styles.js for consistent className usage
jest.mock('../../../../generic components/Post/HoverCard/Overlays/UserOverlay/FollowButton/follow.styles.js', () => ({
    followClasses: {
        follow: 'follow-button',
        unfollow: 'unfollow-button',
        followWrapper: 'follow-wrapper',
        unfollowWrapper: 'unfollow-wrapper',
        icon: 'button-icon',
        text: 'button-text',
    },
}));

// Mock the follow.hooks.js
jest.mock('../../../../generic components/Post/HoverCard/Overlays/UserOverlay/FollowButton/follow.hooks.js', () => ({
    useFollow: () => ({
        FollowIcon: () => <span>Follow Icon</span>,
        UnfollowIcon: () => <span>Unfollow Icon</span>,
    }),
}));

describe('FollowButtons', () => {
    beforeEach(() => {
        // Ensures that the DOM is cleaned up after each test.
        cleanup();
    });

    it('renders Follow button for a non-friend user correctly', () => {
        const {getByTestId} = render(<FollowButtons userId="1" isFriend={false} />);
        const followButton = getByTestId('follow-button-1');
        const followIcon = getByTestId('follow-icon-1');
        const followText = getByTestId('follow-text-1');

        expect(followButton).toHaveClass(followClasses.follow);
        expect(followIcon).toContainHTML('<span>Follow Icon</span>');
        expect(followText).toHaveTextContent('Follow');
    });

    it('renders Unfollow button for a friend user correctly', () => {
        const {getByTestId} = render(<FollowButtons userId="2" isFriend={true} />);
        const unfollowButton = getByTestId('unfollow-button-2');
        const unfollowIcon = getByTestId('unfollow-icon-2');
        const unfollowText = getByTestId('unfollow-text-2');

        expect(unfollowButton).toHaveClass(followClasses.unfollow);
        expect(unfollowIcon).toContainHTML('<span>Unfollow Icon</span>');
        expect(unfollowText).toHaveTextContent('Unfollow');
    });

    it('checks correct rendering of the Follow icon and text', () => {
        const {getByTestId} = render(<FollowButtons userId="3" isFriend={false} />);
        const followIcon = getByTestId('follow-icon-3');
        const followText = getByTestId('follow-text-3');

        expect(followIcon.firstChild).toContainHTML('<span>Follow Icon</span>');
        expect(followText.textContent).toBe('Follow');
    });

    it('checks correct rendering of the Unfollow icon and text', () => {
        const {getByTestId} = render(<FollowButtons userId="4" isFriend={true} />);
        const unfollowIcon = getByTestId('unfollow-icon-4');
        const unfollowText = getByTestId('unfollow-text-4');

        expect(unfollowIcon.firstChild).toContainHTML('<span>Unfollow Icon</span>');
        expect(unfollowText.textContent).toBe('Unfollow');
    });
});
