/* eslint-disable */
import React from 'react';
import {render} from '@testing-library/react';
import {Image} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/FilesUploadArea/UploadingMore/Image/image.js';
import {getIconComponent} from '../../generic components/iconsmap';

jest.mock('../../generic components/iconsmap');
global.URL.createObjectURL = jest.fn(() => 'http://dummy.url');

describe('Image Component', () => {
    const mockFile = new File([''], 'filename', {type: 'text/html'});

    beforeEach(() => {
        const Icon= () => <svg data-testid='x-icon'/>;
        getIconComponent.mockReturnValue(Icon);
    },
    );

    test('renders without crashing', () => {
        render(<Image file={mockFile} />);
    });

    test('renders image correctly', () => {
        const {getByTestId} = render(<Image file={mockFile} />);
        expect(getByTestId('image-span3')).toHaveStyle(`backgroundImage: url(${URL.createObjectURL(mockFile)})`);
    });

    test('renders XIcon correctly', () => {
        const {getByTestId} = render(<Image file={mockFile} />);
        expect(getByTestId('x-icon')).toBeInTheDocument();
    });

    test('renders button correctly', () => {
        const {getByTestId} = render(<Image file={mockFile} />);
        expect(getByTestId('image-button')).toBeInTheDocument();
    });
});
