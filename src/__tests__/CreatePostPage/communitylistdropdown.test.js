/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {CommunityListDropdown} from '../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/CommunityListDropdown/communitylistdropdown.js';
import {useCommunityListDropDown} from '../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/CommunityListDropdown/communitylistdropdown.hooks.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/CommunityListDropdown/CommunityListDropdownGroup/communitylistdropdowngroup.js', () => ({
    __esModule: true,
    CommunityListDropdownGroup: ({CommunitiesData, title, dataTestId}) => {
        return <div data-testid={dataTestId}>{title}{CommunitiesData.join(',')}</div>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/CommunityListDropdown/communitylistdropdown.hooks.js', () => ({
    useCommunityListDropDown: jest.fn(),
}));

describe('CommunityListDropdown', () => {
    beforeEach(() => {
        useCommunityListDropDown.mockClear();
    });

    test('renders nothing when there are no communities', () => {
        useCommunityListDropDown.mockReturnValue({
            userCommunities: [],
            otherCommunities: [],
        });

        render(<CommunityListDropdown searchInput="" />);
        expect(screen.queryByTestId('community-list-dropdown-div')).toBeNull();
    });
});
