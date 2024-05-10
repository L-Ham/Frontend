/* eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {FormatOption} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/RichTextToolbar/FormatOption/formatoption.js';
import {getIconComponent} from '../../generic components/iconsmap.js';

jest.mock('../../generic components/iconsmap.js', () => ({
    getIconComponent: jest.fn(),
}));

describe('FormatOption', () => {
    const mockOption = {
        icon: 'testIcon',
        name: 'testName',
    };

    beforeEach(() => {
        getIconComponent.mockReturnValue(() => <div data-testid="format-option-icon" />);
        render(<FormatOption option={mockOption} />);
    });

    test('renders without crashing', () => {
        expect(screen.getByTestId('format-option-span')).toBeInTheDocument();
    });

    // Repeat the following pattern for each element
    test('renders format-option-button', () => {
        expect(screen.getByTestId('format-option-button')).toBeInTheDocument();
    });

    // ... repeat for other elements ...

    test('renders name correctly', () => {
        expect(screen.getByText('testName')).toBeInTheDocument();
    });

    test('renders icon correctly', () => {
        expect(screen.getByTestId('format-option-icon')).toBeInTheDocument();
    });


    // test('propTypes are defined correctly', () => {
    //     expect(FormatOption.propTypes).toEqual({
    //         option: PropTypes.object.isRequired,
    //     });
    // });

    // test('throws error when required props are not provided', () => {
    //     // console.error = jest.fn();
    //     render(<FormatOption />);
    //     expect(// console.error).toHaveBeenCalledTimes(1);
    // });

    // test('does not throw error when all required props are provided', () => {
    //     // console.error = jest.fn();
    //     render(<FormatOption option={mockOption} />);
    //     expect(// console.error).not.toHaveBeenCalled();
    // });
});
