import React from 'react';
import {render} from '@testing-library/react';
import {SubredditSidebar} from '../../../pages/subreddit/SubredditSidebar/subredditsidebar';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext';

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/WidgetsRenderer/widgetsrenderer.js', () => ({
    __esModule: true,
    WidgetsRenderer: () => <div data-testid="widgets-renderer" />,
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Forms/bookmarksform.js', () => ({
    __esModule: true,
    BookmarksForm: () => <div data-testid="bookmarks-form" />,
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Forms/communitydetailsform.js', () => ({
    __esModule: true,
    CommunityDetailsForm: () => <div data-testid="community-details-form" />,
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Forms/textwidgetform.js', () => ({
    __esModule: true,
    TextWidgetForm: () => <div data-testid="text-widget-form" />,
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Forms/addnewwidgets.js', () => ({
    __esModule: true,
    AddNewWidgets: () => <div data-testid="add-new-widgets" />,
}));

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    useSubreddit: jest.fn(),
}));

describe('SubredditSidebar', () => {
    it('renders correctly when all forms are hidden', () => {
        useSubreddit.mockReturnValue({
            isBookmarksFormVisible: false,
            isCommunityDetailsFormVisible: false,
            isTextWidgetFormVisible: false,
            isAddNewWidgetsVisible: false,
        });

        const {getByTestId, queryByTestId} = render(<SubredditSidebar />);

        expect(getByTestId('subreddit-sidebar-276t5r4RS5')).toBeInTheDocument();
        expect(getByTestId('widgets-renderer')).toBeInTheDocument();
        expect(queryByTestId('bookmarks-form')).toBeNull();
        expect(queryByTestId('community-details-form')).toBeNull();
        expect(queryByTestId('text-widget-form')).toBeNull();
        expect(queryByTestId('add-new-widgets')).toBeNull();
    });

    it('renders the BookmarksForm when isBookmarksFormVisible is true', () => {
        useSubreddit.mockReturnValue({
            isBookmarksFormVisible: true,
            isCommunityDetailsFormVisible: false,
            isTextWidgetFormVisible: false,
            isAddNewWidgetsVisible: false,
        });

        const {getByTestId} = render(<SubredditSidebar />);

        expect(getByTestId('bookmarks-form')).toBeInTheDocument();
    });

    // Similar tests for the other forms...
});
