import React from 'react';
import {describe, jest, it, expect} from '@jest/globals';
import {render} from '@testing-library/react';
import {BannerImage} from '../../../pages/subreddit/SubredditBanner/BannerImage/bannerimage';

describe('BannerImage', () => {
    it('renders correctly with backgroundImage prop', () => {
        const {getByTestId} = render(<BannerImage backgroundImage="testImage.jpg" />);

        expect(getByTestId('outer-div')).toBeInTheDocument();
        expect(getByTestId('banner-div')).toBeInTheDocument();
    });

    it('renders correctly without backgroundImage prop', () => {
        const {getByTestId} = render(<BannerImage />);

        expect(getByTestId('outer-div')).toBeInTheDocument();
        expect(getByTestId('banner-div')).toBeInTheDocument();
    });
});
