import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {useOptionsButton} from
    '../../../generic components/Post/PostInfo/ButtonsPanel/OptionsButton/options.hooks.js';
import {Dropdown} from '../../../generic components/Post/PostInfo/ButtonsPanel/OptionsButton/Dropdown/dropdown.js';
import {OptionsButton} from '../../../generic components/Post/PostInfo/ButtonsPanel/OptionsButton/options.js';

jest.mock('../../../generic components/Post/PostInfo/ButtonsPanel/OptionsButton/options.styles.js', () => ({
    optionsClasses: {
        root: 'options-button',
    },
}));
jest.mock('../../../generic components/Post/PostInfo/ButtonsPanel/OptionsButton/Dropdown/dropdown.js');
jest.mock('../../../generic components/Post/PostInfo/ButtonsPanel/OptionsButton/options.hooks.js');

describe('OptionsButton Component', () => {
    let mockSetIsOpen;
    const props = {
        postId: 'p1',
        isMember: true,
        isSaved: false,
        isHidden: false,
    };
    beforeEach(() => {
        cleanup();
        mockSetIsOpen = jest.fn();
        useOptionsButton.mockImplementation(() => ({
            ThreeDotsIcon: () => <div>Icon</div>,
            isOpen: false,
            setIsOpen: mockSetIsOpen,
        }));
        Dropdown.mockImplementation(() => <div>Dropdown Component</div>);
    });

    it('renders the button with the correct test id and class', () => {
        const {getByTestId} = render(<OptionsButton {...props} />);
        const button = getByTestId('more-p1');
        expect(button).toHaveClass('options-button');
    });

    it('stops propagation when the button is clicked', () => {
        const {getByTestId} = render(<OptionsButton {...props} />);
        const button = getByTestId('more-p1');
        const mockEvent = new MouseEvent('click', {bubbles: true, cancelable: true});
        jest.spyOn(mockEvent, 'stopPropagation');
        fireEvent(button, mockEvent);
        expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });

    it('toggles isOpen state when clicked', () => {
        const {getByTestId} = render(<OptionsButton {...props} />);
        const button = getByTestId('more-p1');
        fireEvent.click(button);
        expect(mockSetIsOpen).toHaveBeenCalledWith(true);
        useOptionsButton.mockImplementation(() => ({
            ThreeDotsIcon: () => <div>Icon</div>,
            isOpen: true,
            setIsOpen: mockSetIsOpen,
        }));
        fireEvent.click(button);
        expect(mockSetIsOpen).toHaveBeenCalledWith(true);
    });
});
