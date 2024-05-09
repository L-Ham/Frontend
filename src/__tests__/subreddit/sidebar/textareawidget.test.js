import React from 'react';
import {render} from '@testing-library/react';
import {TextAreaWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/TextArea/textareawidget.js';
import {useTextAreaWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/TextArea/textareawidget.hooks.js';

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Widget/subredditwidget.js', () => ({
    __esModule: true,
    SubredditWidget: ({children}) => {
        return <div data-testid="subreddit-widget">{children}</div>;
    },
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/TextArea/textareawidget.hooks.js', () => ({
    useTextAreaWidget: jest.fn(),
}));

describe('TextAreaWidget', () => {
    beforeEach(() => {
        useTextAreaWidget.mockReturnValue({
            text: 'Test Text',
        });
    });

    test('renders without crashing', () => {
        render(<TextAreaWidget textHtml="<p>Test Text</p>" shortName="Test Widget" />);
    });

    test('renders text correctly', () => {
        const {getByTestId} = render(<TextAreaWidget textHtml="<p>Test Text</p>" shortName="Test Widget" />);
        expect(getByTestId('text-container')).toHaveTextContent('Test Text');
    });

    test('does not render when text is null', () => {
        useTextAreaWidget.mockReturnValueOnce({
            text: null,
        });
        const {queryByTestId} = render(<TextAreaWidget textHtml="<p>Test Text</p>" shortName="Test Widget" />);
        expect(queryByTestId('subreddit-widget')).toBeNull();
    });
});
