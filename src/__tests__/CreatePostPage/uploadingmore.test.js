/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {UploadingMore} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/uploadingmore.js';
import {usePostCreation} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js';
import {Image} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/Image/image.js';
import {AddFiles} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/AddFiles/addfiles.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/Image/image.js', () => ({
    __esModule: true,
    Image: () => {
        return <div data-testid="image"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore//AddFiles/addfiles.js', () => ({
    __esModule: true,
    AddFiles: () => {
        return <div data-testid="add-files"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js', () => ({
    usePostCreation: jest.fn(),
}));

describe('UploadingMore', () => {
    beforeEach(() => {
        usePostCreation.mockReturnValue({
            files: ['file1', 'file2'],
            setFiles: jest.fn(),
        });
    });

    test('renders without crashing', () => {
        render(<UploadingMore />);
    });

    test('renders Image component for each file', () => {
        const {getAllByTestId} = render(<UploadingMore />);
        expect(getAllByTestId('image').length).toBe(2);
    });

    test('renders AddFiles component', () => {
        const {getByTestId} = render(<UploadingMore />);
        expect(getByTestId('add-files')).toBeInTheDocument();
    });

    test('handles drag and drop events', () => {
        const {getByTestId} = render(<UploadingMore />);
        const dropzone = getByTestId('uploading-more-div');
        fireEvent.dragOver(dropzone);
        fireEvent.drop(dropzone, {
            dataTransfer: {files: ['newFile1', 'newFile2']},
        });
        expect(usePostCreation().setFiles).toHaveBeenCalled();
    });
});
