/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {CommunityListDropdownItem} from '../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/CommunityListDropdown/CommunityListDropdownItem/communitylistdropdownitem.js';

jest.mock('../../generic components/utils', () => ({
    __esModule: true,
    formatNumberWithCommas: (num) => num.toLocaleString(),
}));

describe('CommunityListDropdownItem', () => {
    const mockCommunityData = {
        communityName: 'testCommunity',
        memberCount: 1234,
        communityAvatar: 'testAvatar.jpg',
    };

    test('renders correctly when communityData is null', () => {
        const {queryByTestId} = render(<CommunityListDropdownItem communityData={null} />);
        expect(queryByTestId('community-list-dropdown-item-div')).toBeNull();
    });

    test('renders correctly when communityData is provided', () => {
        const {getByTestId} = render(<CommunityListDropdownItem communityData={mockCommunityData} />);
        expect(getByTestId('community-list-dropdown-item-div')).toBeInTheDocument();
    });

    test('displays correct data when communityData is provided', () => {
        const {getByTestId} = render(<CommunityListDropdownItem communityData={mockCommunityData} />);
        expect(getByTestId('community-list-dropdown-item-span1').textContent).toBe(mockCommunityData.communityName);
        expect(getByTestId('community-list-dropdown-item-span2').textContent).toBe(`${mockCommunityData.memberCount.toLocaleString()} members`);
    });

    test('displays correct image when communityAvatar is null', () => {
        const {getByTestId} = render(<CommunityListDropdownItem communityData={{...mockCommunityData, communityAvatar: null}} />);
        expect(getByTestId('community-list-dropdown-item-image').src).toContain('default-subreddit.svg');
    });

    test('displays correct image when communityAvatar is provided', () => {
        const {getByTestId} = render(<CommunityListDropdownItem communityData={mockCommunityData} />);
        expect(getByTestId('community-list-dropdown-item-image').src).toContain(mockCommunityData.communityAvatar);
    });

    test('has all data-testid attributes', () => {
        const {getByTestId} = render(<CommunityListDropdownItem communityData={mockCommunityData} />);
        expect(getByTestId('community-list-dropdown-item-div')).toBeInTheDocument();
        expect(getByTestId('community-list-dropdown-item-inner-div')).toBeInTheDocument();
        expect(getByTestId('community-list-dropdown-item-inner-div2')).toBeInTheDocument();
        expect(getByTestId('community-list-dropdown-item-image')).toBeInTheDocument();
        expect(getByTestId('community-list-dropdown-item-span1')).toBeInTheDocument();
        expect(getByTestId('community-list-dropdown-item-span2')).toBeInTheDocument();
    });
});
