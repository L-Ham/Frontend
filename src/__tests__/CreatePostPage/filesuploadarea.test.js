/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {FilesUploadArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/filesuploadarea.js';
import {usePostCreation} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js';
import {FirstUpload} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/FirstUpload/firstupload.js';
import {classes} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/FirstUpload/firstupload.styles.js';
import {Video} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/video.js';
import {UploadingMore} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/uploadingmore.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js');
jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/FirstUpload/firstupload.js', () => ({
    __esModule: true,
    FirstUpload: () => <div data-testid="first-upload" />,
}));
jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/Video/video.js', () => ({
    __esModule: true,
    Video: () => <div data-testid="video" />,
}));
jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/uploadingmore.js', () => ({
    __esModule: true,
    UploadingMore: () => <div data-testid="uploading-more" />,
}));

describe('FilesUploadArea', () => {
    test('renders FirstUpload when files is empty', () => {
        usePostCreation.mockReturnValue({files: []});
        render(<FilesUploadArea />);
        expect(screen.getByTestId('first-upload')).toBeInTheDocument();
    });

    test('renders Video when files contains a video file', () => {
        usePostCreation.mockReturnValue({files: [{type: 'video/mp4'}]});
        render(<FilesUploadArea />);
        expect(screen.getByTestId('video')).toBeInTheDocument();
    });

    test('renders UploadingMore when files contains an image file', () => {
        usePostCreation.mockReturnValue({files: [{type: 'image/jpeg'}]});
        render(<FilesUploadArea />);
        expect(screen.getByTestId('uploading-more')).toBeInTheDocument();
    });

    test('renders UploadingMore when files contains multiple image files', () => {
        usePostCreation.mockReturnValue({files: [{type: 'image/jpeg'}, {type: 'image/png'}]});
        render(<FilesUploadArea />);
        expect(screen.getByTestId('uploading-more')).toBeInTheDocument();
    });
});
