import React from 'react';
import {describe, jest, it, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {SubredditBanner} from '../../../pages/subreddit/SubredditBanner/subredditbanner';
import {useSubredditBanner} from '../../../pages/subreddit/SubredditBanner/subredditbanner.hooks';

jest.mock('../../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditBanner/CommunityIcon/communityicon.js', () => ({
    __esModule: true,
    CommunityIcon: () => {
        return <div data-testid="community-icon"/>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditBanner/CommunityStats/communitystats.js', () => ({
    __esModule: true,
    CommunityStats: () => {
        return <div data-testid="community-stats"/>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditBanner/CreatePostButton/createpostbutton.js', () => ({
    __esModule: true,
    CreatePostButton: () => {
        return <div data-testid="create-post-button"/>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditBanner/HeaderButtons/HeaderButton/headerbuttons.js', () => ({
    __esModule: true,
    HeaderButtons: () => {
        return <div data-testid="header-buttons"/>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditBanner/subredditbanner.hooks.js');


describe('SubredditBanner', () => {
    it('renders correctly with valid banner data', () => {
        useSubredditBanner.mockReturnValue({
            bannerBackgroundImage: 'testImage.jpg',
            communityIcon: 'testIcon.jpg',
            displayNamePrefixed: 'r/test',
            activeUserCount: 123,
            subscribersCount: 456,
            primaryColor: '#123456',
            PlusIcon: () => <svg />,
            handleCreatePost: jest.fn(),
        });

        const {getByTestId} = render(<SubredditBanner />);

        expect(getByTestId('subreddit-banner-ws5dsd')).toBeInTheDocument();
        expect(getByTestId('banner-image')).toBeInTheDocument();
        expect(getByTestId('section-container')).toBeInTheDocument();
        expect(getByTestId('flex-container')).toBeInTheDocument();
        expect(getByTestId('inner-flex-container')).toBeInTheDocument();
        expect(getByTestId('community-icon')).toBeInTheDocument();
        expect(getByTestId('community-stats')).toBeInTheDocument();
        expect(getByTestId('buttons-container')).toBeInTheDocument();
        expect(getByTestId('create-post-button')).toBeInTheDocument();
        expect(getByTestId('header-buttons')).toBeInTheDocument();
    });

    it('does not render with empty banner data', () => {
        useSubredditBanner.mockReturnValue({});

        const {queryByTestId} = render(<SubredditBanner />);

        expect(queryByTestId('subreddit-banner-ws5dsd')).toBeNull();
    });
});
