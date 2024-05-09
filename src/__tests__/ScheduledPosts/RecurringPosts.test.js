/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {RecurringPosts} from '../../pages/ScheduledPosts/RecurringPosts';

describe('RecurringPosts', () => {
    beforeEach(() => {
        render(<RecurringPosts />);
    });

    test('renders recurring-posts-div', () => {
        const divElement = screen.getByTestId('recurring-posts-div');
        expect(divElement).toBeInTheDocument();
    });

    test('renders recurring-posts-subdiv', () => {
        const divElement = screen.getByTestId('recurring-posts-subdiv');
        expect(divElement).toBeInTheDocument();
    });

    test('renders recurring-posts-innerdiv', () => {
        const divElement = screen.getByTestId('recurring-posts-innerdiv');
        expect(divElement).toBeInTheDocument();
    });

    test('renders recurring-posts-contentdiv', () => {
        const divElement = screen.getByTestId('recurring-posts-contentdiv');
        expect(divElement).toBeInTheDocument();
    });

    test('renders recurring-posts-text', () => {
        const divElement = screen.getByTestId('recurring-posts-text');
        expect(divElement).toBeInTheDocument();
    });

    test('renders recurring-posts-svg', () => {
        const svgElement = screen.getByTestId('recurring-posts-svg');
        expect(svgElement).toBeInTheDocument();
    });

    test('renders recurring-posts-path', () => {
        const pathElement = screen.getByTestId('recurring-posts-path');
        expect(pathElement).toBeInTheDocument();
    });

    test('renders recurring-posts-link', () => {
        const linkElement = screen.getByTestId('recurring-posts-link');
        expect(linkElement).toBeInTheDocument();
    });
});
