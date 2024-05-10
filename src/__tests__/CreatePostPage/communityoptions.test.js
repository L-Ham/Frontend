/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {CommunityOptions} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityOptions/communityoptions.js';
import {useCreatePostPage} from '../../pages/CreatePostPage/createpostpage.context.js';
import {getIconComponent} from '../../generic components/iconsmap.js';

jest.mock('../../pages/CreatePostPage/createpostpage.context.js', () => ({
    useCreatePostPage: jest.fn(),
}));

jest.mock('../../generic components/iconsmap', () => ({
    getIconComponent: jest.fn(),
}));

describe('CommunityOptions', () => {
    let setIsCommunityTheme;
    let setIsOptionsOpen;

    beforeEach(() => {
        setIsCommunityTheme = jest.fn();
        setIsOptionsOpen = jest.fn();

        useCreatePostPage.mockReturnValue({
            isCommunityTheme: false,
            setIsCommunityTheme,
            isOptionsOpen: false,
            setIsOptionsOpen,
        });

        getIconComponent.mockImplementation((iconName, isFilled) => {
            if (iconName === 'caret-down') {
                return () => <div data-testid="caret-down-icon" />;
            } else if (iconName === 'eye') {
                return () => <div data-testid="eye-icon" />;
            } else if (iconName === 'eye-slash') {
                return () => <div data-testid="eye-slash-icon" />;
            }
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<CommunityOptions />);
    });

    it('renders "community-options-div"', () => {
        const {getByTestId} = render(<CommunityOptions />);
        expect(getByTestId('community-options-div')).toBeInTheDocument();
    });

    it('renders "community-options-button"', () => {
        const {getByTestId} = render(<CommunityOptions />);
        expect(getByTestId('community-options-button')).toBeInTheDocument();
    });

    it('renders "caret-down-icon"', () => {
        const {getByTestId} = render(<CommunityOptions />);
        expect(getByTestId('caret-down-icon')).toBeInTheDocument();
    });

    it('does not render "options-open-div" when isOptionsOpen is false', () => {
        const {queryByTestId} = render(<CommunityOptions />);
        expect(queryByTestId('options-open-div')).not.toBeInTheDocument();
    });

    // it('renders "options-open-div" when isOptionsOpen is true', () => {
    //     useCreatePostPage.mockReturnValueOnce({
    //         isCommunityTheme: false,
    //         setIsCommunityTheme,
    //         isOptionsOpen: true,
    //         setIsOptionsOpen,
    //     });

    //     const {getByTestId} = render(<CommunityOptions />);
    //     expect(getByTestId('options-open-div')).toBeInTheDocument();
    // });
});
