/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {CommunityMembers} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityDetails/CommunityMembers/communitymembers.js';
import {useCreatePostPage} from '../../pages/CreatePostPage/createpostpage.context.js';

jest.mock('../../pages/CreatePostPage/createpostpage.context.js');

describe('CommunityMembers', () => {
    beforeEach(() => {
        useCreatePostPage.mockClear();
    });

    test('renders nothing when about is null', () => {
        useCreatePostPage.mockReturnValue({about: null});
        render(<CommunityMembers />);
        expect(screen.queryByTestId('community-members-div')).toBeNull();
    });

    test('renders correctly when about is not null', () => {
        useCreatePostPage.mockReturnValue({
            about: {
                communityDetails: {
                    membersNickname: 'Members',
                    membersCount: 100,
                    currentlyViewingNickname: 'Online',
                    currentlyViewingCount: 50,
                },
            },
        });
        render(<CommunityMembers />);
        expect(screen.getByTestId('community-members-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-members-flexcol-div-1')).toBeInTheDocument();
        expect(screen.getByTestId('community-members-flexcol-div-2')).toBeInTheDocument();
        expect(screen.getByTestId('community-members-text-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-members-online-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-members-p-1')).toBeInTheDocument();
        expect(screen.getByTestId('community-members-p-2')).toBeInTheDocument();
        expect(screen.getByTestId('community-members-div-1')).toBeInTheDocument();
        expect(screen.getByTestId('community-members-div-2')).toBeInTheDocument();
    });

    test('displays correct values when about is not null', () => {
        useCreatePostPage.mockReturnValue({
            about: {
                communityDetails: {
                    membersNickname: 'Members',
                    membersCount: 100,
                    currentlyViewingNickname: 'Online',
                    currentlyViewingCount: 50,
                },
            },
        });
        render(<CommunityMembers />);
        expect(screen.getByTestId('community-members-text-div')).toHaveTextContent('100');
        expect(screen.getByTestId('community-members-online-div')).toHaveTextContent('50');
        expect(screen.getByTestId('community-members-p-1')).toHaveTextContent('Members');
        expect(screen.getByTestId('community-members-p-2')).toHaveTextContent('Online');
    });
});
