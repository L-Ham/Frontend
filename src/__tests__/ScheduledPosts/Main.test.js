/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {Main} from '../../pages/ScheduledPosts/Main';

jest.mock('../../pages/ScheduledPosts/MainContainer', () => ({
    __esModule: true,
    MainContainer: () => <div data-testid="main-container" />,
}));

describe('Main', () => {
    test('renders correctly when about prop is provided', () => {
        render(<Main about="Test About" />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders null when about prop is not provided', () => {
        const {container} = render(<Main />);
        expect(container.firstChild).toBeNull();
    });

    test('contains the correct data-testids', () => {
        render(<Main about="Test About" />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders null when about prop is an empty string', () => {
        const {container} = render(<Main about="" />);
        expect(container.firstChild).toBeNull();
    });

    test('renders correctly when about prop is a number', () => {
        render(<Main about={123} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is an object', () => {
        render(<Main about={{name: 'Test About'}} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is an array', () => {
        render(<Main about={['Test About']} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is null', () => {
        const {container} = render(<Main about={null} />);
        expect(container.firstChild).toBeNull();
    });

    test('renders correctly when about prop is null', () => {
        const {container} = render(<Main about={undefined} />);
        expect(container.firstChild).toBeNull();
    });

    test('renders correctly when about prop is a boolean', () => {
        render(<Main about={true} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a function', () => {
        render(<Main about={() => {}} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a symbol', () => {
        render(<Main about={Symbol('Test About')} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a date', () => {
        render(<Main about={new Date()} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a regular expression', () => {
        render(<Main about={/test/} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a promise', () => {
        render(<Main about={Promise.resolve('Test About')} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a Map', () => {
        render(<Main about={new Map()} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a Set', () => {
        render(<Main about={new Set()} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a BigInt', () => {
        render(<Main about={BigInt(123)} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is NaN', () => {
        const {container} = render(<Main about={NaN} />);
        expect(container.firstChild).toBeNull();
    });

    test('renders correctly when about prop is a function constructor', () => {
        render(<Main about={new Function()} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a generator function', () => {
        render(<Main about={function* () {}} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a class', () => {
        render(<Main about={class Test {}} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });

    test('renders correctly when about prop is a proxy', () => {
        render(<Main about={new Proxy({}, {})} />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
        expect(screen.getByTestId('main-subdiv')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    });
});
