import React from 'react';
import {render, screen} from '@testing-library/react';
import {ChatButton} from '../../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.js';
import {chatClasses} from
    '../../../../../generic components/Post/HoverCard/Overlays/UserOverlay/ChatButton/chat.styles.js';
import {describe, it, expect} from '@jest/globals';

describe('ChatButton', () => {
    const userId = 'user1';
    const name = 'User One';


    it('should render the ChatButton component with correct attributes', () => {
        render(<ChatButton userId={userId} name={name} />);

        const chatLink = screen.getByTestId(`chat-link-${userId}`);
        expect(chatLink).toHaveAttribute('href', window.location.origin.replace('//', '//chat.')+`/user/${name}`);
        expect(chatLink).toHaveAttribute('target', '_blank');
        expect(chatLink).toHaveAttribute('rel', 'noreferrer');
        expect(chatLink).toHaveClass(chatClasses.anchor);

        const chatIconWrapper = screen.getByTestId(`chat-icon-${userId}`);
        expect(chatIconWrapper).toHaveClass(chatClasses.icon);

        const chatText = screen.getByTestId(`chat-text-${userId}`);
        expect(chatText).toHaveTextContent('Chat');
        expect(chatText).toHaveClass(chatClasses.text);
    });
});
