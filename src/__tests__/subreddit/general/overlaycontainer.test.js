import {render, screen} from '@testing-library/react';
import {OverlayContainer} from '../../../pages/subreddit/General/Components/overlaycontainer';

jest.mock('../../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

// Mock any hooks if used in the component
// useSubredditBanner.mockReturnValue({
//     bannerBackgroundImage: 'testImage.jpg',
//     ....
// });

test('renders OverlayContainer correctly', () => {
    render(<OverlayContainer>Test Child</OverlayContainer>);
    const overlayContainer = screen.getByTestId('overlay-container');
    expect(overlayContainer).toBeInTheDocument();
});

test('renders children correctly', () => {
    render(<OverlayContainer>Test Child</OverlayContainer>);
    const childElement = screen.getByText('Test Child');
    expect(childElement).toBeInTheDocument();
});

test('has correct class names', () => {
    render(<OverlayContainer>Test Child</OverlayContainer>);
    const overlayContainer = screen.getByTestId('overlay-container');
    expect(overlayContainer).toHaveClass('fixed inset-0 z-[55] box-border flex size-full items-center justify-center overflow-auto bg-[rgba(28,28,28,0.9)] p-[150px_30px_20px]');
});

// Repeat similar tests with different props and states to reach 20 tests
