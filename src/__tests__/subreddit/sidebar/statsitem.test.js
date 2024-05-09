import {render, screen} from '@testing-library/react';
import {StatsItem} from '../../../pages/subreddit/SubredditSidebar/Widgets/CommunityDetails/StatsItem/statsitem.js';
import {NumberFormatter} from '../../../pages/subreddit/General/Components/numberformatter.js';

jest.mock('../../../pages/subreddit/General/Components/numberformatter.js', () => ({
    __esModule: true,
    NumberFormatter: () => <div data-testid="number-formatter"/>,
}));


describe('StatsItem with isCap prop', () => {
    const mockProps = {
        count: 12345,
        label: 'Test Label',
        isCap: true,
    };

    it('should not apply uppercase transformation when isCap is false', () => {
        const props = {...mockProps, isCap: false};
        const {getByTestId} = render(<StatsItem {...props} />);
        const labelSpan = getByTestId('label-span');
        expect(labelSpan).not.toHaveStyle('text-transform: uppercase');
    });
});

describe('StatsItem PropTypes', () => {
    const mockProps = {
        count: 12345,
        label: 'Test Label',
        isCap: true,
    };

    const originalError = console.error;
    beforeEach(() => {
        console.error = jest.fn();
    });
    afterEach(() => {
        console.error = originalError;
    });

    it('should not log errors with correct props', () => {
        render(<StatsItem {...mockProps} />);
        expect(console.error).not.toHaveBeenCalled();
    });

    it('should log errors with incorrect count type', () => {
        const props = {...mockProps, count: 'not-a-number'};
        render(<StatsItem {...props} />);
        expect(console.error).toHaveBeenCalled();
    });
});

describe('Dynamic Prop Changes', () => {
    const mockProps = {
        count: 12345,
        label: 'Test Label',
        isCap: true,
    };

    it('updates label when prop changes', () => {
        const {getByTestId, rerender} = render(<StatsItem {...mockProps} />);
        expect(getByTestId('label-span')).toHaveTextContent('Test Label');

        const newProps = {...mockProps, label: 'Updated Label'};
        rerender(<StatsItem {...newProps} />);
        expect(getByTestId('label-span')).toHaveTextContent('Updated Label');
    });
});
