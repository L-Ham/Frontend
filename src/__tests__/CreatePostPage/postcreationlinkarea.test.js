/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostCreationLinkArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationLinkArea/postcreationlinkarea.js';
import {usePostCreationLinkArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationLinkArea/postcreationlinkarea.hooks.js';
import {ErrorMessage} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/ErrorMessage/errormessage.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationLinkArea/postcreationlinkarea.hooks.js');
jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/ErrorMessage/errormessage.js', () => ({
    __esModule: true,
    ErrorMessage: ({errorMessage, setErrorMessage}) => (
        <div data-testid="error-message" onClick={() => setErrorMessage(errorMessage)}>
            {errorMessage}
        </div>
    ),
}));

describe('PostCreationLinkArea', () => {
    // Now write the 20 tests as per the plan
    // Test if the component renders without crashing
    test('renders without crashing', () => {
        // Mock the hook's return value for all tests
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        render(<PostCreationLinkArea />);
    });

    // Test if the post-creation-link-area-div is rendered
    test('renders post-creation-link-area-div', () => {
        // Mock the hook's return value for all tests
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaDiv = getByTestId('post-creation-link-area-div');
        expect(linkAreaDiv).toBeInTheDocument();
    });

    // Test if the post-creation-link-area-textarea is rendered
    test('renders post-creation-link-area-textarea', () => {
        // Mock the hook's return value for all tests
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaTextarea = getByTestId('post-creation-link-area-textarea');
        expect(linkAreaTextarea).toBeInTheDocument();
    });

    // Test if the ErrorMessage component is rendered when there is an error message
    test('renders ErrorMessage component when there is an error message', () => {
        // Mock the hook's return value for all tests
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const errorMessage = getByTestId('error-message');
        expect(errorMessage).toBeInTheDocument();
    });

    // Test if the ErrorMessage component is not rendered when there is no error message
    test('does not render ErrorMessage component when there is no error message', () => {
        // Mock the hook's return value for all tests
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: '',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {queryByTestId} = render(<PostCreationLinkArea />);
        const errorMessage = queryByTestId('error-message');
        expect(errorMessage).toBeNull();
    });

    // Test if the handleBlur function is called when the post-creation-link-area-div is blurred
    test('calls handleBlur function when post-creation-link-area-div is blurred', () => {
        // Mock the hook's return value for all tests
        const handleBlurMock = jest.fn();
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: handleBlurMock,
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaDiv = getByTestId('post-creation-link-area-div');
        fireEvent.blur(linkAreaDiv);
        expect(handleBlurMock).toHaveBeenCalled();
    });

    // Test if the handleChange function is called when the post-creation-link-area-textarea value changes
    test('calls handleChange function when post-creation-link-area-textarea value changes', () => {
        // Mock the hook's return value for all tests
        const handleChangeMock = jest.fn();
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: handleChangeMock,
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaTextarea = getByTestId('post-creation-link-area-textarea');
        fireEvent.change(linkAreaTextarea, {target: {value: 'newLink'}});
        expect(handleChangeMock).toHaveBeenCalled();
    });

    // Test if the handleBlurTextarea function is called when the post-creation-link-area-textarea is blurred
    test('calls handleBlurTextarea function when post-creation-link-area-textarea is blurred', () => {
        // Mock the hook's return value for all tests
        const handleBlurTextareaMock = jest.fn();
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: handleBlurTextareaMock,
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaTextarea = getByTestId('post-creation-link-area-textarea');
        fireEvent.blur(linkAreaTextarea);
        expect(handleBlurTextareaMock).toHaveBeenCalled();
    });

    // Test if the handleFocus function is called when the post-creation-link-area-textarea is focused
    test('calls handleFocus function when post-creation-link-area-textarea is focused', () => {
        // Mock the hook's return value for all tests
        const handleFocusMock = jest.fn();
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: handleFocusMock,
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaTextarea = getByTestId('post-creation-link-area-textarea');
        fireEvent.focus(linkAreaTextarea);
        expect(handleFocusMock).toHaveBeenCalled();
    });

    // Test if the setErrorMessage function is called when the ErrorMessage component is rendered
    test('calls setErrorMessage function when ErrorMessage component is rendered', () => {
        // Mock the hook's return value for all tests
        const setErrorMessageMock = jest.fn();
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: setErrorMessageMock,
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const errorMessage = getByTestId('error-message');
        fireEvent.click(errorMessage);
        expect(setErrorMessageMock).toHaveBeenCalled();
    });

    // Test if the borderColor is applied to the post-creation-link-area-textarea
    test('applies borderColor to post-creation-link-area-textarea', () => {
        // Mock the hook's return value for all tests
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaTextarea = getByTestId('post-creation-link-area-textarea');
        expect(linkAreaTextarea).toHaveStyle('borderColor: testBorderColor');
    });

    // Test if the !border-[red] class is applied to the post-creation-link-area-textarea when there is an error message
    test('applies !border-[red] class to post-creation-link-area-textarea when there is an error message', () => {
        // Mock the hook's return value for all tests
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: 'testErrorMessage',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaTextarea = getByTestId('post-creation-link-area-textarea');
        expect(linkAreaTextarea).toHaveClass('!border-[red]');
    });

    // Test if the !border-[red] class is not applied to the post-creation-link-area-textarea when there is no error message
    test('does not apply !border-[red] class to post-creation-link-area-textarea when there is no error message', () => {
        // Mock the hook's return value for all tests
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: '',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaTextarea = getByTestId('post-creation-link-area-textarea');
        expect(linkAreaTextarea).not.toHaveClass('!border-[red]');
    });

    // Test if the link value is displayed in the post-creation-link-area-textarea
    test('displays link value in post-creation-link-area-textarea', () => {
        // Mock the hook's return value for all tests
        const linkValue = 'testLink';
        usePostCreationLinkArea.mockReturnValue({
            link: linkValue,
            errorMessage: '',
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const linkAreaTextarea = getByTestId('post-creation-link-area-textarea');
        expect(linkAreaTextarea.value).toBe(linkValue);
    });

    // Test if the errorMessage value is displayed in the ErrorMessage component
    test('displays errorMessage value in ErrorMessage component', () => {
        // Mock the hook's return value for all tests
        const errorMessageValue = 'testErrorMessage';
        usePostCreationLinkArea.mockReturnValue({
            link: 'testLink',
            errorMessage: errorMessageValue,
            setErrorMessage: jest.fn(),
            borderColor: 'testBorderColor',
            handleFocus: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleBlurTextarea: jest.fn(),
        });
        const {getByTestId} = render(<PostCreationLinkArea />);
        const errorMessage = getByTestId('error-message');
        expect(errorMessage.textContent).toBe(errorMessageValue);
    });
});
