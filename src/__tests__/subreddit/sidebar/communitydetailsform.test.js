import {render, fireEvent, waitFor} from '@testing-library/react';
import {CommunityDetailsForm} from '../../../pages/subreddit/SubredditSidebar/Forms/communitydetailsform.js';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext.js';
import {useNotifications} from '../../../generic components/Notifications/notificationsContext.js';

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    useSubreddit: jest.fn(),
}));

jest.mock('../../../generic components/Notifications/notificationsContext.js', () => ({
    useNotifications: jest.fn(),
}));


describe('CommunityDetailsForm', () => {
    beforeEach(() => {
        useSubreddit.mockReturnValue({
            about: {
                communityDetails: {
                    name: 'test',
                    subredditId: '1',
                    membersNickname: 'test',
                    currentlyViewingNickname: 'test',
                    description: 'test',
                },
            },
            setIsCommunityDetailsFormVisible: jest.fn(),
            setAbout: jest.fn(),
            setWidgets: jest.fn(),
            setLoading: jest.fn(),
        });

        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });

    it('renders form fields correctly', () => {
        const {getByLabelText} = render(<CommunityDetailsForm />);
        expect(getByLabelText(/Members' Nickname/i)).toBeInTheDocument();
        expect(getByLabelText(/Currently Viewing Nickname/i)).toBeInTheDocument();
        expect(getByLabelText(/Community Description/i)).toBeInTheDocument();
    });
});
