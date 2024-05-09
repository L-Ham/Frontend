import {render, screen} from '@testing-library/react';
import {UserCard} from '../../../pages/subreddit/SubredditSidebar/Widgets/Moderators/Usercard/usercard.js';

jest.mock('../../../assets/icons/default-subreddit.svg', () => ({
    __esModule: true,
    default: 'mockDefaultSubredditImage',
}));

describe('UserCard', () => {
    const mockProps = {
        name: 'testUser',
        displayName: 'Test User',
        pictureSrc: 'testPictureSrc.jpg',
    };

    beforeEach(() => {
        render(<UserCard {...mockProps} />);
    });

    it('renders the user avatar', () => {
        const userAvatar = screen.getByTestId('user-avatar');
        expect(userAvatar).toBeInTheDocument();
        expect(userAvatar).toHaveAttribute('src', mockProps.pictureSrc);
        expect(userAvatar).toHaveAttribute('alt', `u/${mockProps.name} avatar`);
    });

    it('renders the username link', () => {
        const usernameLink = screen.getByTestId('username-link');
        expect(usernameLink).toBeInTheDocument();
        expect(usernameLink).toHaveTextContent(`u/${mockProps.name}`);
    });

    it('renders the display name', () => {
        const displayNameSpan = screen.getByTestId('display-name-span');
        expect(displayNameSpan).toBeInTheDocument();
        expect(displayNameSpan).toHaveTextContent(mockProps.displayName);
    });
});
