import React from 'react';
import {describe, jest, it, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {CommunityIcon} from '../../../pages/subreddit/SubredditBanner/CommunityIcon/communityicon';
import {useCommunityIcon} from '../../../pages/subreddit/SubredditBanner/CommunityIcon/communityicon.hooks';

jest.mock('../../../pages/subreddit/SubredditBanner/CommunityIcon/communityicon.hooks.js');

describe('CommunityIcon', () => {
    it('renders correctly with valid icon data', () => {
        useCommunityIcon.mockReturnValue({
            Tag: 'img',
            tagProps: {
                className: 'test-class',
            },
        });

        const {getByTestId} = render(<CommunityIcon icon="testIcon.jpg"
            displayNamePrefixed="r/test" primaryColor="#123456" />);

        expect(getByTestId('community-icon-wrapper')).toBeInTheDocument();
        expect(getByTestId('icon-holder')).toBeInTheDocument();
        expect(getByTestId('tag')).toBeInTheDocument();
    });

    it('render with div', () => {
        useCommunityIcon.mockReturnValue({
            Tag: 'div',
            tagProps: {
                className: 'test-class',
            },
        });

        const {getByTestId} = render(<CommunityIcon />);

        expect(getByTestId('community-icon-wrapper')).toBeInTheDocument();
        expect(getByTestId('icon-holder')).toBeInTheDocument();
        expect(getByTestId('tag')).toBeInTheDocument();
    });
});
