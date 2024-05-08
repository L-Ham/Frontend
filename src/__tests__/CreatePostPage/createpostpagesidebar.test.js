import {render, screen} from '@testing-library/react';
import {CreatePostPageSidebar} from '../../pages/CreatePostPage/CreatePostPageSidebar/createpostpagesidebar';

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/communitydetails.js', () => ({
    __esModule: true,
    CommunityDetails: () => {
        return <div data-testid="community-details"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityRules/communityrules.js', () => ({
    __esModule: true,
    CommunityRules: () => {
        return <div data-testid="community-rules"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/RedditRules/redditrules.js', () => ({
    __esModule: true,
    RedditRules: () => {
        return <div data-testid="reddit-rules"/>;
    },
}));

test('renders CreatePostPageSidebar without crashing', () => {
    render(<CreatePostPageSidebar />);
});

test('renders CommunityDetails', () => {
    render(<CreatePostPageSidebar />);
    const communityDetails = screen.getByTestId('community-details');
    expect(communityDetails).toBeInTheDocument();
});

test('renders CommunityRules', () => {
    render(<CreatePostPageSidebar />);
    const communityRules = screen.getByTestId('community-rules');
    expect(communityRules).toBeInTheDocument();
});

test('renders RedditRules', () => {
    render(<CreatePostPageSidebar />);
    const redditRules = screen.getByTestId('reddit-rules');
    expect(redditRules).toBeInTheDocument();
});

test('renders divs with correct data-testid attributes', () => {
    render(<CreatePostPageSidebar />);
    const sidebarDiv = screen.getByTestId('sidebar-div');
    const sidebarInnerDiv = screen.getByTestId('sidebar-inner-div');
    const sidebarSpacingDiv = screen.getByTestId('sidebar-spacing-div');
    const sidebarTextDiv = screen.getByTestId('sidebar-text-div');
    expect(sidebarDiv).toBeInTheDocument();
    expect(sidebarInnerDiv).toBeInTheDocument();
    expect(sidebarSpacingDiv).toBeInTheDocument();
    expect(sidebarTextDiv).toBeInTheDocument();
});

test('renders links with correct href attributes', () => {
    render(<CreatePostPageSidebar />);
    const contentPolicyLink = screen.getByTestId('content-policy-link');
    const reddiquetteLink = screen.getByTestId('reddiquette-link');
    expect(contentPolicyLink).toHaveAttribute('href', 'https://www.reddit.com/help/contentpolicy');
    expect(reddiquetteLink).toHaveAttribute('href', 'https://www.reddit.com/wiki/reddiquette');
});
