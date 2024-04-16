import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {SubredditOverlay} from
    '../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/subredditoverlay.js';
import {useSubredditOverlay} from
    '../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/subredditoverlay.hooks.js';

jest.mock('../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/subredditoverlay.hooks.js');

jest.mock('../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/subredditoverlay.styles.js', () => ({
    overlayClasses: {
        description: 'description',
        hr: 'hr',
    },
}));

describe('SubredditOverlay Component', () => {
    beforeEach(() => {
        cleanup();
        useSubredditOverlay.mockImplementation(() => ({
            subredditPrefixedName: '/r/testSubreddit',
            bannerImage: 'https://example.com/banner.jpg',
            isMember: true,
            description: 'Test Description',
            avatarImage: <img src="https://example.com/avatar.jpg" alt="avatar"/>,
            membersCount: 12345,
            membersNickname: 'Members',
            currentlyViewingCount: 123,
            currentlyViewingNickname: 'Online',
            rootClasses: 'subreddit-overlay-root',
        }));
    });

    it('renders with correct structure', () => {
        const {getByTestId} = render(
            <SubredditOverlay openOverlay={jest.fn()} closeOverlay={jest.fn()}
                subredditId="test123" subredditName="testSubreddit" viewContext="home" />,
        );
        expect(getByTestId('subreddit-overlay-test123')).toBeInTheDocument();
    });

    it('calls openOverlay on mouse enter', () => {
        const mockOpenOverlay = jest.fn();
        const {getByTestId} = render(
            <SubredditOverlay openOverlay={mockOpenOverlay} closeOverlay={jest.fn()}
                subredditId="test123" subredditName="testSubreddit" viewContext="home" />,
        );
        fireEvent.mouseEnter(getByTestId('subreddit-overlay-test123'));
        expect(mockOpenOverlay).toHaveBeenCalled();
    });

    it('calls closeOverlay on mouse leave', () => {
        const mockCloseOverlay = jest.fn();
        const {getByTestId} = render(
            <SubredditOverlay openOverlay={jest.fn()} closeOverlay={mockCloseOverlay}
                subredditId="test123" subredditName="testSubreddit" viewContext="home" />,
        );
        fireEvent.mouseLeave(getByTestId('subreddit-overlay-test123'));
        expect(mockCloseOverlay).toHaveBeenCalled();
    });

    it('stops propagation on click', () => {
        const {getByTestId} = render(
            <SubredditOverlay openOverlay={jest.fn()} closeOverlay={jest.fn()}
                subredditId="test123" subredditName="testSubreddit" viewContext="home" />,
        );
        const mockEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });
        jest.spyOn(mockEvent, 'stopPropagation');
        fireEvent(getByTestId('subreddit-overlay-test123'), mockEvent);
        expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });

    it('renders description with HTML content', () => {
        const {getByTestId} = render(
            <SubredditOverlay openOverlay={jest.fn()} closeOverlay={jest.fn()}
                subredditId="test123" subredditName="testSubreddit" viewContext="home" />,
        );
        expect(getByTestId('subreddit-overlay-description-test123')).toHaveTextContent('Test Description');
    });
});
