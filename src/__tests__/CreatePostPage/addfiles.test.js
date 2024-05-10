/* eslint-disable */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {AddFiles} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/AddFiles/addfiles.js';
import {useAddFiles} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/AddFiles/addfiles.hooks.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/AddFiles/addfiles.hooks.js',
    () => ({
        useAddFiles: jest.fn(),
    }),
);

describe('AddFiles', () => {
    const handleButtonClickMock = jest.fn();
    const handleFileChangeMock = jest.fn();

    beforeEach(() => {
        useAddFiles.mockReturnValue({
            fileInputRef: React.createRef(),
            handleButtonClick: handleButtonClickMock,
            handleFileChange: handleFileChangeMock,
        });
    });

    test('renders without crashing', () => {
        const {getByTestId} = render(<AddFiles />);
        expect(getByTestId('add-files')).toBeInTheDocument();
    });

    test('renders file input', () => {
        const {getByTestId} = render(<AddFiles />);
        expect(getByTestId('add-files-input')).toBeInTheDocument();
    });

    test('renders button', () => {
        const {getByTestId} = render(<AddFiles />);
        expect(getByTestId('add-files-button')).toBeInTheDocument();
    });

    test('calls handleButtonClick when button is clicked', () => {
        const {getByTestId} = render(<AddFiles />);
        fireEvent.click(getByTestId('add-files-button'));
        expect(handleButtonClickMock).toHaveBeenCalled();
    });

    test('calls handleFileChange when file input changes', () => {
        const {getByTestId} = render(<AddFiles />);
        fireEvent.change(getByTestId('add-files-input'));
        expect(handleFileChangeMock).toHaveBeenCalled();
    });
});
