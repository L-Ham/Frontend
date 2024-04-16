import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {joinClasses} from
    '../../../generic components/Post/PostInfo/ButtonsPanel/JoinButton/join.styles.js';
import {JoinButton} from '../../../generic components/Post/PostInfo/ButtonsPanel/JoinButton/join.js';

jest.mock('../../../generic components/Post/PostInfo/ButtonsPanel/JoinButton/join.styles.js', () => ({
    joinClasses: {
        root: 'join-button',
    },
    joinStyles: {
        root: {padding: '10px'},
    },
}));

describe('JoinButton Component', () => {
    beforeEach(() => {
        cleanup();
    });

    it('renders a button with correct initial text "Join"', () => {
        const {getByTestId} = render(<JoinButton postId="p1" subredditId="sub1" />);
        const button = getByTestId('join-p1');
        expect(button.textContent).toBe('Join');
    });

    it('renders a button with correct class and style', () => {
        const {getByTestId} = render(<JoinButton postId="p1" subredditId="sub1" />);
        const button = getByTestId('join-p1');
        expect(button.className).toBe(joinClasses.root);
        expect(button.style.padding).toBe('10px');
    });

    it('changes button text to "Leave" after click', () => {
        const {getByTestId} = render(<JoinButton postId="p1" subredditId="sub1" />);
        const button = getByTestId('join-p1');
        fireEvent.click(button);
        expect(button.textContent).toBe('Leave');
    });

    it('prevents event propagation when the button is clicked', () => {
        const {getByTestId} = render(<JoinButton postId="p1" subredditId="sub1" />);
        const button = getByTestId('join-p1');
        const mockEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });
        jest.spyOn(mockEvent, 'stopPropagation');
        fireEvent(button, mockEvent);
        expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });

    it('toggles the button text on multiple clicks', () => {
        const {getByTestId} = render(<JoinButton postId="p1" subredditId="sub1" />);
        const button = getByTestId('join-p1');
        fireEvent.click(button);
        expect(button.textContent).toBe('Leave');
        fireEvent.click(button);
        expect(button.textContent).toBe('Join');
    });
});
