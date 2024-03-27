import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {CommunityStats} from '../../pages/subreddit/communitystats';

describe('CommunityStats', () => {
    // Renders the component with valid input data.
    it('should render the component with valid input data', () => {
        // Arrange
        const subscribersCount = 1000;
        const currentlyViewingCount = 10;
        const rank = '1';
        const isSmallView = true;

        // Act
        render(<CommunityStats
            subscribersCount={subscribersCount}
            currentlyViewingCount={currentlyViewingCount}
            rank={rank}
            isSmallView={isSmallView}
        />);

        // Assert
        expect(screen.getByText('Members')).toBeInTheDocument();
        expect(screen.getByText('Online')).toBeInTheDocument();
        expect(screen.getByText('Rank by size')).toBeInTheDocument();
    });

    // Does not render the component with null subscribersCount.
    it('should not render the component with null subscribersCount', () => {
        // Arrange
        const subscribersCount = null;
        const currentlyViewingCount = 10;
        const rank = '1';
        const isSmallView = true;

        // Act
        render(<CommunityStats
            subscribersCount={subscribersCount}
            currentlyViewingCount={currentlyViewingCount}
            rank={rank}
            isSmallView={isSmallView}
        />);

        // Assert
        expect(screen.queryByText('Members')).not.toBeInTheDocument();
    });
});
