/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {Header} from '../../pages/RulesPage/Header/header.js';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext.js';

jest.mock('../../pages/RulesPage/Header/Menu/menu.js', () => ({
    __esModule: true,
    Menu: () => <div data-testid="menu-component"/>,
}));

jest.mock('../../pages/RulesPage/Header/Options/options.js', () => ({
    __esModule: true,
    Options: () => <div data-testid="options-component"/>,
}));

jest.mock('../../pages/RulesPage/Header/Notes/rulesnotes.js', () => ({
    __esModule: true,
    RulesNotes: () => <div data-testid="rules-notes-component"/>,
}));

jest.mock('../../pages/RulesPage/Header/Notes/reasonsnotes.js', () => ({
    __esModule: true,
    ReasonsNotes: () => <div data-testid="reasons-notes-component"/>,
}));

jest.mock('../../pages/RulesPage/Forms/AddRule/addrule.js', () => ({
    __esModule: true,
    AddRule: () => <div data-testid="add-rule-component"/>,
}));

jest.mock('../../pages/RulesPage/Forms/AddReason/addreason.js', () => ({
    __esModule: true,
    AddReason: () => <div data-testid="add-reason-component"/>,
}));

jest.mock('../../pages/RulesPage/General/overlaycontainer.js', () => ({
    __esModule: true,
    OverlayContainer: ({children}) => <div>{children}</div>,
}));

jest.mock('../../pages/RulesPage/rulespagecontext.js');

describe('Header component', () => {
    beforeEach(() => {
        useRulesPage.mockReturnValue({
            type: 'rules',
            addRuleView: false,
            ruleToAdd: {},
            addReasonView: false,
            reasonToAdd: {},
        });
    });

    test('renders without crashing', () => {
        render(<Header />);
        expect(screen.getByTestId('header-container')).toBeInTheDocument();
    });

    test('renders Menu component', () => {
        render(<Header />);
        expect(screen.getByTestId('menu-component')).toBeInTheDocument();
    });

    test('renders Options component', () => {
        render(<Header />);
        expect(screen.getByTestId('options-component')).toBeInTheDocument();
    });

    test('renders RulesNotes component when type is rules', () => {
        useRulesPage.mockReturnValue({
            type: 'rules',
            addRuleView: false,
            ruleToAdd: {},
            addReasonView: false,
            reasonToAdd: {},
        });
        render(<Header />);
        expect(screen.getByTestId('rules-notes-component')).toBeInTheDocument();
    });

    test('renders ReasonsNotes component when type is removal-reasons', () => {
        useRulesPage.mockReturnValue({
            type: 'removal-reasons',
            addRuleView: false,
            ruleToAdd: {},
            addReasonView: false,
            reasonToAdd: {},
        });
        render(<Header />);
        expect(screen.getByTestId('reasons-notes-component')).toBeInTheDocument();
    });

    test('renders AddRule component when addRuleView is true', () => {
        useRulesPage.mockReturnValue({
            type: 'rules',
            addRuleView: true,
            ruleToAdd: {},
            addReasonView: false,
            reasonToAdd: {},
        });
        render(<Header />);
        expect(screen.getByTestId('add-rule-component')).toBeInTheDocument();
    });

    test('renders AddReason component when addReasonView is true', () => {
        useRulesPage.mockReturnValue({
            type: 'removal-reasons',
            addRuleView: false,
            ruleToAdd: {},
            addReasonView: true,
            reasonToAdd: {},
        });
        render(<Header />);
        expect(screen.getByTestId('add-reason-component')).toBeInTheDocument();
    });
});
