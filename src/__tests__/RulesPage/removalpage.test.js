/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {RemovalPage} from '../../pages/RulesPage/removalpage';
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
        return <div data-testid="removal-list-component"/>;
    },
}));

jest.mock('../../pages/RulesPage/rulespagecontext.js', () => ({
    __esModule: true,
    RulesPageProvider: ({children, name, type}) => {
        return <div name={name} type={type}>{children}</div>;
    },
}));

describe('RemovalPage', () => {
    it('renders without crashing', () => {
        render(<RemovalPage name="test"/>);
    });

    it('renders Header component', () => {
        render(<RemovalPage name="test"/>);
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    });

    it('renders RulesList component', () => {
        render(<RemovalPage name="test"/>);
        expect(screen.getByTestId('removal-list-component')).toBeInTheDocument();
    });

    it('has correct data-testid attributes', () => {
        render(<RemovalPage name="test"/>);
        expect(screen.getByTestId('removal-page')).toBeInTheDocument();
    });

    it('passes correct name prop to RemovalPageProvider', () => {
        const {container} = render(<RemovalPage name="test"/>);
        expect(container.firstChild).toHaveAttribute('name', 'test');
    });

    it('passes correct type prop to RemovalPageProvider', () => {
        const {container} = render(<RemovalPage name="test"/>);
        expect(container.firstChild).toHaveAttribute('type', 'removal-reasons');
    });

    it('requires name prop', () => {
        render(<RemovalPage name="test"/>);
        expect(RemovalPage.propTypes.name).toBe(PropTypes.string.isRequired);
    });

    it('name prop is not null', () => {
        expect(RemovalPage.propTypes.name).not.toBeNull();
    });
});
