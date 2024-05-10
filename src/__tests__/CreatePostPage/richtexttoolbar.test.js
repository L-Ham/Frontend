/* eslint-disable */
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {RichTextToolbar} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/RichTextToolbar/richtexttoolbar.js';
import {useRichTextToolbar} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/RichTextToolbar/richtexttoolbar.hooks.js';
import {FormatOption} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/RichTextToolbar/FormatOption/formatoption.js';
import {getIconComponent} from '../../generic components/iconsmap.js';

// Mock the hooks and components
jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/RichTextToolbar/richtexttoolbar.hooks');
jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/Toolbar/RichTextToolbar/FormatOption/formatoption.js', () => ({
    __esModule: true,
    FormatOption: () => <div>FormatOption</div>,
}));

// Mock for ThreeDotsIcon
jest.mock('../../generic components/iconsmap.js');

describe('RichTextToolbar', () => {
    beforeEach(() => {
        useRichTextToolbar.mockReturnValue({
            isMoreOptionsVisible: false,
            setIsMoreOptionsVisible: jest.fn(),
            visibleOptionsList: [{name: 'bold'}, {name: 'italic'}],
            nonVisibleOptionsList: [{name: 'underline'}],
            toolbarRef: null,
            ThreeDotsIcon: () => <div>ThreeDotsIcon</div>,
        });
        const Icon= () => <svg />;
        getIconComponent.mockReturnValue(Icon);
    });

    test('renders without crashing', () => {
        render(<RichTextToolbar />);
        expect(screen.getByTestId('rich-text-toolbar-div')).toBeInTheDocument();
        expect(screen.getByTestId('rich-text-toolbar-inner-div')).toBeInTheDocument();
    });

    test('toggles more options on button click', () => {
        const setIsMoreOptionsVisible = jest.fn();
        useRichTextToolbar.mockReturnValue({
            isMoreOptionsVisible: false,
            setIsMoreOptionsVisible,
            visibleOptionsList: [{name: 'bold'}],
            nonVisibleOptionsList: [],
            toolbarRef: null,
            ThreeDotsIcon: () => <div>ThreeDotsIcon</div>,
        });

        render(<RichTextToolbar />);
        fireEvent.click(screen.getByTestId('rich-text-toolbar-button'));
        expect(setIsMoreOptionsVisible).toHaveBeenCalledWith(true);
    });


    // test('renders non-visible options when more options are visible', () => {
    //     useRichTextToolbar.mockReturnValue({
    //         isMoreOptionsVisible: true,
    //         setIsMoreOptionsVisible: jest.fn(),
    //         visibleOptionsList: [{name: 'bold'}],
    //         nonVisibleOptionsList: [{name: 'underline'}],
    //         toolbarRef: null,
    //         ThreeDotsIcon: () => <div>ThreeDotsIcon</div>,
    //     });

    //     render(<RichTextToolbar />);
    //     expect(screen.getByTestId('non-visible-format-option-underline')).toBeInTheDocument();
    // });
});

