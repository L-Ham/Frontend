import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {HoverCard} from '../../../generic components/Post/HoverCard/hovercard.js';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data.js';
import {useHoverCard} from '../../../generic components/Post/HoverCard/hovercard.hooks.js';
import {useUserOverlay} from '../../../generic components/Post/HoverCard/Overlays/UserOverlay/useroverlay.hooks.js';
import {useSubredditOverlay} from
    '../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/subredditoverlay.hooks.js';

jest.mock('../../../generic components/Post/HoverCard/hovercard.styles.js', () => ({
    hoverCardClasses: {
        root: 'root-class',
        icon: 'icon-class',
        overlay: 'overlay-class',
    },
    hoverCardStyles: {
        root: {padding: '10px'},
    },
}));
jest.mock('../../../generic components/Post/HoverCard/hovercard.hooks.js');
jest.mock('../../../generic components/Post/HoverCard/Overlays/UserOverlay/useroverlay.hooks.js');
jest.mock('../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/subredditoverlay.hooks.js');

describe('HoverCard component', () => {
    beforeEach(() => {
        cleanup();
        useHoverCard.mockImplementation(() => ({
            handlePopoverOpen: jest.fn(),
            handlePopoverClose: jest.fn(),
            DisplayIcon: <div>Icon</div>,
            overlayOpen: true,
            prefixedName: 'Mocked Name',
        }));
        useUserOverlay.mockImplementation(() => ({
            classNames: 'overlay-class',
            avatar: 'avatar-url',
            created: '2020-01-01',
            username: 'john_doe',
            description: 'A brief description',
            postKarma: 1000,
            commentKarma: 500,
            isFriend: true,
        }));
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

    it('renders correctly with all required props', () => {
        const {getByTestId} = render(
            <HoverCard postId="post1" entityId="user123" entityName="User Entity"
                viewContext={VIEW_CONTEXTS.COMMENTS_PAGE} isUser={true} />,
        );
        expect(getByTestId('hovercard-post1-user123')).toHaveClass('root-class');
        expect(getByTestId('hovercard-post1-user123')).toHaveStyle('padding: 10px');
    });

    it('conditionally renders DisplayIcon when not on COMMENTS_PAGE', () => {
        const {getByTestId} = render(
            <HoverCard postId="post2" entityId="subreddit1" entityName="Subreddit"
                viewContext={VIEW_CONTEXTS.AGGREGATE_FEED} isUser={false} />,
        );
        expect(getByTestId('displayicon-post2-subreddit1')).toBeInTheDocument();
        expect(getByTestId('displayicon-post2-subreddit1')).toContainHTML('<div>Icon</div>');
    });

    it('does not render DisplayIcon on COMMENTS_PAGE', () => {
        const {queryByTestId} = render(
            <HoverCard postId="post3" entityId="subreddit2" entityName="Subreddit"
                viewContext={VIEW_CONTEXTS.COMMENTS_PAGE} isUser={false} />,
        );
        expect(queryByTestId('displayicon-post3-subreddit2')).toBeNull();
    });

    it('renders the UserOverlay component for a user entity when overlay is open', () => {
        const {getByTestId} = render(
            <HoverCard postId="post4" entityId="user124" entityName="User Entity"
                viewContext={VIEW_CONTEXTS.AGGREGATE_FEED} isUser={true} />,
        );
        expect(getByTestId('overlay-post4-user124')).toContainHTML('<UserOverlay');
    });

    it('renders the SubredditOverlay component for a subreddit entity when overlay is open', () => {
        const {getByTestId} = render(
            <HoverCard postId="post5" entityId="subreddit3" entityName="Subreddit"
                viewContext={VIEW_CONTEXTS.AGGREGATE_FEED} isUser={false} />,
        );
        expect(getByTestId('overlay-post5-subreddit3')).toContainHTML('<SubredditOverlay');
    });
});
