import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {SubredditBanner} from '../../pages/subreddit/SubredditBanner';

describe('code snippet', () => {
    // Renders the SubredditBanner component with all props passed in
    it('should render the SubredditBanner component with all props passed in', () => {
        // Arrange
        const name = 'testName';
        const profilePictureSrc = 'testProfilePictureSrc';
        const coverSrc = 'testCoverSrc';
        const membersCount = '100';
        const onlineCount = '10';

        // Act
        const {getByAltText, getByText} = render(<SubredditBanner
            name={name}
            profilePictureSrc={profilePictureSrc}
            coverSrc={coverSrc}
            membersCount={membersCount}
            onlineCount={onlineCount}
        />);

        // Assert
        expect(getByText(`r/${name}`)).toBeInTheDocument();
        expect(getByAltText('Subreddit profile picture')).toHaveAttribute('src', profilePictureSrc);
        expect(getByAltText('Subreddit Cover')).toHaveAttribute('src', coverSrc);
        expect(getByText(membersCount)).toBeInTheDocument();
        expect(getByText(onlineCount)).toBeInTheDocument();
    });

    // Cover image is not provided
    it('should render the SubredditBanner component without cover image', () => {
        // Arrange
        const name = 'testName';
        const profilePictureSrc = 'testProfilePictureSrc';
        const membersCount = '100';
        const onlineCount = '10';

        // Act
        const {getByAltText} = render(<SubredditBanner
            name={name}
            profilePictureSrc={profilePictureSrc}
            membersCount={membersCount}
            onlineCount={onlineCount}
        />);

        // Assert
        expect(getByAltText('Subreddit Cover')).toHaveAttribute('src', '');
    });
});
