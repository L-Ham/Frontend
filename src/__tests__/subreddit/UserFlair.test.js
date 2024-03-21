import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {UserFlair} from '../../pages/subreddit/UserFlair';

describe('UserFlair', () => {
    it('renders the user flair component', () => {
        const username = 'JohnDoe';
        const {getByText} = render(<UserFlair username={username} />);

        expect(getByText('USER FLAIR')).toBeInTheDocument();
        expect(getByText(username)).toBeInTheDocument();
    });
});
