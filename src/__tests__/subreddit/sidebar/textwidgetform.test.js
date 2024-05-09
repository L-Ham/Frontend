import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import {TextWidgetForm} from '../../../pages/subreddit/SubredditSidebar/Forms/textwidgetform.js';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext.js';
import {useNotifications} from '../../../generic components/Notifications/notificationsContext.js';
import {axiosInstance as axios} from '../../../requests/axios.js';

jest.mock('../../../generic components/Notifications/notificationsContext.js', () => ({
    useNotifications: jest.fn(),
}));

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    useSubreddit: jest.fn(),
}));

jest.mock('../../../requests/axios.js', () => ({
    axiosInstance: {
        post: jest.fn(),
        delete: jest.fn(),
        patch: jest.fn(),
    },
}));

describe('TextWidgetForm', () => {
    beforeEach(() => {
        useSubreddit.mockReturnValue({
            textWidgetId: null,
            textWidget: {},
            setIsTextWidgetFormVisible: jest.fn(),
            about: {communityDetails: {name: 'testSubreddit'}},
            setTextWidgetId: jest.fn(),
            setAbout: jest.fn(),
            setWidgets: jest.fn(),
            setLoading: jest.fn(),
            setTextWidget: jest.fn(),
        });

        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });

    test('renders without crashing', () => {
        render(<TextWidgetForm />);
    });

    // test('renders form fields correctly', () => {
    //     const {getByLabelText} = render(<TextWidgetForm />);
    //     //
    //     const label = getByLabelText('Widget Name:');
    //     expect(label).toBeInTheDocument();
    //     expect(label).toHaveAttribute('for', 'widgetName');
    //     expect(label).toHaveAttribute('for', 'text');
    // });

    // test('handles form submission correctly', async () => {
    //     axios.post.mockResolvedValue({data: {}});
    //     const {getByLabelText, getByText} = render(<TextWidgetForm />);
    //     fireEvent.change(getByLabelText('Widget Name'), {target: {value: 'Test Widget'}});
    //     fireEvent.change(getByLabelText('Text'), {target: {value: 'Test Text'}});
    //     fireEvent.click(getByText('Submit'));
    //     await waitFor(() => expect(axios.post).toHaveBeenCalled());
    // });

    test('handles delete correctly', async () => {
        axios.delete.mockResolvedValue({data: {}});
        useSubreddit.mockReturnValueOnce({
            textWidgetId: '1',
            textWidget: {shortName: 'Test Widget', text: 'Test Text'},
            setIsTextWidgetFormVisible: jest.fn(),
            about: {communityDetails: {name: 'testSubreddit'}},
            setTextWidgetId: jest.fn(),
            setAbout: jest.fn(),
            setWidgets: jest.fn(),
            setLoading: jest.fn(),
            setTextWidget: jest.fn(),
        });
        const {getByText} = render(<TextWidgetForm />);
        fireEvent.click(getByText('Delete'));
        await waitFor(() => expect(axios.delete).toHaveBeenCalled());
    });
});
