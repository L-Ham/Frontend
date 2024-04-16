import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {TopBar} from
    '../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/TopBar/topbar.js';
import {useTopBar} from
    '../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/TopBar/topbar.hooks.js';

jest.mock('../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/TopBar/topbar.styles.js', () => ({
    topbarClasses: {
        root: 'root',
        icon: 'icon',
        subreddit: 'subreddit',
        subredditLink: 'subredditLink',
        joinButton: 'joinButton',
    },
    topbarStyles: {
        joinButton: {
            padding: '10px',
        },
    },
}));

jest.mock('../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/TopBar/topbar.hooks.js');

describe('TopBar Component', () => {
    beforeEach(() => {
        cleanup();
        useTopBar.mockImplementation(() => ({
            DefaultIcon: () => <div>DefaultIcon</div>,
            isJoined: false,
            setIsJoined: jest.fn((f)=>f),
        }));
    });

    it('renders the TopBar component correctly', () => {
        const {getByTestId} = render(
            <TopBar subredditId="sub123" subredditPrefixedName="/r/test" isSubscriber={true} />,
        );
        expect(getByTestId('subreddit-name-sub123')).toHaveTextContent('/r/test');
    });

    it('displays the default icon when no icon is provided', () => {
        const {getByTestId} = render(
            <TopBar subredditId="sub123" subredditPrefixedName="/r/test" isSubscriber={true} />,
        );
        expect(getByTestId('subreddit-icon-sub123')).toHaveTextContent('DefaultIcon');
    });

    it('displays a custom icon when provided', () => {
        const CustomIcon = () => <div>CustomIcon</div>;
        const {getByTestId} = render(
            <TopBar subredditId="sub123" subredditPrefixedName="/r/test" isSubscriber={true} icon={<CustomIcon />} />,
        );
        expect(getByTestId('subreddit-icon-sub123')).toHaveTextContent('CustomIcon');
    });

    it('renders a join button for non-subscribers', () => {
        const {getByTestId} = render(
            <TopBar subredditId="sub123" subredditPrefixedName="/r/test" isSubscriber={false} />,
        );
        expect(getByTestId('join-button-sub123')).toHaveTextContent('Join');
    });

    it('does not render a join button for subscribers', () => {
        const {queryByTestId} = render(
            <TopBar subredditId="sub123" subredditPrefixedName="/r/test" isSubscriber={true} />,
        );
        expect(queryByTestId('join-button-sub123')).toBeNull();
    });

    it('toggles join/leave state when button is clicked', () => {
        const {getByTestId} = render(
            <TopBar subredditId="sub123" subredditPrefixedName="/r/test" isSubscriber={false} />,
        );
        const mockEvent = new MouseEvent('click', {
            bubbles: true, // Make sure it bubbles for a realistic test
            cancelable: true,
        });
        jest.spyOn(mockEvent, 'stopPropagation');
        fireEvent(getByTestId('join-button-sub123'), mockEvent);
        expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });

    it('applies correct styling from styles object', () => {
        const {getByTestId} = render(
            <TopBar subredditId="sub123" subredditPrefixedName="/r/test" isSubscriber={false} />,
        );
        expect(getByTestId('join-button-sub123')).toHaveStyle('padding: 10px');
    });
});
