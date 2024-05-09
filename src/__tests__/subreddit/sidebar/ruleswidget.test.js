import React from 'react';
import {render} from '@testing-library/react';
import {RulesWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/Rules/ruleswidget.js';
import {useRulesWidget} from '../../../pages/subreddit/SubredditSidebar/Widgets/Rules/ruleswidget.hooks.js';

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Rules/ruleswidget.hooks.js', () => ({
    useRulesWidget: jest.fn(),
}));

jest.mock('../../../pages/subreddit/SubredditSidebar/Widgets/Widget/subredditwidget.js', () => ({
    __esModule: true,
    SubredditWidget: () => {
        return <div data-testid="subreddit-widget"/>;
    },
}));

describe('RulesWidget', () => {
    beforeEach(() => {
        useRulesWidget.mockReturnValue({
            rules: <><div data-testid="rule" key="1">Rule 1</div></>,
        });
    });

    test('renders without crashing', () => {
        render(<RulesWidget ruleList={[]} />);
    });

    // test('renders rules correctly', () => {
    //     const {getByTestId} = render(<RulesWidget ruleList={[{id: '1', name: 'Rule 1'}]} />);
    //     expect(getByTestId('rule')).toBeInTheDocument();
    // });

    test('does not render when no rules', () => {
        useRulesWidget.mockReturnValueOnce({
            rules: null,
        });
        const {queryByTestId} = render(<RulesWidget ruleList={[]} />);
        expect(queryByTestId('subreddit-widget')).not.toBeInTheDocument();
    });
});
