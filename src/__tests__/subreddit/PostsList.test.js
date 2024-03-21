import React from 'react';
import {render} from '@testing-library/react';
import {PostsList} from '../../pages/subreddit/PostsList';
import {expect, describe, it} from '@jest/globals';


describe('PostsList', () => {
    it('should render the component', () => {
        const {container} = render(<PostsList />);
        expect(container).toBeInTheDocument();
    });
});
