import React from 'react';
import {render, screen} from '@testing-library/react';
import {BookmarksForm} from '../../../pages/subreddit/SubredditSidebar/Forms/bookmarksform.js';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext.js';
import {useNotifications} from '../../../generic components/Notifications/notificationsContext.js';

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    useSubreddit: jest.fn(),
}));

jest.mock('../../../generic components/Notifications/notificationsContext.js', () => ({
    useNotifications: jest.fn(),
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Forms/genericform.js', () => ({
    __esModule: true,
    GenericForm: () => {
        return <div data-testid="generic-form"/>;
    },
}));

describe('BookmarksForm', () => {
    beforeEach(() => {
        useSubreddit.mockReturnValue({
            bookmarkWidgetId: null,
            about: {
                communityDetails: {
                    name: 'test',
                    subredditId: 'testId',
                },
            },
            setAbout: jest.fn(),
            setWidgets: jest.fn(),
            setLoading: jest.fn(),
            setIsBookmarksFormVisible: jest.fn(),
            setBookmarkWidgetId: jest.fn(),
        });

        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });

        render(<BookmarksForm />);
    });

    test('renders correctly', () => {
        expect(screen.getByTestId('generic-form')).toBeInTheDocument();
    });
});
