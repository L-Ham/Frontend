import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {CommunityStats} from '../../pages/subreddit/CommunityStats';


describe('CommunityStats', () => {
    it('renders correctly with provided props', () => {
        const membersCount = '1.2M';
        const onlineCount = '500';
        const rank = '1';

        const {getByText} = render(
            <CommunityStats
                membersCount={membersCount}
                onlineCount={onlineCount}
                rank={rank}
            />,
        );

        expect(getByText('Members')).toBeInTheDocument();
        expect(getByText('Online')).toBeInTheDocument();
        expect(getByText('Rank by size')).toBeInTheDocument();
        expect(getByText(membersCount.toString())).toBeInTheDocument();
        expect(getByText(onlineCount.toString())).toBeInTheDocument();
        expect(getByText(rank.toString())).toBeInTheDocument();
    });
});
