/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {CommunityHeader} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityHeader/communityheader.js';
import {useNavigate} from 'react-router-dom';
import {useCreatePostPage} from '../../pages/CreatePostPage/createpostpage.context.js';

// Mocks for react-router and context
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('../../pages/CreatePostPage/createpostpage.context.js', () => ({
    useCreatePostPage: jest.fn(),
}));

describe('CommunityHeader', () => {
    let mockNavigate;
    beforeEach(() => {
        mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);
        useCreatePostPage.mockReturnValue({
            about: {
                communityDetails: {
                    name: 'testName',
                    avatarImage: 'testAvatar.jpg',
                },
            },
        });
    });

    afterEach(() => {
        useNavigate.mockClear();
        useCreatePostPage.mockClear();
    });

    it('renders without crashing', () => {
        const {getByTestId} = render(<CommunityHeader />);
        expect(getByTestId('community-header-div')).toBeInTheDocument();
    });

    it('renders image correctly', () => {
        const {getByTestId} = render(<CommunityHeader />);
        expect(getByTestId('community-header-img')).toHaveAttribute('src', 'testAvatar.jpg');
    });

    it('renders inner div correctly', () => {
        const {getByTestId} = render(<CommunityHeader />);
        expect(getByTestId('community-header-inner-div')).toBeInTheDocument();
    });

    it('renders link correctly', () => {
        const {getByTestId} = render(<CommunityHeader />);
        expect(getByTestId('community-header-a')).toBeInTheDocument();
    });

    it('renders span correctly', () => {
        const {getByTestId} = render(<CommunityHeader />);
        expect(getByTestId('community-header-span')).toHaveTextContent('r/testName');
    });

    it('navigates correctly when link is clicked', () => {
        const {getByTestId} = render(<CommunityHeader />);
        fireEvent.click(getByTestId('community-header-a'));
        expect(mockNavigate).toHaveBeenCalledWith('/r/testName/');
    });
});
