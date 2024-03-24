import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {SubredditWidget} from '../../pages/subreddit/SubredditWidget';

describe('SubredditWidget', () => {
    it('renders the title and children correctly', () => {
        const title = 'Test Title';
        const children = <div>Test Children</div>;

        const {getByText} = render(
            <SubredditWidget title={title}>
                {children}
            </SubredditWidget>,
        );

        expect(getByText(title)).toBeInTheDocument();
        expect(getByText('Test Children')).toBeInTheDocument();
    });
});
