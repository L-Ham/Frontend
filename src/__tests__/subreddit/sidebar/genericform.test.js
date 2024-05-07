import {render, fireEvent, screen} from '@testing-library/react';
import {GenericForm} from '../../../pages/subreddit/SubredditSidebar/Forms/genericform.js';

// Mock dependencies
jest.mock('../../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

describe('GenericForm', () => {
    const mockOnSubmit = jest.fn();
    const mockOnClose = jest.fn();
    const mockOnDelete = jest.fn();

    const inputConfigs = [
        {type: 'text', name: 'test', label: 'Test', defaultValue: 'default', required: true},
    ];

    beforeEach(() => {
        render(<GenericForm inputConfigs={inputConfigs} onSubmit={mockOnSubmit} onClose={mockOnClose} onDelete={mockOnDelete} isDeleteDisabled={false} />);
    });

    test('renders without crashing', () => {
        expect(screen.getByTestId('generic-form')).toBeInTheDocument();
    });

    // test('submits form correctly', () => {
    //     fireEvent.click(screen.getByTestId('submit-button'));
    //     expect(mockOnSubmit).toHaveBeenCalled();
    //     expect(mockOnClose).toHaveBeenCalled();
    // });

    test('closes form correctly', () => {
        fireEvent.click(screen.getByText('X'));
        expect(mockOnClose).toHaveBeenCalled();
    });

    test('deletes form correctly', () => {
        fireEvent.click(screen.getByText('Delete'));
        expect(mockOnDelete).toHaveBeenCalled();
        expect(mockOnClose).toHaveBeenCalled();
    });

    test('renders form fields correctly', () => {
        expect(screen.getByLabelText('Test:')).toBeInTheDocument();
    });

    test('updates form fields correctly', () => {
        fireEvent.change(screen.getByLabelText('Test:'), {target: {value: 'new value'}});
        expect(screen.getByLabelText('Test:').value).toBe('new value');
    });
});
