import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {CommunityWidget} from '../../pages/subreddit/CommunityWidget';


describe('CommunityWidget', () => {
    it('renders the component with correct props', () => {
        const subredditName = 'example';
        const {getByText} = render(<CommunityWidget name={subredditName} />);

        // Assert that the component renders with the correct title
        expect(getByText('Community Bookmarks')).toBeInTheDocument();

        // Assert that all the bookmark buttons are rendered
        expect(getByText('Wiki')).toBeInTheDocument();
        expect(getByText('Discussions')).toBeInTheDocument();
        expect(getByText('Latest Chapter')).toBeInTheDocument();
        expect(getByText('Resources')).toBeInTheDocument();
        expect(getByText('Discord')).toBeInTheDocument();
        expect(getByText('No Spoiler')).toBeInTheDocument();
    });
});
