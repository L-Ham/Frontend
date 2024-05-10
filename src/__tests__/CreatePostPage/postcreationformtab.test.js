/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostCreationFormTab} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormTabs/PostCreationFormTab/postcreationformtab';

jest.mock('../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

describe('PostCreationFormTab', () => {
    const mockOnClick = jest.fn();

    it('renders without crashing', () => {
        render(<PostCreationFormTab isActive={false} onClick={mockOnClick} Icon="TestIcon" title="TestTitle" />);
    });

    it('renders button', () => {
        const {getByTestId} = render(<PostCreationFormTab isActive={false} onClick={mockOnClick} Icon="TestIcon" title="TestTitle" />);
        expect(getByTestId('post-creation-form-tab-button')).toBeInTheDocument();
    });

    it('renders icon when passed', () => {
        const {getByTestId} = render(<PostCreationFormTab isActive={false} onClick={mockOnClick} Icon="TestIcon" title="TestTitle" />);
        expect(getByTestId('post-creation-form-tab-icon')).toBeInTheDocument();
    });

    it('renders title', () => {
        const {getByTestId} = render(<PostCreationFormTab isActive={false} onClick={mockOnClick} Icon="TestIcon" title="TestTitle" />);
        expect(getByTestId('post-creation-form-tab-title')).toBeInTheDocument();
    });

    it('calls onClick when button is clicked', () => {
        const {getByTestId} = render(<PostCreationFormTab isActive={false} onClick={mockOnClick} Icon="TestIcon" title="TestTitle" />);
        fireEvent.click(getByTestId('post-creation-form-tab-button'));
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('has active class when isActive is true', () => {
        const {getByTestId} = render(<PostCreationFormTab isActive={true} onClick={mockOnClick} Icon="TestIcon" title="TestTitle" />);
        expect(getByTestId('post-creation-form-tab-button')).toHaveClass('active');
    });

    it('does not have active class when isActive is false', () => {
        const {getByTestId} = render(<PostCreationFormTab isActive={false} onClick={mockOnClick} Icon="TestIcon" title="TestTitle" />);
        expect(getByTestId('post-creation-form-tab-button')).not.toHaveClass('active');
    });
});
