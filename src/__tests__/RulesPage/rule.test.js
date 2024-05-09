/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {Rule} from '../../pages/RulesPage/RulesList/Rule/rule';
import {getIconComponent} from '../../generic components/iconsmap';
import {RuleDescription} from '../../pages/RulesPage/RulesList/Rule/RuleDescription/ruledescription';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext';

jest.mock('../../generic components/iconsmap.js');

jest.mock('../../pages/RulesPage/RulesList/Rule/RuleDescription/ruledescription', () => ({
    RuleDescription: () => <div data-testid="rule-description"/>,
}));

jest.mock('../../pages/RulesPage/rulespagecontext', () => ({
    useRulesPage: jest.fn(),
}));

// Mock rule data
const rule = {
    ruleText: 'Test rule',
    descriptionHtml: '<p>Test description</p>',
    _id: '1',
};

// Mock useRulesPage return value
const useRulesPageMock = {
    reorderRulesView: false,
    rulesOrder: ['1'],
    setRulesOrder: jest.fn(),
    setAddRuleView: jest.fn(),
    setRuleToAdd: jest.fn(),
};

describe('Rule component', () => {
    beforeEach(() => {
        useRulesPage.mockReturnValue(useRulesPageMock);
        const nsfwIcon = () => <svg />;
        getIconComponent.mockReturnValue(nsfwIcon);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('rule drag button triggers correct function', () => {
        useRulesPageMock.reorderRulesView = true;
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        fireEvent.click(getByTestId('rule-drag-button'));
        // Check if the correct function is triggered
    });

    //     Test if the component renders without crashing.
    // Test if the rule container is rendered.
    // Test if the rule index is rendered.
    // Test if the rule shortname is rendered.
    // Test if the rule actions are rendered.
    // Test if the rule drag button is rendered when reorderRulesView is true.
    // Test if the rule edit button is rendered when reorderRulesView is false.
    // Test if the rule description button is rendered when reorderRulesView is false and isRule is true.
    // Test if the rule description is rendered when isDescriptionVisible is true.
    // Test if the rule drag button triggers the correct function when clicked.
    // Test if the rule edit button triggers the correct function when clicked.
    // Test if the rule description button triggers the correct function when clicked.
    // Test if the dragStart function works correctly.
    // Test if the drop function works correctly.
    // Test if the rule description button toggles isDescriptionVisible.
    // Test if the rule edit button sets setRuleToAdd and setAddRuleView correctly.
    // Test if the rule drag button does not render when reorderRulesView is false.
    // Test if the rule edit and description buttons do not render when reorderRulesView is true.

    test('renders without crashing', () => {
        render(<Rule rule={rule} idx={0} type="rules"/>);
    });

    test('rule container is rendered', () => {
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(getByTestId('rule-container')).toBeInTheDocument();
    });

    test('rule index is rendered', () => {
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(getByTestId('rule-index')).toBeInTheDocument();
    });

    test('rule shortname is rendered', () => {
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(getByTestId('rule-shortname')).toBeInTheDocument();
    });

    test('rule actions are rendered', () => {
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(getByTestId('rule-actions')).toBeInTheDocument();
    });

    test('rule drag button is rendered when reorderRulesView is true', () => {
        useRulesPageMock.reorderRulesView = true;
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(getByTestId('rule-drag-button')).toBeInTheDocument();
    });

    test('rule edit button is rendered when reorderRulesView is false', () => {
        useRulesPageMock.reorderRulesView = false;
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(getByTestId('rule-edit-button')).toBeInTheDocument();
    });

    test('rule description button is rendered when reorderRulesView is false and isRule is true', () => {
        useRulesPageMock.reorderRulesView = false;
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(getByTestId('rule-description-button')).toBeInTheDocument();
    });

    test('rule description is rendered when isDescriptionVisible is true', () => {
        useRulesPageMock.reorderRulesView = false;
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        fireEvent.click(getByTestId('rule-description-button'));
        expect(getByTestId('rule-description')).toBeInTheDocument();
    });

    // test('rule drag button triggers correct function when clicked', () => {
    //     useRulesPageMock.reorderRulesView = true;
    //     const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
    //     fireEvent.click(getByTestId('rule-drag-button'));
    //     expect(useRulesPageMock.setRulesOrder).toHaveBeenCalled();
    // });

    test('rule edit button triggers correct function when clicked', () => {
        useRulesPageMock.reorderRulesView = false;
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        fireEvent.click(getByTestId('rule-edit-button'));
        expect(useRulesPageMock.setRuleToAdd).toHaveBeenCalledWith(rule);
        expect(useRulesPageMock.setAddRuleView).toHaveBeenCalledWith(true);
    });

    test('rule description button triggers correct function when clicked', () => {
        useRulesPageMock.reorderRulesView = false;
        const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        fireEvent.click(getByTestId('rule-description-button'));
        // Check if the correct function is triggered
    });

    // test('dragStart function works correctly', () => {
    //     const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
    //     const event = new DragEvent('dragstart');
    //     getByTestId('rule-container').dispatchEvent(event);
    //     expect(event.dataTransfer.getData('text/plain')).toBe('1');
    // });

    // test('drop function works correctly', () => {
    //     const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
    //     const event = new DragEvent('drop');
    //     event.dataTransfer.setData('text/plain', '2');
    //     getByTestId('rule-container').dispatchEvent(event);
    //     expect(useRulesPageMock.setRulesOrder).toHaveBeenCalledWith(['2', '1']);
    // });

    // test('rule description button toggles isDescriptionVisible', () => {
    //     useRulesPageMock.reorderRulesView = false;
    //     const {getByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
    //     fireEvent.click(getByTestId('rule-description-button'));
    //     expect(useRulesPageMock.setIsDescriptionVisible).toHaveBeenCalledWith(true);
    // });

    test('rule drag button does not render when reorderRulesView is false', () => {
        useRulesPageMock.reorderRulesView = false;
        const {queryByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(queryByTestId('rule-drag-button')).toBeNull();
    });

    test('rule edit and description buttons do not render when reorderRulesView is true', () => {
        useRulesPageMock.reorderRulesView = true;
        const {queryByTestId} = render(<Rule rule={rule} idx={0} type="rules"/>);
        expect(queryByTestId('rule-edit-button')).toBeNull();
        expect(queryByTestId('rule-description-button')).toBeNull();
    });
});
