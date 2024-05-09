import {render, screen} from '@testing-library/react';
import {CommunityModeratorsWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/Moderators/CommunityModerators/communitymoderatorswidget.js';
import {useCommunityModeratorsWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/Moderators/CommunityModerators/communitymoderatorswidget.hooks.js';

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Moderators/CommunityModerators/communitymoderatorswidget.hooks.js', () => ({
    useCommunityModeratorsWidget: jest.fn(),
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Widget/subredditwidget.js', () => ({
    __esModule: true,
    SubredditWidget: ({children}) => <div data-testid="subreddit-widget">{children}</div>,
}));

describe('CommunityModeratorsWidget', () => {
    const mockModerators = ['mod1', 'mod2', 'mod3'];

    beforeEach(() => {
        useCommunityModeratorsWidget.mockReturnValue({
            multiLinkButtonsComponents: <div data-testid="mock-multi-link-buttons"/>,
            moderatorComponents: <div data-testid="mock-moderator-components"/>,
        });

        render(<CommunityModeratorsWidget moderators={mockModerators} />);
    });

    it('renders the subreddit widget', () => {
        expect(screen.getByTestId('subreddit-widget')).toBeInTheDocument();
    });

    it('renders the moderators container', () => {
        expect(screen.getByTestId('moderators-container')).toBeInTheDocument();
    });

    it('renders the moderators list', () => {
        expect(screen.getByTestId('moderators-list')).toBeInTheDocument();
    });

    it('renders the multi-link buttons container', () => {
        expect(screen.getByTestId('multi-link-buttons-container')).toBeInTheDocument();
    });
});
