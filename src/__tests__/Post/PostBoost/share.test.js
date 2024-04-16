import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {Share} from '../../../generic components/Post/PostBoost/ShareButton/share.js';
import {useShare} from '../../../generic components/Post/PostBoost/ShareButton/share.hooks.js';
import {shareClasses} from '../../../generic components/Post/PostBoost/ShareButton/share.styles.js';

jest.mock('../../../generic components/Post/PostBoost/ShareButton/share.hooks.js');
jest.mock('../../../generic components/Post/PostBoost/ShareButton/share.styles.js', () => ({
    shareClasses: {
        root: 'root',
        wrapper: 'wrapper',
        icon: 'icon',
    },
    shareStyles: {
        root: {},
    },
}));

describe('Share component', () => {
    let mockSetIsOpen;

    beforeEach(() => {
        cleanup();
        mockSetIsOpen = jest.fn();
        useShare.mockImplementation(() => ({
            ShareIcon: () => <div>Icon</div>,
            isOpen: false,
            setIsOpen: mockSetIsOpen,
        }));
    });

    it('renders the Share component with the correct class and style', () => {
        const {getByTestId} = render(<Share postId="post123" url="https://example.com" />);
        const button = getByTestId('share-button-post123');
        expect(button.className).toBe(shareClasses.root);
        expect(button.style.all).toBe('');
    });

    it('renders the ShareIcon within the button', () => {
        const {getByTestId} = render(<Share postId="post123" url="https://example.com" />);
        expect(getByTestId('share-icon-post123')).toBeTruthy();
    });

    it('displays the correct label inside the button', () => {
        const {getByTestId} = render(<Share postId="post123" url="https://example.com" />);
        expect(getByTestId('share-wrapper-post123').textContent).toContain('Share');
    });

    it('toggles isOpen state on button click', () => {
        const {getByTestId} = render(<Share postId="post123" url="https://example.com" />);
        fireEvent.click(getByTestId('share-button-post123'));
        expect(mockSetIsOpen).toHaveBeenCalledWith(true);
    });

    it('prevents the default action and stops propagation on button click', () => {
        const {getByTestId} = render(<Share postId="post123" url="https://example.com" />);
        const mockEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });
        jest.spyOn(mockEvent, 'stopPropagation');
        fireEvent(getByTestId('share-button-post123'), mockEvent);
        expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });

    it('does not render the Dropdown component when isOpen is false', () => {
        const {queryByTestId} = render(<Share postId="post123" url="https://example.com" />);
        expect(queryByTestId('dropdown-' + 'post123')).toBeNull();
    });
});
