/* eslint-disable */
import {render, fireEvent, screen} from '@testing-library/react';
import {Options} from '../../pages/RulesPage/Header/Options/options.js';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext.js';
import {useNotifications} from '../../generic components/Notifications/notificationsContext.js';

jest.mock('../../pages/RulesPage/rulespagecontext', () => ({
    useRulesPage: jest.fn(),
}));

jest.mock('../../generic components/Notifications/notificationsContext', () => ({
    useNotifications: jest.fn(),
}));

describe('Options', () => {
    beforeEach(() => {
        useRulesPage.mockReturnValue({
            type: 'rules',
            setReorderRulesView: jest.fn(),
            reorderRulesView: false,
            originalRulesOrder: [],
            setRulesOrder: jest.fn(),
            about: {communityDetails: {subredditId: '123'}},
            rulesOrder: [],
            setAddRuleView: jest.fn(),
            setRuleToAdd: jest.fn(),
            setAddReasonView: jest.fn(),
            setReasonToAdd: jest.fn(),
        });

        useNotifications.mockReturnValue({
            addNotification: jest.fn(),
        });
    });

    it('renders without crashing', () => {
        render(<Options />);
    });

    it('renders correct elements when type is rules', () => {
        useRulesPage.mockReturnValue({
            type: 'rules',
            setReorderRulesView: jest.fn(),
            reorderRulesView: false,
            originalRulesOrder: [],
            setRulesOrder: jest.fn(),
            about: {communityDetails: {subredditId: '123'}},
            rulesOrder: [],
            setAddRuleView: jest.fn(),
            setRuleToAdd: jest.fn(),
            setAddReasonView: jest.fn(),
            setReasonToAdd: jest.fn(),
        });

        const {getByTestId} = render(<Options />);
        expect(screen.getByTestId('options-container')).toBeInTheDocument();
        expect(screen.getByTestId('reorder-rules-button')).toBeInTheDocument();
        expect(screen.getByTestId('add-rule-button')).toBeInTheDocument();
    });

    it('renders correct elements when type is removal reasons', () => {
        useRulesPage.mockReturnValue({
            type: 'removal-reasons',
            setReorderRulesView: jest.fn(),
            reorderRulesView: false,
            originalRulesOrder: [],
            setRulesOrder: jest.fn(),
            about: {communityDetails: {subredditId: '123'}},
            rulesOrder: [],
            setAddRuleView: jest.fn(),
            setRuleToAdd: jest.fn(),
            setAddReasonView: jest.fn(),
            setReasonToAdd: jest.fn(),
        });

        const {getByTestId} = render(<Options />);
        expect(screen.getByTestId('options-container')).toBeInTheDocument();
        expect(screen.getByTestId('add-removal-reason-button')).toBeInTheDocument();
    });
});
