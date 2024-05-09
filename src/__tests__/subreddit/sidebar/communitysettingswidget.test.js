import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {CommunitySettingsWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/CommunitySettings/communitysettingswidget.js';

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    __esModule: true,
    useSubreddit: () => ({
        isAppearanceSettingsVisible: false,
        setIsAppearanceSettingsVisible: jest.fn(),
        setIsAddNewWidgetsVisible: jest.fn(),
    }),
}));

jest.mock('../../../pages/subreddit/CommunityAppearance/communityappearance.js', () => ({
    __esModule: true,
    CommunityAppearance: () => {
        return <div data-testid="community-appearance"/>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Widget/subredditwidget.js', () => ({
    __esModule: true,
    SubredditWidget: ({children}) => {
        return <div data-testid="subreddit-widget">{children}</div>;
    },
}));

describe('CommunitySettingsWidget', () => {
    beforeEach(() => {
        render(<CommunitySettingsWidget />);
    });

    it('renders the subreddit widget', () => {
        const subredditWidget = screen.getByTestId('subreddit-widget');
        expect(subredditWidget).toBeInTheDocument();
    });

    // it('renders the community appearance when isAppearanceSettingsVisible is true', () => {
    //     const {rerender} = render(<CommunitySettingsWidget />);
    //     jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    //         __esModule: true,
    //         useSubreddit: () => ({
    //             isAppearanceSettingsVisible: true,
    //             setIsAppearanceSettingsVisible: jest.fn(),
    //             setIsAddNewWidgetsVisible: jest.fn(),
    //         }),
    //     }));

    //     rerender(<CommunitySettingsWidget />);
    //     expect(screen.getByTestId('community-appearance')).toBeInTheDocument();
    // });

    it('does not render the community appearance when isAppearanceSettingsVisible is false', () => {
        const communityAppearance = screen.queryByTestId('community-appearance');
        expect(communityAppearance).not.toBeInTheDocument();
    });
});
