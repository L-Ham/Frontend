import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Subreddit} from '../../pages/subreddit/subreddit.js';
import {BrowserRouter as Router} from 'react-router-dom';

jest.mock('../../pages/subreddit/subredditcontext.js', () => ({
    __esModule: true,
    SubredditProvider: ({children}) => {
        return <div>{children}</div>;
    },
}));

jest.mock('../../pages/subreddit/SubredditBanner/subredditbanner.js', () => ({
    __esModule: true,
    SubredditBanner: () => {
        return <div data-testid="subreddit-banner"/>;
    },
}));

jest.mock('../../pages/subreddit/SubredditSidebar/subredditsidebar.js', () => ({
    __esModule: true,
    SubredditSidebar: () => {
        return <div data-testid="subreddit-sidebar"/>;
    },
}));

jest.mock('../../generic components/feed.js', () => ({
    __esModule: true,
    Feed: () => {
        return <div data-testid="feed"/>;
    },
    SubredditEmptyFeed: () => {
        return <div data-testid="subreddit-empty-feed"/>;
    },
}));


jest.mock('../../pages/subreddit//General/Components/overlaycontainer.js', () => ({
    __esModule: true,
    OverlayContainer: (children) => {
        return <div data-testid="overlay-container">{children.children}</div>;
    },
}));

describe('Subreddit', () => {
    it('renders without crashing', () => {
        render(
            <Router>
                <Subreddit name="test" />
            </Router>,
        );
    });

    if ('renders all components', () => {
        const {getByTestId} = render(
            <Router>
                <Subreddit name="test" />
            </Router>,
        );
        expect(getByTestId('subreddit-banner')).toBeInTheDocument();
        expect(getByTestId('subreddit-sidebar')).toBeInTheDocument();
        expect(getByTestId('feed')).toBeInTheDocument();
        expect(queryByTestId('inner-container')).toBeInTheDocument();
        expect(queryByTestId('content-container')).toBeInTheDocument();
        expect(queryByTestId('main-content')).toBeInTheDocument();
        expect(queryByTestId('show-button')).toBeInTheDocument();
        expect(queryByTestId('overlay-container')).toBeNull();
    });
});