import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {Stats} from '../../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/Stats/stats.js';
import {formatNumber} from '../../../../../generic components/utils';
describe('Stats', () => {
    // Renders Stats with all required props
    it('should render Stats with all required props', () => {
        const subredditId = 'testSubreddit';
        const membersCount = 12345;
        const membersName = 'Members';
        const onlineCount = 67890;
        const onlineName = 'Online';

        render(<Stats
            subredditId={subredditId}
            membersCount={membersCount}
            membersName={membersName}
            onlineCount={onlineCount}
            onlineName={onlineName}
        />);

        expect(screen.getByTestId(`stats-members-count-${subredditId}`))
            .toHaveTextContent(formatNumber(membersCount));
        expect(screen.getByTestId(`stats-members-name-${subredditId}`)).toHaveTextContent(membersName);
        expect(screen.getByTestId(`stats-online-count-${subredditId}`)).toHaveTextContent(formatNumber(onlineCount));
        expect(screen.getByTestId(`stats-online-name-${subredditId}`)).toHaveTextContent(onlineName);
    });

    // Renders Stats with zero counts
    it('should render Stats with zero counts', () => {
        const subredditId = 'testSubreddit';
        const membersCount = 0;
        const membersName = 'Members';
        const onlineCount = 0;
        const onlineName = 'Online';

        render(<Stats
            subredditId={subredditId}
            membersCount={membersCount}
            membersName={membersName}
            onlineCount={onlineCount}
            onlineName={onlineName}
        />);

        expect(screen.getByTestId(`stats-members-count-${subredditId}`))
            .toHaveTextContent(formatNumber(membersCount));
        expect(screen.getByTestId(`stats-members-name-${subredditId}`)).toHaveTextContent(membersName);
        expect(screen.getByTestId(`stats-online-count-${subredditId}`)).toHaveTextContent(formatNumber(onlineCount));
        expect(screen.getByTestId(`stats-online-name-${subredditId}`)).toHaveTextContent(onlineName);
    });

    // Renders Stats with default names
    it('should render Stats with default names', () => {
        const subredditId = 'testSubreddit';
        const membersCount = 12345;
        const onlineCount = 67890;

        render(<Stats
            subredditId={subredditId}
            membersCount={membersCount}
            onlineCount={onlineCount}
        />);

        expect(screen.getByTestId(`stats-members-count-${subredditId}`))
            .toHaveTextContent(formatNumber(membersCount));
        expect(screen.getByTestId(`stats-members-name-${subredditId}`)).toHaveTextContent('Members');
        expect(screen.getByTestId(`stats-online-count-${subredditId}`)).toHaveTextContent(formatNumber(onlineCount));
        expect(screen.getByTestId(`stats-online-name-${subredditId}`)).toHaveTextContent('Online');
    });
});
