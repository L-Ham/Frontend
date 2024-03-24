import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {CommunityDetailsWidget} from '../../pages/subreddit/CommunityDetailsWidget';

describe('CommunityDetailsWidget component', () => {
    it('should render correctly with all props', () => {
        // Render the CommunityDetailsWidget component
        const {getByText} = render(
            <CommunityDetailsWidget
                name="Test Subreddit"
                description="This is a test subreddit"
                membersCount="1000"
                onlineCount="50"
                rank='5'
            />,
        );

        expect(getByText('Test Subreddit')).toBeInTheDocument();
        expect(getByText('This is a test subreddit')).toBeInTheDocument();

        const textContent = document.body.textContent;
        expect(textContent).toMatch(/1000/);
        expect(textContent).toMatch(/50/);
    });
});
