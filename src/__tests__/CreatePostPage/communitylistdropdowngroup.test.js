/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {CommunityListDropdownGroup} from '../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/CommunityListDropdown/CommunityListDropdownGroup/communitylistdropdowngroup.js';


jest.mock('../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/CommunityListDropdown/CommunityListDropdownItem/communitylistdropdownitem.js', () => ({
    __esModule: true,
    CommunityListDropdownItem: () => <div data-testid="community-list-dropdown-item" />,
}));

const mockCommunitiesData = [
    {name: 'test1'},
    {name: 'test2'},
];

describe('CommunityListDropdownGroup', () => {
    test('renders correctly', () => {
        render(<CommunityListDropdownGroup CommunitiesData={mockCommunitiesData} isContainButton={true} title="Test Title" />);
        expect(screen.getByTestId('community-list-dropdown-group-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-list-dropdown-group-inner-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-list-dropdown-group-span')).toBeInTheDocument();
        expect(screen.getByTestId('community-list-dropdown-group-button')).toBeInTheDocument();
        expect(screen.getAllByTestId('community-list-dropdown-item').length).toBe(mockCommunitiesData.length);
    });

    test('does not render button when isContainButton is false', () => {
        render(<CommunityListDropdownGroup CommunitiesData={mockCommunitiesData} isContainButton={false} title="Test Title" />);
        expect(screen.queryByTestId('community-list-dropdown-group-button')).not.toBeInTheDocument();
    });
});
