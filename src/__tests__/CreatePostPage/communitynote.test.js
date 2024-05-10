/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {CommunityNote} from '../../pages/CreatePostPage/CreatePostPageMain/CommunityNote/communitynote.js';

jest.mock('../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

describe('CommunityNote', () => {
    test('renders without crashing', () => {
        render(<CommunityNote />);
    });

    test('renders note-div', () => {
        render(<CommunityNote />);
        const noteDiv = screen.getByTestId('note-div');
        expect(noteDiv).toBeInTheDocument();
    });

    test('renders submitText correctly', () => {
        render(<CommunityNote />);
        const noteDiv = screen.getByTestId('note-div');
        expect(noteDiv.textContent).toContain('Don\'t leak out spoilers for an unreleased chapter');
    });
});
