/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {RemovalReasons} from '../../pages/RulesPage/Header/RemovalReasons/removalreasons';


describe('RemovalReasons', () => {
    test('renders without crashing', () => {
        render(<RemovalReasons />);
    });

    test('has "remov-reasons" data-testid', () => {
        render(<RemovalReasons />);
        const element = screen.getByTestId('remov-reasons');
        expect(element).toBeInTheDocument();
    });
});
