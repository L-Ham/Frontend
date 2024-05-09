/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {Header} from '../../pages/ScheduledPosts/Header';

describe('Header', () => {
    let windowSpy;

    beforeEach(() => {
        windowSpy = jest.spyOn(window, 'open').mockImplementation(() => {});
    });

    afterEach(() => {
        windowSpy.mockRestore();
    });

    test('renders without crashing', () => {
        render(<Header />);
    });

    test('renders header div', () => {
        const {getByTestId} = render(<Header />);
        expect(getByTestId('header-div')).toBeInTheDocument();
    });

    test('renders header link', () => {
        const {getByTestId} = render(<Header />);
        expect(getByTestId('header-link')).toBeInTheDocument();
    });

    test('renders header button', () => {
        const {getByTestId} = render(<Header />);
        expect(getByTestId('header-button')).toBeInTheDocument();
    });

    test('renders button with correct text', () => {
        const {getByTestId} = render(<Header />);
        expect(getByTestId('header-button')).toHaveTextContent('Schedule Post');
    });

    test('calls window.open with correct arguments when button is clicked', () => {
        const {getByTestId} = render(<Header />);
        fireEvent.click(getByTestId('header-button'));
        expect(windowSpy).toHaveBeenCalledWith('/submit', '_blank');
    });
});
