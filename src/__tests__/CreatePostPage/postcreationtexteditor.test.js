/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostCreationTextEditor} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/postcreationtexteditor.js';
import {usePostCreation} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js';
import {ErrorMessage} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/ErrorMessage/errormessage.js';
import {PostCreationTextArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationTextArea/postcreationtextarea.js';
import {FilesUploadArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/filesuploadarea.js';
import {PostCreationLinkArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationLinkArea/postcreationlinkarea.js';
import {PostCreationPollArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/postcreationpollarea.js';
import {Toolbar} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/toolbar.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/ErrorMessage/errormessage.js', () => ({
    __esModule: true,
    ErrorMessage: () => <div data-testid="error-message" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationTextArea/postcreationtextarea.js', () => ({
    __esModule: true,
    PostCreationTextArea: () => <div data-testid="post-creation-text-area" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/filesuploadarea.js', () => ({
    __esModule: true,
    FilesUploadArea: () => <div data-testid="files-upload-area" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationLinkArea/postcreationlinkarea.js', () => ({
    __esModule: true,
    PostCreationLinkArea: () => <div data-testid="post-creation-link-area" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/postcreationpollarea.js', () => ({
    __esModule: true,
    PostCreationPollArea: () => <div data-testid="post-creation-poll-area" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/toolbar.js', () => ({
    __esModule: true,
    Toolbar: () => <div data-testid="toolbar" />,
}));

// mock usePostCreation hook
jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js', () => ({
    usePostCreation: jest.fn(),
}));

// Mock the usePostCreation hook before each test
beforeEach(() => {
    usePostCreation.mockReturnValue({
        activeTab: 'post',
    });
});

test('renders post creation text area component', () => {
    const {getByTestId} = render(<PostCreationTextEditor />);
    const postCreationTextArea = getByTestId('post-creation-text-area');
    expect(postCreationTextArea).toBeInTheDocument();
});

test('renders toolbar component', () => {
    const {getByTestId} = render(<PostCreationTextEditor />);
    const toolbar = getByTestId('toolbar');
    expect(toolbar).toBeInTheDocument();
});
