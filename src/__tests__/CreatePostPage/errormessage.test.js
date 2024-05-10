/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {ErrorMessage} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/ErrorMessage/errormessage.js';

describe('ErrorMessage', () => {
    const mockErrorMessage = 'Test error message';
    const mockPosition = 'Test position';

    beforeEach(() => {
        render(<ErrorMessage errorMessage={mockErrorMessage} position={mockPosition} />);
    });

    test('renders without crashing', () => {
        const errorMessageDiv = screen.getByTestId('error-message-div');
        expect(errorMessageDiv).toBeInTheDocument();
    });

    // test('renders inner div with correct class', () => {
    //     const errorMessageInnerDiv = screen.getByTestId('error-message-inner-div');
    //     expect(errorMessageInnerDiv).toHaveClass(mockPosition);
    // });

    test('renders error message correctly', () => {
        const errorMessageSpan = screen.getByTestId('error-message-span');
        expect(errorMessageSpan).toHaveTextContent(mockErrorMessage);
    });

    // test('renders with default position when not provided', () => {
    //     render(<ErrorMessage errorMessage={mockErrorMessage} />);
    //     const errorMessageInnerDiv = screen.getByTestId('error-message-inner-div');
    //     expect(errorMessageInnerDiv).toHaveClass('');
    // });
});
