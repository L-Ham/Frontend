import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Rule} from '../../../pages/subreddit/SubredditSidebar/Widgets/Rules/Rule/rule.js';
import {useRule} from '../../../pages/subreddit/SubredditSidebar/Widgets/Rules/Rule/rule.hooks.js';

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Rules/Rule/rule.hooks.js');

describe('Rule component', () => {
    it('renders without crashing', () => {
        useRule.mockReturnValue({
            isDescriptionHidden: false,
            description: 'Test description',
            shortName: 'Test short name',
            CaretDownIconOutline: () => <div data-testid="caret-icon"/>,
            toggleDescriptionVisibility: jest.fn(),
        });

        const {getByTestId} = render(<Rule data={{}} display="test display" idx={1} />);

        expect(getByTestId('rule-1')).toBeInTheDocument();
        expect(getByTestId('inner-container')).toBeInTheDocument();
        expect(getByTestId('font-container')).toBeInTheDocument();
        expect(getByTestId('list-item')).toBeInTheDocument();
        expect(getByTestId('list-item-content')).toBeInTheDocument();
        expect(getByTestId('item-container')).toBeInTheDocument();
        expect(getByTestId('priority-container')).toBeInTheDocument();
        expect(getByTestId('priority-text')).toBeInTheDocument();
        expect(getByTestId('shortname-container')).toBeInTheDocument();
        expect(getByTestId('shortname-span')).toBeInTheDocument();
        expect(getByTestId('shortname-header')).toBeInTheDocument();
        expect(getByTestId('caret-container')).toBeInTheDocument();
        expect(getByTestId('caret-span')).toBeInTheDocument();
        expect(getByTestId('caret-icon')).toBeInTheDocument();
        expect(getByTestId('description-div')).toBeInTheDocument();
    });

    it('calls toggleDescriptionVisibility on click', () => {
        const mockToggleDescriptionVisibility = jest.fn();

        useRule.mockReturnValue({
            isDescriptionHidden: false,
            description: 'Test description',
            shortName: 'Test short name',
            CaretDownIconOutline: () => <div data-testid="caret-icon"/>,
            toggleDescriptionVisibility: mockToggleDescriptionVisibility,
        });

        const {getByTestId} = render(<Rule data={{}} display="test display" idx={1} />);

        fireEvent.click(getByTestId('rule-1'));

        expect(mockToggleDescriptionVisibility).toHaveBeenCalled();
    });
});
