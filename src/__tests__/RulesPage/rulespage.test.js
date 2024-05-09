/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {RulesPage} from '../../pages/RulesPage/rulespage';
import PropTypes from 'prop-types';

jest.mock('../../pages/RulesPage/Header/header.js', () => ({
    __esModule: true,
    Header: () => {
        return <div data-testid="header-component"/>;
    },
}));

jest.mock('../../pages/RulesPage/RulesList/ruleslist.js', () => ({
    __esModule: true,
    RulesList: () => {
        return <div data-testid="rules-list-component"/>;
    },
}));

jest.mock('../../pages/RulesPage/rulespagecontext.js', () => ({
    __esModule: true,
    RulesPageProvider: ({children, name, type}) => {
        return <div name={name} type={type}>{children}</div>;
    },
}));

describe('RulesPage', () => {
    it('renders without crashing', () => {
        render(<RulesPage name="test"/>);
    });

    it('renders Header component', () => {
        render(<RulesPage name="test"/>);
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    });

    it('renders RulesList component', () => {
        render(<RulesPage name="test"/>);
        expect(screen.getByTestId('rules-list-component')).toBeInTheDocument();
    });

    it('has correct data-testid attributes', () => {
        render(<RulesPage name="test"/>);
        expect(screen.getByTestId('rules-page')).toBeInTheDocument();
    });

    it('passes correct name prop to RulesPageProvider', () => {
        const {container} = render(<RulesPage name="test"/>);
        expect(container.firstChild).toHaveAttribute('name', 'test');
    });

    it('passes correct type prop to RulesPageProvider', () => {
        const {container} = render(<RulesPage name="test"/>);
        expect(container.firstChild).toHaveAttribute('type', 'rules');
    });

    it('requires name prop', () => {
        render(<RulesPage name="test"/>);
        expect(RulesPage.propTypes.name).toBe(PropTypes.string.isRequired);
    });

    it('name prop is not null', () => {
        expect(RulesPage.propTypes.name).not.toBeNull();
    });
});
