import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {describe, it, expect} from '@jest/globals';
import {AddNewWidgets} from '../../../pages/subreddit/SubredditSidebar/Forms/addnewwidgets';
import {useSubreddit} from '../../../pages/subreddit/subredditcontext';

jest.mock('../../../pages/subreddit/subredditcontext.js', () => ({
    useSubreddit: jest.fn(),
}));

describe('AddNewWidgets', () => {
    it('renders correctly', () => {
        useSubreddit.mockReturnValue({
            setIsBookmarksFormVisible: jest.fn(),
            setIsTextWidgetFormVisible: jest.fn(),
            setIsAddNewWidgetsVisible: jest.fn(),
            about: {communityDetails: {name: 'test'}},
        });

        const {getByTestId} = render(<AddNewWidgets />);

        expect(getByTestId('add-new-widgets-container')).toBeInTheDocument();
    });

    it('handles button clicks correctly', () => {
        const setIsBookmarksFormVisibleMock = jest.fn();
        const setIsTextWidgetFormVisibleMock = jest.fn();
        const setIsAddNewWidgetsVisibleMock = jest.fn();

        useSubreddit.mockReturnValue({
            setIsBookmarksFormVisible: setIsBookmarksFormVisibleMock,
            setIsTextWidgetFormVisible: setIsTextWidgetFormVisibleMock,
            setIsAddNewWidgetsVisible: setIsAddNewWidgetsVisibleMock,
            about: {communityDetails: {name: 'test'}},
        });

        const {getAllByRole} = render(<AddNewWidgets />);
        const buttons = getAllByRole('button');

        fireEvent.click(buttons[1]);
        expect(setIsBookmarksFormVisibleMock).toHaveBeenCalled();
        expect(setIsAddNewWidgetsVisibleMock).toHaveBeenCalled();

        fireEvent.click(buttons[2]);
        expect(setIsTextWidgetFormVisibleMock).toHaveBeenCalled();
        expect(setIsAddNewWidgetsVisibleMock).toHaveBeenCalled();
    });
});
