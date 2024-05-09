import React from 'react';
import {render} from '@testing-library/react';
import {MultiLinkButton} from '../../../pages/subreddit/SubredditSidebar/MultilinkButton/multilinkbutton.js';
import {useMultiLinkButton} from '../../../pages/subreddit/SubredditSidebar/MultilinkButton/multilinkbutton.hooks.js';
import {getIconComponent} from '../../../generic components/iconsmap.js';

jest.mock('../../../generic components/iconsmap.js', () => ({
    getIconComponent: jest.fn(),
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/MultilinkButton/multilinkbutton.hooks.js', () => ({
    useMultiLinkButton: jest.fn(),
}));

jest.mock('../../../pages/subreddit/General/Components/DropdownMenu/dropdownmenu.js', () => ({
    __esModule: true,
    DropdownMenu: () => {
        return <div data-testid="dropdown-menu"/>;
    },
}));

describe('MultiLinkButton', () => {
    beforeEach(() => {
        getIconComponent.mockReturnValue(() => <span data-testid="icon-component"/>);
        useMultiLinkButton.mockReturnValue({
            handleClick: jest.fn(),
            isOptionsVisible: false,
            menuItems: [],
            isSingleOption: true,
        });
    });

    test('renders without crashing', () => {
        render(<MultiLinkButton data={{}} />);
    });

    test('renders correctly when isSingleOption is true', () => {
        const {getByTestId} = render(<MultiLinkButton data={{}} />);
        expect(getByTestId('tag').tagName).toBe('A');
    });

    test('renders correctly when isSingleOption is false', () => {
        useMultiLinkButton.mockReturnValueOnce({
            handleClick: jest.fn(),
            isOptionsVisible: false,
            menuItems: [],
            isSingleOption: false,
        });
        const {getByTestId} = render(<MultiLinkButton data={{}} />);
        expect(getByTestId('tag').tagName).toBe('BUTTON');
    });
});
