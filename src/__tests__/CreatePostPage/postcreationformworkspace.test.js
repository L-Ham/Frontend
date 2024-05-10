/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostCreationFormWorkspace} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/postcreationformworkspace.js';
import {usePostCreation} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js';
import {PostCreationTextEditor} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/postcreationtexteditor.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js', () => ({
    usePostCreation: jest.fn(),
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/postcreationtexteditor.js', () => ({
    __esModule: true,
    PostCreationTextEditor: () => <div data-testid="post-creation-text-editor" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/ErrorMessage/errormessage.js', () => ({
    __esModule: true,
    ErrorMessage: () => <div data-testid="error-message" />,
}));

describe('PostCreationFormWorkspace', () => {
    let setPostTitle;
    let setErrorMessage;

    beforeEach(() => {
        setPostTitle = jest.fn();
        setErrorMessage = jest.fn();
        usePostCreation.mockReturnValue({
            postTitle: '',
            setPostTitle,
            errorMessage: '',
            setErrorMessage,
        });
    });

    it('renders without crashing', () => {
        render(<PostCreationFormWorkspace />);
    });

    it('renders all data-testid elements', () => {
        const {getByTestId} = render(<PostCreationFormWorkspace />);
        expect(getByTestId('post-creation-form-workspace-div')).toBeInTheDocument();
        expect(getByTestId('post-creation-form-workspace-inner-div')).toBeInTheDocument();
        expect(getByTestId('post-creation-form-workspace-relative-div')).toBeInTheDocument();
        expect(getByTestId('post-creation-form-workspace-textarea')).toBeInTheDocument();
        expect(getByTestId('post-creation-form-workspace-div2')).toBeInTheDocument();
        expect(getByTestId('post-creation-text-editor')).toBeInTheDocument();
    });

    it('calls setPostTitle when textarea changes', () => {
        const {getByTestId} = render(<PostCreationFormWorkspace />);
        fireEvent.change(getByTestId('post-creation-form-workspace-textarea'), {target: {value: 'test'}});
        expect(setPostTitle).toHaveBeenCalledWith('test');
    });

    // it('calls setErrorMessage with correct argument when textarea is blurred and title length is less than 10', () => {
    //     usePostCreation.mockReturnValue({
    //         postTitle: 'short',
    //         setPostTitle,
    //         errorMessage: '',
    //         setErrorMessage,
    //     });
    //     const {getByTestId} = render(<PostCreationFormWorkspace />);
    //     fireEvent.blur(getByTestId('post-creation-form-workspace-textarea'));
    //     expect(setErrorMessage).toHaveBeenCalledWith('This community requires title to be at least 10 characters');
    // });

    // it('calls setErrorMessage with empty string when textarea is blurred and title length is more than 10', () => {
    //     usePostCreation.mockReturnValue({
    //         postTitle: 'long enough title',
    //         setPostTitle,
    //         errorMessage: '',
    //         setErrorMessage,
    //     });
    //     const {getByTestId} = render(<PostCreationFormWorkspace />);
    //     fireEvent.blur(getByTestId('post-creation-form-workspace-textarea'));
    //     expect(setErrorMessage).toHaveBeenCalledWith('');
    // });

    // it('renders ErrorMessage component when there is an error message', () => {
    //     usePostCreation.mockReturnValue({
    //         postTitle: '',
    //         setPostTitle,
    //         errorMessage: 'Error',
    //         setErrorMessage,
    //     });
    //     const {getByTestId} = render(<PostCreationFormWorkspace />);
    //     expect(getByTestId('error-message')).toBeInTheDocument();
    // });

    it('renders PostCreationTextEditor component', () => {
        const {getByTestId} = render(<PostCreationFormWorkspace />);
        expect(getByTestId('post-creation-text-editor')).toBeInTheDocument();
    });
});
