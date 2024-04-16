import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {describe, beforeEach, afterEach, it, expect, jest} from '@jest/globals';
import {ChatButton} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.js';
import {useChat} from
    '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.hooks.js';

jest.mock('../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.hooks.js');

describe('ChatButton', () => {
    beforeEach(() => {
        cleanup();
        useChat.mockReturnValue({ChatIcon: () => <div>MockIcon</div>});
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render with correct attributes and content', () => {
        const userId = '123';
        const username = 'johndoe';
        const {getByTestId} = render(<ChatButton userId={userId} username={username} />);
        const chatLink = getByTestId(`chat-link-${userId}`);
        expect(chatLink.getAttribute('href')).
            toBe(`${window.location.origin.replace('//', '//chat.')}/user/${username}`);
        expect(chatLink.target).toBe('_blank');
        expect(chatLink.rel).toBe('noreferrer');
        expect(getByTestId(`chat-icon-${userId}`)).toContainHTML('<div>MockIcon</div>');
        expect(getByTestId(`chat-text-${userId}`).textContent).toBe('Chat');
    });
});
