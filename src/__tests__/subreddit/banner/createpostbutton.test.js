import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {CreatePostButton} from '../../../pages/subreddit/SubredditBanner/CreatePostButton/createpostbutton.js';
import {describe, it, expect, jest} from '@jest/globals';

// Mock dependencies
jest.mock('../../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

// Tests
describe('CreatePostButton', () => {
    const handleCreatePostMock = jest.fn();
    const PlusIconMock = () => <div data-testid="plus-icon"/>;

    it('renders correctly', () => {
        const {getByTestId} =
        render(<CreatePostButton handleCreatePost={handleCreatePostMock} PlusIcon={PlusIconMock} />);

        expect(getByTestId('container')).toBeInTheDocument();
        expect(getByTestId('create-post-button')).toBeInTheDocument();
        expect(getByTestId('flex-container')).toBeInTheDocument();
        expect(getByTestId('icon-wrapper')).toBeInTheDocument();
        expect(getByTestId('text-wrapper')).toBeInTheDocument();
        expect(getByTestId('plus-icon')).toBeInTheDocument();
    });

    it('calls handleCreatePost when button is clicked', () => {
        const {getByTestId} =
         render(<CreatePostButton handleCreatePost={handleCreatePostMock} PlusIcon={PlusIconMock} />);
        fireEvent.click(getByTestId('create-post-button'));

        expect(handleCreatePostMock).toHaveBeenCalled();
    });
});
