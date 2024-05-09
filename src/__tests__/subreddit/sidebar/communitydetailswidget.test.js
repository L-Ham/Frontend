import {render, screen, fireEvent} from '@testing-library/react';
import {CommunityDetailsWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/communitydetailswidget.js';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext.js';

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    useSubreddit: jest.fn(),
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/DescriptionSection/descriptionsection.js', () => ({
    __esModule: true,
    DescriptionSection: () => <div data-testid="description-section"/>,
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/StatsItem/statsitem.js', () => ({
    __esModule: true,
    StatsItem: () => <div data-testid="stats-item"/>,
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/OnlineIndicator/onlineindicator.js', () => ({
    __esModule: true,
    OnlineIndicator: () => <div data-testid="online-indicator"/>,
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/DirectoryLink/directorylink.js', () => ({
    __esModule: true,
    DirectoryLink: () => <div data-testid="directory-link"/>,
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Widget/subredditwidget.js', () => ({
    __esModule: true,
    SubredditWidget: ({children, onEditClick}) => <div data-testid="subreddit-widget" onClick={onEditClick}>{children}</div>,
}));

describe('CommunityDetailsWidget', () => {
    const mockDescription = 'Test description';
    const mockCurrentlyViewingCount = 100;
    const mockMembersCount = 1000;
    const mockIsCustomizable = true;
    const mockOnEditClick = jest.fn();

    beforeEach(() => {
        useSubreddit.mockReturnValue({
            about: {
                communityDetails: {
                    name: 'Test title',
                },
            },
        });

        render(<CommunityDetailsWidget description={mockDescription} currentlyViewingCount={mockCurrentlyViewingCount} membersCount={mockMembersCount} isCustomizable={mockIsCustomizable} onEditClick={mockOnEditClick} />);
    });

    it('renders the subreddit widget', () => {
        expect(screen.getByTestId('subreddit-widget')).toBeInTheDocument();
    });

    it('renders the description section', () => {
        expect(screen.getByTestId('description-section')).toBeInTheDocument();
    });

    it('renders the stats item', () => {
        expect(screen.getByTestId('stats-item')).toBeInTheDocument();
    });

    it('renders the online indicator', () => {
        expect(screen.getByTestId('online-indicator')).toBeInTheDocument();
    });

    it('renders the directory link', () => {
        expect(screen.getByTestId('directory-link')).toBeInTheDocument();
    });

    it('renders the stats container', () => {
        expect(screen.getByTestId('stats-container')).toBeInTheDocument();
    });

    it('calls onEditClick when subreddit widget is clicked', () => {
        fireEvent.click(screen.getByTestId('subreddit-widget'));
        expect(mockOnEditClick).toHaveBeenCalled();
    });
});
