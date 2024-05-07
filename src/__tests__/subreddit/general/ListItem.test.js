import {render, fireEvent} from '@testing-library/react';
import {ListItem} from '../../../pages/subreddit/CommunityAppearance/components/listitem';
import {SvgIcon} from '../../../pages/subreddit/CommunityAppearance/components/svgicon';

jest.mock('../../../pages/subreddit/CommunityAppearance/components/svgicon', () => ({
    __esModule: true,
    SvgIcon: () => {
        return <div data-testid="svg-icon"/>;
    },
}));

describe('ListItem', () => {
    const mockOnClick = jest.fn();

    beforeEach(() => {
        mockOnClick.mockClear();
    });

    it('renders without crashing', () => {
        render(<ListItem title="Test Title" onClick={mockOnClick} />);
    });

    it('renders the correct elements', () => {
        const {getByTestId} = render(<ListItem title="Test Title" onClick={mockOnClick} />);
        expect(getByTestId('list-item')).toBeInTheDocument();
        expect(getByTestId('list-item-div')).toBeInTheDocument();
        expect(getByTestId('list-item-span-1')).toBeInTheDocument();
        expect(getByTestId('list-item-inner-span-1')).toBeInTheDocument();
        expect(getByTestId('list-item-title')).toBeInTheDocument();
        expect(getByTestId('list-item-subtitle')).toBeInTheDocument();
        expect(getByTestId('list-item-span-2')).toBeInTheDocument();
        expect(getByTestId('svg-icon')).toBeInTheDocument();
    });

    it('calls onClick prop when clicked', () => {
        const {getByTestId} = render(<ListItem title="Test Title" onClick={mockOnClick} />);
        fireEvent.click(getByTestId('list-item-div'));
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('renders the title prop correctly', () => {
        const {getByTestId} = render(<ListItem title="Test Title" onClick={mockOnClick} />);
        expect(getByTestId('list-item-title').textContent).toBe('Test Title');
    });

    it('renders the SvgIcon component correctly', () => {
        const {getByTestId} = render(<ListItem title="Test Title" onClick={mockOnClick} />);
        expect(getByTestId('svg-icon')).toBeInTheDocument();
    });
});
