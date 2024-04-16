import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render} from '@testing-library/react';
import {Stats} from '../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/Stats/stats.js';
import {formatNumber} from '../../../../generic components/utils.js';

jest.mock('../../../../generic components/utils.js');

jest.mock('../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/Stats/stats.styles.js', () => ({
    statsClasses: {
        root: 'root',
        membersWrapper: 'membersWrapper',
        membersCount: 'membersCount',
        membersName: 'membersName',
        onlineWrapper: 'onlineWrapper',
        onlineCount: 'onlineCount',
        onlineDot: 'onlineDot',
        onlineName: 'onlineName',
        onlineNameWrapper: 'onlineNameWrapper',
    },
}));

describe('Stats Component', () => {
    beforeEach(cleanup);

    it('renders correctly', () => {
        const {getByTestId} = render(<Stats subredditId="sub123"
            membersCount={1024} onlineCount={512} membersName="Members" onlineName="Online" />);
        expect(getByTestId('stats-members-count-sub123')).toBeInTheDocument();
        expect(getByTestId('stats-online-count-sub123')).toBeInTheDocument();
    });

    it('displays the correct formatted numbers for members and online counts', () => {
        formatNumber.mockImplementation((num) => num.toLocaleString('en-US'));
        const {getByTestId} = render(<Stats subredditId="sub123" membersCount={10000} onlineCount={200} />);
        expect(getByTestId('stats-members-count-sub123').textContent).toBe('10,000');
        expect(getByTestId('stats-online-count-sub123').textContent).toBe('200');
    });

    it('uses default names when none are provided', () => {
        const {getByTestId} = render(<Stats subredditId="sub123" membersCount={1024} onlineCount={512} />);
        expect(getByTestId('stats-members-name-sub123').textContent).toBe('Members');
        expect(getByTestId('stats-online-name-sub123').textContent).toBe('Online');
    });

    it('uses provided names', () => {
        const {getByTestId} = render(<Stats subredditId="sub123" membersCount={1024}
            onlineCount={512} membersName="Users" onlineName="Currently Active" />);
        expect(getByTestId('stats-members-name-sub123').textContent).toBe('Users');
        expect(getByTestId('stats-online-name-sub123').textContent).toBe('Currently Active');
    });

    it('applies correct classes to the elements', () => {
        const {getByTestId} = render(<Stats subredditId="sub123" membersCount={1024} onlineCount={512} />);
        expect(getByTestId('stats-members-count-sub123').parentNode).toHaveClass('membersWrapper');
        expect(getByTestId('stats-online-count-sub123').parentNode).toHaveClass('onlineWrapper');
    });
});
