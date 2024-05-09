/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {RuleDescription} from '../../pages/RulesPage/RulesList/Rule/RuleDescription/ruledescription.js';
import {replaceHtmlEntities} from '../../generic components/utils.js';
import parse from 'html-react-parser';

jest.mock('../../generic components/utils.js', () => ({
    __esModule: true,
    replaceHtmlEntities: jest.fn(),
}));

jest.mock('html-react-parser', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('RuleDescription', () => {
    const mockRule = {
        fullDescription: 'Test full description',
        appliesTo: 'Test applies to',
        reportReason: 'Test report reason',
        descriptionHtml: 'Test description html',
    };

    beforeEach(() => {
        replaceHtmlEntities.mockReturnValue(mockRule.descriptionHtml);
        parse.mockReturnValue(mockRule.descriptionHtml);
        render(<RuleDescription rule={mockRule} />);
    });

    test('renders without crashing', () => {
        expect(screen.getByTestId('rule-description-container')).toBeInTheDocument();
    });

    test('renders report reason', () => {
        expect(screen.getByTestId('report-reason-value')).toHaveTextContent(mockRule.reportReason);
    });

    test('renders applies to', () => {
        expect(screen.getByTestId('applies-to-value')).toHaveTextContent(mockRule.appliesTo);
    });

    test('renders created section', () => {
        expect(screen.getByTestId('created-section')).toBeInTheDocument();
    });

    test('renders full description', () => {
        expect(screen.getByTestId('description-value')).toHaveTextContent(mockRule.descriptionHtml);
    });

    test('calls replaceHtmlEntities with correct data', () => {
        expect(replaceHtmlEntities).toHaveBeenCalledWith(mockRule.descriptionHtml);
    });

    test('calls parse with correct data', () => {
        expect(parse).toHaveBeenCalledWith(mockRule.descriptionHtml);
    });
});
