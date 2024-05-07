/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {RulesList} from '../../pages/RulesPage/RulesList/ruleslist.js';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext';
import {Rule} from '../../pages/RulesPage/RulesList/Rule/rule.js';
import {Reason} from '../../pages/RulesPage/RulesList/Reasons/reason.js';

jest.mock('../../pages/RulesPage/rulespagecontext', () => ({
    __esModule: true,
    useRulesPage: jest.fn(),
}));

jest.mock('../../pages/RulesPage/RulesList/Rule/rule.js', () => ({
    __esModule: true,
    Rule: () => <div />,
}));

jest.mock('../../pages/RulesPage/RulesList/Reasons/reason.js', () => ({
    __esModule: true,
    Reason: () => <div/>,
}));

describe('RulesList', () => {
    beforeEach(() => {
        useRulesPage.mockClear();
    });

    test('renders null when rules is null', () => {
        useRulesPage.mockReturnValue({rules: null});
        render(<RulesList />);
        expect(screen.queryByTestId('community-rules')).toBeNull();
    });

    test('renders null when rules is an empty array', () => {
        useRulesPage.mockReturnValue({rules: []});
        render(<RulesList />);
        expect(screen.queryByTestId('community-rules')).toBeNull();
    });

    // test('renders removal reasons when type is "removal-reasons"', () => {
    //     useRulesPage.mockReturnValue({type: 'removal-reasons', removalReasons: [{}]});
    //     render(<RulesList />);
    //     expect(screen.getByTestId('community-reasons')).toBeInTheDocument();
    // });

    test('renders rules when type is not "removal-reasons"', () => {
        useRulesPage.mockReturnValue({type: 'rules', rules: [{}]});
        render(<RulesList />);
        expect(screen.getByTestId('community-rules')).toBeInTheDocument();
    });

    // test('renders the correct number of rules or reasons', () => {
    //     useRulesPage.mockReturnValue({type: 'rules', rules: [{}, {}]});
    //     const {getByTestId}= render(<RulesList />);
    //     const rules = getByTestId('community-rules');
    //     // check on number of children
    //     expect(rules.children).toHaveLength(2);
    // });

    // test('sorts the rules correctly', () => {
    //     useRulesPage.mockReturnValue({
    //         type: 'rules',
    //         rules: [
    //             {_id: 3, name: 'Rule C'},
    //             {_id: 1, name: 'Rule A'},
    //             {_id: 2, name: 'Rule B'},
    //         ],
    //         rulesOrder: [1, 2, 3],
    //     });
    //     render(<RulesList />);

    //     expect(screen.getAllByTestId('community-rule-0')).toBeInTheDocument();
    //     expect(screen.getAllByTestId('community-rule-1')).toBeInTheDocument();
    //     expect(screen.getAllByTestId('community-rule-2')).toBeInTheDocument();
    // });
});
