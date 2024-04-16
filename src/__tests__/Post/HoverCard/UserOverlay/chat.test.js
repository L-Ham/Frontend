import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {describe, beforeEach, afterEach, it, expect, jest} from '@jest/globals';
import {ChatButton} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.js';
import {useChat} from
    '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.hooks.js';
import {chatClasses} from
    '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.styles.js';

jest.mock('../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.hooks.js');

describe('ChatButton', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    let fakeChatIcon;
    beforeEach(() => {
        cleanup();
        fakeChatIcon = () => <svg>ChatIcon</svg>;
        useChat.mockReturnValue({ChatIcon: fakeChatIcon});
    });

    it('renders correctly with given props', () => {
        const {getByTestId} = render(<ChatButton userId="123" username="user1" />);

        expect(getByTestId('chat-link-123')).toBeInTheDocument();
        expect(getByTestId('chat-icon-123')).toBeInTheDocument();
        expect(getByTestId('chat-text-123')).toHaveTextContent('Chat');
    });

    it('applies correct class names', () => {
        const {getByTestId} = render(<ChatButton userId="123" username="user1" />);

        expect(getByTestId('chat-link-123')).toHaveClass(chatClasses.anchor);
        expect(getByTestId('chat-icon-123').parentNode).toHaveClass(chatClasses.iconWrapper);
        expect(getByTestId('chat-icon-123')).toHaveClass(chatClasses.icon);
        expect(getByTestId('chat-text-123')).toHaveClass(chatClasses.text);
    });

    it('constructs the correct href attribute', () => {
        const {getByTestId} = render(<ChatButton userId="123" username="user1" />);
        const expectedHref = window.location.origin.replace('//', '//chat.') + '/user/user1';

        expect(getByTestId('chat-link-123').getAttribute('href')).toBe(expectedHref);
    });

    it('sets target="_blank" and rel="noreferrer" on anchor', () => {
        const {getByTestId} = render(<ChatButton userId="123" username="user1" />);

        expect(getByTestId('chat-link-123')).toHaveAttribute('target', '_blank');
        expect(getByTestId('chat-link-123')).toHaveAttribute('rel', 'noreferrer');
    });

    it('renders the ChatIcon component inside the icon span', () => {
        const {getByTestId} = render(<ChatButton userId="123" username="user1" />);
        const iconContent = getByTestId('chat-icon-123').textContent;

        // Checking if the mock SVG content from ChatIcon is rendered
        expect(iconContent).toContain('ChatIcon');
    });
});
