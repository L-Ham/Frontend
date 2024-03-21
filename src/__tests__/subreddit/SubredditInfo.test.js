import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {SubredditInfo} from '../../pages/subreddit/SubredditInfo';

describe('SubredditInfo component', () => {
    it('should render correctly with all props', () => {
        // Render the SubredditInfo component
        const {getByText} = render(
            <SubredditInfo
                name="Test Subreddit"
                description="This is a test subreddit"
                membersCount={1000}
                onlineCount={50}
                rank={5}
            />,
        );

        expect(getByText('Test Subreddit')).toBeInTheDocument();
        expect(getByText('This is a test subreddit')).toBeInTheDocument();

        const textContent = document.body.textContent;
        expect(textContent).toMatch(/1000/);
        expect(textContent).toMatch(/50/);
    });
});
