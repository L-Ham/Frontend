import React from 'react';
import {render} from '@testing-library/react';
import {WidgetsRenderer} from '../../../pages/subreddit/SubredditSidebar/Widgets/WidgetsRenderer/widgetsrenderer.js';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext.js';
import {useWidgetsRenderer} from
    '../../../pages/subreddit/SubredditSidebar/Widgets/WidgetsRenderer/widgetsrenderer.hooks.js';

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    useSubreddit: jest.fn(),
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/WidgetsRenderer/widgetsrenderer.hooks.js', () => ({
    useWidgetsRenderer: jest.fn(),
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/widgetsmap.js', () => ({
    WIDGETS_MAP: {
        'community-details': () => <div data-testid="community-details-widget"/>,
        'id-card': () => <div data-testid="id-card-widget"/>,
        'menu': () => <div data-testid="menu-widget"/>,
        'subreddit-rules': () => <div data-testid="subreddit-rules-widget"/>,
        'textarea': () => <div data-testid="textarea-widget"/>,
        'moderators': () => <div data-testid="moderators-widget"/>,
        'community-settings': () => <div data-testid="community-settings-widget"/>,
    },
}));

describe('WidgetsRenderer', () => {
    beforeEach(() => {
        useSubreddit.mockReturnValue({
            setIsBookmarksFormVisible: jest.fn(),
            setIsCommunityDetailsFormVisible: jest.fn(),
            setIsTextWidgetFormVisible: jest.fn(),
            setTextWidgetId: jest.fn(),
            setBookmarkWidgetId: jest.fn(),
            setTextWidget: jest.fn(),
        });

        useWidgetsRenderer.mockReturnValue({
            allWidgets: ['1', '2', '3'],
            items: {
                '1': {kind: 'community-details'},
                '2': {kind: 'id-card'},
                '3': {kind: 'menu'},
            },
            userIsModerator: true,
            about: {communityDetails: {name: 'testSubreddit'}},
        });
    });

    test('renders without crashing', () => {
        render(<WidgetsRenderer />);
    });

    test('renders widgets correctly', () => {
        const {getByTestId} = render(<WidgetsRenderer />);
        expect(getByTestId('community-details-widget')).toBeInTheDocument();
        expect(getByTestId('id-card-widget')).toBeInTheDocument();
        expect(getByTestId('menu-widget')).toBeInTheDocument();
    });
});
