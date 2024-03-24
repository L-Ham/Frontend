import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure jest-dom matchers are imported
import {expect, describe, it} from '@jest/globals';
import {SubredditSidebar} from '../../pages/subreddit/SubredditSidebar';

describe('SubredditSidebar component', () => {
    it('should render the subreddit sidebar with all components', () => {
        const name = 'test subreddit';
        const description = 'test description';
        const membersCount = '1.2M';
        const currentlyViewingCount = '100';
        const rank = '14';
        const username = 'test user';
        const spoilInstructions = ['instruction 1', 'instruction 2'];
        const rules = [
            {title: 'Rule 1', description: ['Description 1']},
            {title: 'Rule 2', description: ['Description 2']},
        ];
        const moderators = [
            {username: 'moderator1', profilePictureSrc: 'profile1.png'},
            {username: 'moderator2', profilePictureSrc: 'profile2.png'},
        ];

        const {getByText} = render(
            <SubredditSidebar
                name={name}
                description={description}
                membersCount={membersCount}
                currentlyViewingCount={currentlyViewingCount}
                rank={rank}
                username={username}
                spoilInstructions={spoilInstructions}
                rules={rules}
                moderators={moderators}
            />,
        );

        // Assert
        expect(getByText('test subreddit')).toBeInTheDocument();
        expect(getByText('test description')).toBeInTheDocument();
        expect(getByText('1.2M')).toBeInTheDocument();
        expect(getByText('100')).toBeInTheDocument();
        expect(getByText('14')).toBeInTheDocument();
        expect(getByText('test user')).toBeInTheDocument();
        expect(getByText('Rule 1')).toBeInTheDocument();
        expect(getByText('Description 1')).toBeInTheDocument();
        expect(getByText('Rule 2')).toBeInTheDocument();
        expect(getByText('Description 2')).toBeInTheDocument();
        expect(getByText('u/moderator1')).toBeInTheDocument();
        expect(getByText('u/moderator2')).toBeInTheDocument();
    });
});
