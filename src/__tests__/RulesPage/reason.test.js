/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {Reason} from '../../pages/RulesPage/RulesList/Reasons/reason';
import {getIconComponent} from '../../generic components/iconsmap';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext';

jest.mock('../../generic components/iconsmap');

jest.mock('../../pages/RulesPage/rulespagecontext', () => ({
    __esModule: true,
    useRulesPage: jest.fn(),
}));

describe('Reason component', () => {
    beforeEach(() => {
        const nsfwIcon = () => <svg />;
        getIconComponent.mockReturnValue(nsfwIcon);
        useRulesPage.mockReturnValue({
            setAddReasonView: jest.fn(),
            setReasonToAdd: jest.fn(),
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    for (let i = 0; i < 100; i++) {
        test(`renders without crashing ${i}`, () => {
            const {getByTestId} = render(<Reason reason={{title: `title ${i}`}} idx={i} />);
            expect(getByTestId('reason-container')).toBeInTheDocument();
            expect(getByTestId('reason-index')).toHaveTextContent(i + 1);
            expect(getByTestId('reason-title')).toHaveTextContent(`title ${i}`);
            expect(getByTestId('reason-actions')).toBeInTheDocument();
            fireEvent.click(getByTestId('reason-edit-button'));
            expect(useRulesPage().setReasonToAdd).toHaveBeenCalled();
            expect(useRulesPage().setAddReasonView).toHaveBeenCalled();
        });
    }
});
