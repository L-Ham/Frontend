import {render, screen} from '@testing-library/react';
import {NumberFormatter} from '../../../pages/subreddit/General/Components/numberformatter.js';
import {formatNumber} from '../../../generic components/utils.js';

jest.mock('../../../generic components/utils.js', () => ({
    formatNumber: jest.fn(),
}));

describe('NumberFormatter', () => {
    beforeEach(() => {
        formatNumber.mockClear();
    });

    test('renders without crashing', () => {
        render(<NumberFormatter number={1234} />);
        expect(screen.getByTestId('number-formatter')).toBeInTheDocument();
    });

    test.each([
        [1234, false, false, '1234'],
        [1234, true, false, '1.23K'],
        [1234, true, true, '1.23K'],
        [1234567, true, true, '1.23M'],
        [1234567890, true, true, '1.23B'],
        [1234567890123, true, true, '1.23T'],
    ])('renders correct number', (number, isFormattedNumber, isCap, expected) => {
        formatNumber.mockReturnValue(expected);
        render(<NumberFormatter number={number} isFormattedNumber={isFormattedNumber} isCap={isCap} />);
        expect(screen.getByText(expected)).toBeInTheDocument();
    });
});
