import {render} from '@testing-library/react';
import {CommunityCover} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityCover/communitycover.js';
import {useCreatePostPage} from '../../pages/CreatePostPage/createpostpage.context.js';
import {useCommunityCover} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityCover/communitycover.hooks.js';

jest.mock('../../pages/CreatePostPage/createpostpage.context.js', () => ({
    useCreatePostPage: jest.fn(),
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityCover/communitycover.hooks.js', () => ({
    useCommunityCover: jest.fn(),
}));

describe('CommunityCover', () => {
    beforeEach(() => {
        useCreatePostPage.mockReturnValue({
            about: {
                communityDetails: {
                    bannerImage: 'testImage.jpg',
                },
            },
            isCommunityTheme: true,
        });

        useCommunityCover.mockReturnValue({
            newWidth: 100,
            newHeight: 100,
        });
    });

    it('renders without crashing', () => {
        render(<CommunityCover />);
    });

    it('renders with correct data-testid', () => {
        const {getByTestId} = render(<CommunityCover />);
        expect(getByTestId('community-cover-div')).toBeInTheDocument();
    });

    it('applies correct styles when isCommunityTheme is true and bannerImage is provided', () => {
        const {getByTestId} = render(<CommunityCover />);
        expect(getByTestId('community-cover-div')).toHaveStyle({
            backgroundPositionY: 'center',
            backgroundPositionX: 'center',
            backgroundImage: 'url(testImage.jpg)',
            backgroundSize: '100px 100px',
            backgroundRepeat: 'no-repeat',
        });
    });

    it('applies correct styles when isCommunityTheme is false', () => {
        useCreatePostPage.mockReturnValueOnce({
            about: {
                communityDetails: {
                    bannerImage: 'testImage.jpg',
                },
            },
            isCommunityTheme: false,
        });

        const {getByTestId} = render(<CommunityCover />);
        expect(getByTestId('community-cover-div')).toHaveStyle({
            backgroundImage: '',
        });
    });

    it('applies correct styles when bannerImage is not provided', () => {
        useCreatePostPage.mockReturnValueOnce({
            about: {
                communityDetails: {},
            },
            isCommunityTheme: true,
        });

        const {getByTestId} = render(<CommunityCover />);
        expect(getByTestId('community-cover-div')).toHaveStyle({
            backgroundImage: '',
        });
    });

    it('applies correct styles when newWidth and newHeight are provided', () => {
        const {getByTestId} = render(<CommunityCover />);
        expect(getByTestId('community-cover-div')).toHaveStyle({
            backgroundSize: '100px 100px',
        });
    });
});
