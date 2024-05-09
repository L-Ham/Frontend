import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {SubredditWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/Widget/subredditwidget';
import {useSubredditWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/Widget/subredditwidget.hooks.js';

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Widget/subredditwidget.hooks.js', () => ({
    useSubredditWidget: jest.fn(),
}));

describe('SubredditWidget', () => {
    beforeEach(() => {
        useSubredditWidget.mockReturnValue({
            viewClasses: {
                container: 'test-container',
                header: 'test-header',
                title: 'test-title',
            },
        });
    });

    test('renders without crashing', () => {
        render(<SubredditWidget title="Test Title" children={<div />} />);
    });

    test('renders title correctly', () => {
        const {getByTestId} = render(<SubredditWidget title="Test Title" children={<div />} />);
        expect(getByTestId('title-h2')).toHaveTextContent('Test Title');
    });

    test('renders children correctly', () => {
        const {getByText} = render(<SubredditWidget title="Test Title" children={<div>Test Child</div>} />);
        expect(getByText('Test Child')).toBeInTheDocument();
    });

    test('renders edit button when isCustomizable is true', () => {
        const {getByTestId} = render(<SubredditWidget title="Test Title" children={<div />} isCustomizable={true} />);
        expect(getByTestId('edit-button')).toBeInTheDocument();
    });

    test('does not render edit button when isCustomizable is false', () => {
        const {queryByTestId} = render(<SubredditWidget title="Test Title" children={<div />} isCustomizable={false} />);
        expect(queryByTestId('edit-button')).toBeNull();
    });

    test('calls onEditClick when edit button is clicked', () => {
        const mockOnEditClick = jest.fn();
        const {getByTestId} = render(<SubredditWidget title="Test Title" children={<div />} isCustomizable={true} onEditClick={mockOnEditClick} />);
        fireEvent.click(getByTestId('edit-button'));
        expect(mockOnEditClick).toHaveBeenCalled();
    });
});
