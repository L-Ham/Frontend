import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {TopBar} from '../../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/TopBar/topbar.js';


describe('TopBar', () => {
    it('should render TopBar with all required props', () => {
        const subredditId = 'testSubredditId';
        const subredditPrefixedName = 'testSubredditPrefixedName';
        const icon = <div></div>;
        const isSubscriber = false;

        render(<TopBar
            subredditId={subredditId}
            subredditPrefixedName={subredditPrefixedName}
            icon={icon}
            isSubscriber={isSubscriber}
        />);

        expect(screen.getByTestId(`subreddit-icon-${subredditId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`subreddit-name-${subredditId}`)).toHaveTextContent(subredditPrefixedName);
        expect(screen.getByTestId(`join-button-${subredditId}`)).toBeInTheDocument();
    });

    it('should render TopBar with default icon when icon prop is not provided', () => {
        const subredditId = 'testSubredditId';
        const subredditPrefixedName = 'testSubredditPrefixedName';
        const isSubscriber = false;

        render(<TopBar
            subredditId={subredditId}
            subredditPrefixedName={subredditPrefixedName}
            isSubscriber={isSubscriber}
        />);

        expect(screen.getByTestId(`subreddit-icon-${subredditId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`subreddit-name-${subredditId}`)).toHaveTextContent(subredditPrefixedName);
        expect(screen.getByTestId(`join-button-${subredditId}`)).toBeInTheDocument();
    });

    it('should not render join button when isSubscriber is true', () => {
        const subredditId = 'testSubredditId';
        const subredditPrefixedName = 'testSubredditPrefixedName';
        const icon = <div></div>;
        const isSubscriber = true;

        render(<TopBar
            subredditId={subredditId}
            subredditPrefixedName={subredditPrefixedName}
            icon={icon}
            isSubscriber={isSubscriber}
        />);

        expect(screen.getByTestId(`subreddit-icon-${subredditId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`subreddit-name-${subredditId}`)).toHaveTextContent(subredditPrefixedName);
        expect(screen.queryByTestId(`join-button-${subredditId}`)).not.toBeInTheDocument();
    });
});
