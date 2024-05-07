import React from 'react';
import {describe, jest, it, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {CommunityStats} from '../../../pages/subreddit/SubredditBanner/CommunityStats/communitystats';

jest.mock('../../../pages/subreddit/General/Components/numberformatter.js', () => ({
    __esModule: true,
    NumberFormatter: () => {
        return <div data-testid="number-formatter"/>;
    },
}));

describe('CommunityStats', () => {
    it('renders correctly with valid data', () => {
        const {getByTestId, queryAllByTestId} = render(<CommunityStats displayNamePrefixed='r/test'
            subscribersCount={123} activeUserCount={456}/>);

        expect(getByTestId('container')).toBeInTheDocument();
        expect(getByTestId('community-header')).toBeInTheDocument();
        expect(getByTestId('stats-container')).toBeInTheDocument();
        expect(getByTestId('member-count-text')).toBeInTheDocument();
        expect(getByTestId('online-users-container')).toBeInTheDocument();
        expect(getByTestId('online-indicator')).toBeInTheDocument();
        expect(getByTestId('online-count-text')).toBeInTheDocument();
        const numberFormatters = queryAllByTestId(/number-formatter/);
        expect(numberFormatters.length).toBeGreaterThan(1);
    });

    it('renders correctly with default data', () => {
        const {getByTestId, queryAllByTestId} = render(<CommunityStats />);

        expect(getByTestId('container')).toBeInTheDocument();
        expect(getByTestId('community-header')).toBeInTheDocument();
        expect(getByTestId('stats-container')).toBeInTheDocument();
        expect(getByTestId('member-count-text')).toBeInTheDocument();
        expect(getByTestId('online-users-container')).toBeInTheDocument();
        expect(getByTestId('online-indicator')).toBeInTheDocument();
        expect(getByTestId('online-count-text')).toBeInTheDocument();
        const numberFormatters = queryAllByTestId(/number-formatter/);
        expect(numberFormatters.length).toBeGreaterThan(1);
    });
});
