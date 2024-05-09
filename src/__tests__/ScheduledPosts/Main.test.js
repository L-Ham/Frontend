/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {Main} from '../../pages/ScheduledPosts/Main';

jest.mock('../../pages/ScheduledPosts/MainContainer', () => ({
    __esModule: true,
    MainContainer: () => <div data-testid="main-container" />,
}));

describe('Main', () => {
    test('renders correctly when about prop is provided', () => {
        render(<Main about={{key: "value1"}} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders null when about prop is not provided', () => {
        const {container} = render(<Main />);
        expect(container.firstChild).toBeNull();
    });

    test('contains the correct data-testids', () => {
        render(<Main about={{key: "value1"}} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders null when about prop is an empty string', () => {
        const {container} = render(<Main about={{}} />);
        expect(container.firstChild).toBeNull();
    });

});
