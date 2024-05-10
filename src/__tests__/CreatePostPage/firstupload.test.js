/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {FirstUpload} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/FirstUpload/firstupload.js';
import {useFirstUpload} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/FirstUpload/firstupload.hooks.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/FirstUpload/firstupload.hooks.js');

describe('FirstUpload', () => {
    const mockHandleFileChange = jest.fn();
    const mockHandleButtonClick = jest.fn();
    const mockHandleDragOver = jest.fn();
    const mockHandleDragEnter = jest.fn();
    const mockHandleDragLeave = jest.fn();
    const mockHandleDrop = jest.fn();

    test('renders without crashing', () => {
        useFirstUpload.mockReturnValue({
            fileInputRef: {current: null},
            handleButtonClick: mockHandleButtonClick,
            handleFileChange: mockHandleFileChange,
            isDragging: false,
            handleDrop: mockHandleDrop,
            handleDragLeave: mockHandleDragLeave,
            handleDragEnter: mockHandleDragEnter,
            handleDragOver: mockHandleDragOver,
        });
        const {getByTestId} = render(<FirstUpload />);
        expect(getByTestId('first-upload-div')).toBeInTheDocument();
    });

    it('renders without crashing', () => {
        useFirstUpload.mockReturnValue({
            fileInputRef: {current: null},
            handleButtonClick: mockHandleButtonClick,
            handleFileChange: mockHandleFileChange,
            isDragging: false,
            handleDrop: mockHandleDrop,
            handleDragLeave: mockHandleDragLeave,
            handleDragEnter: mockHandleDragEnter,
            handleDragOver: mockHandleDragOver,
        });
        const {getByTestId} = render(<FirstUpload />);
        expect(getByTestId('first-upload-div')).toBeInTheDocument();
    });

    it('renders the file input', () => {
        useFirstUpload.mockReturnValue({
            fileInputRef: {current: null},
            handleButtonClick: mockHandleButtonClick,
            handleFileChange: mockHandleFileChange,
            isDragging: false,
            handleDrop: mockHandleDrop,
            handleDragLeave: mockHandleDragLeave,
            handleDragEnter: mockHandleDragEnter,
            handleDragOver: mockHandleDragOver,
        });
        const {getByTestId} = render(<FirstUpload />);
        expect(getByTestId('first-upload-input')).toBeInTheDocument();
    });

    it('renders the drag and drop area', () => {
        useFirstUpload.mockReturnValue({
            fileInputRef: {current: null},
            handleButtonClick: mockHandleButtonClick,
            handleFileChange: mockHandleFileChange,
            isDragging: false,
            handleDrop: mockHandleDrop,
            handleDragLeave: mockHandleDragLeave,
            handleDragEnter: mockHandleDragEnter,
            handleDragOver: mockHandleDragOver,
        });
        const {getByTestId} = render(<FirstUpload />);
        expect(getByTestId('first-upload-div2')).toBeInTheDocument();
    });

    it('renders the upload button', () => {
        useFirstUpload.mockReturnValue({
            fileInputRef: {current: null},
            handleButtonClick: mockHandleButtonClick,
            handleFileChange: mockHandleFileChange,
            isDragging: false,
            handleDrop: mockHandleDrop,
            handleDragLeave: mockHandleDragLeave,
            handleDragEnter: mockHandleDragEnter,
            handleDragOver: mockHandleDragOver,
        });
        const {getByTestId} = render(<FirstUpload />);
        expect(getByTestId('first-upload-button')).toBeInTheDocument();
    });

    it('applies correct classes when isDragging is false', () => {
        useFirstUpload.mockReturnValue({
            fileInputRef: {current: null},
            handleButtonClick: mockHandleButtonClick,
            handleFileChange: mockHandleFileChange,
            isDragging: false,
            handleDrop: mockHandleDrop,
            handleDragLeave: mockHandleDragLeave,
            handleDragEnter: mockHandleDragEnter,
            handleDragOver: mockHandleDragOver,
        });
        const {getByTestId} = render(<FirstUpload />);
        expect(getByTestId('first-upload-div2')).not.toHaveClass('dragging');
    });

    it('calls handleFileChange when a file is selected', () => {
        useFirstUpload.mockReturnValue({
            fileInputRef: {current: null},
            handleButtonClick: mockHandleButtonClick,
            handleFileChange: mockHandleFileChange,
            isDragging: false,
            handleDrop: mockHandleDrop,
            handleDragLeave: mockHandleDragLeave,
            handleDragEnter: mockHandleDragEnter,
            handleDragOver: mockHandleDragOver,
        });
        const {getByTestId} = render(<FirstUpload />);
        fireEvent.change(getByTestId('first-upload-input'), {target: {files: ['file.jpg']}});
        expect(mockHandleFileChange).toHaveBeenCalled();
    });

    it('calls handleButtonClick when the upload button is clicked', () => {
        useFirstUpload.mockReturnValue({
            fileInputRef: {current: null},
            handleButtonClick: mockHandleButtonClick,
            handleFileChange: mockHandleFileChange,
            isDragging: false,
            handleDrop: mockHandleDrop,
            handleDragLeave: mockHandleDragLeave,
            handleDragEnter: mockHandleDragEnter,
            handleDragOver: mockHandleDragOver,
        });
        const {getByTestId} = render(<FirstUpload />);
        fireEvent.click(getByTestId('first-upload-button'));
        expect(mockHandleButtonClick).toHaveBeenCalled();
    });
});
