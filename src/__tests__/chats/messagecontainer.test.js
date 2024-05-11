import React from 'react';
import {render} from '@testing-library/react';
import {MessageContainer} from '../../layouts/Chats/messages/messagecontainer.js';
import {describe, it, expect} from '@jest/globals';
import '@testing-library/jest-dom';

describe('MessageContainer Component', () => {
    it('displays messages when provided', () => {
        const messages = ['Hello', 'World'];
        const {getByText} = render(<MessageContainer messages={messages} />);
        expect(getByText('Hello')).toBeInTheDocument();
        expect(getByText('World')).toBeInTheDocument();
    });

    it('checks for proper structure', () => {
        const messages = ['Test message'];
        const {getByText} = render(<MessageContainer messages={messages} />);
        const messageElement = getByText('Test message');
        expect(messageElement).toBeInTheDocument();
    });
});

