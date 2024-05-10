/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {CommunityDetails} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/communitydetails.js';
import {useCreatePostPage} from '../../pages/CreatePostPage/createpostpage.context.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CreationDetails/creationdetails.js', () => ({
    __esModule: true,
    CreationDetails: () => <div data-testid="creation-details" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityCover/communitycover.js', () => ({
    __esModule: true,
    CommunityCover: () => <div data-testid="community-cover" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityHeader/communityheader.js', () => ({
    __esModule: true,
    CommunityHeader: () => <div data-testid="community-header" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityDescription/communitydescription.js', () => ({
    __esModule: true,
    CommunityDescription: () => <div data-testid="community-description" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityMembers/communitymembers.js', () => ({
    __esModule: true,
    CommunityMembers: () => <div data-testid="community-members" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/UserSection/usersection.js', () => ({
    __esModule: true,
    UserSection: () => <div data-testid="user-section" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityOptions/communityoptions.js', () => ({
    __esModule: true,
    CommunityOptions: () => <div data-testid="community-options" />,
}));

jest.mock('../../pages/CreatePostPage/createpostpage.context.js', () => ({
    useCreatePostPage: jest.fn(),
}));

describe('CommunityDetails', () => {
    beforeEach(() => {
        useCreatePostPage.mockReturnValue({about: null});
    });

    test('renders correctly when about is null', () => {
        render(<CommunityDetails />);
        expect(screen.queryByTestId('community-details-div')).toBeNull();
    });

    test('renders correctly when about is not null', () => {
        useCreatePostPage.mockReturnValue({about: 'test'});
        render(<CommunityDetails />);
        expect(screen.getByTestId('community-details-div')).toBeInTheDocument();
    });

    const testIds = [
        'community-details-inner-div',
        'community-details-content-div',
        'community-cover',
        'community-header',
        'community-description',
        'creation-details',
        'community-details-spacing-div',
        'community-details-hr',
        'community-members',
        'user-section',
        'community-options',
    ];

    testIds.forEach((testId) => {
        test(`renders ${testId}`, () => {
            useCreatePostPage.mockReturnValue({about: 'test'});
            render(<CommunityDetails />);
            expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
    });
});
