import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {SubredditSidebarItem} from '../../pages/subreddit/SubredditSidebarItem';

describe('SubredditSidebarItem', () => {
    it('renders the title and children correctly', () => {
        const title = 'Test Title';
        const children = <div>Test Children</div>;

        const {getByText} = render(
            <SubredditSidebarItem title={title}>
                {children}
            </SubredditSidebarItem>,
        );

        expect(getByText(title)).toBeInTheDocument();
        expect(getByText('Test Children')).toBeInTheDocument();
    });
});
