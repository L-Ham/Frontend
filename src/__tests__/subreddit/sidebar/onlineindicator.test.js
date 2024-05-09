import {render, screen} from '@testing-library/react';
import {OnlineIndicator} from '../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/OnlineIndicator/onlineindicator.js';


jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/StatsItem/statsitem.js', () => ({
    __esModule: true,
    StatsItem: ({count}) => <div data-testid="stats-item">
        <>
            {count}
            <span data-testid="online-indicator-span" />
            <span data-testid="online-label-span">
        Online
            </span>
        </></div>,
}));

describe('OnlineIndicator', () => {
    beforeEach(() => {
        render(<OnlineIndicator count={100} />);
    });

    it('renders the stats item', () => {
        expect(screen.getByTestId('stats-item')).toBeInTheDocument();
    });

    it('renders the online indicator span', () => {
        expect(screen.getByTestId('online-indicator-span')).toBeInTheDocument();
    });

    it('renders the online label span', () => {
        expect(screen.getByTestId('online-label-span')).toBeInTheDocument();
    });

    it('displays the correct count', () => {
        expect(screen.getByText('100')).toBeInTheDocument();
    });
});
