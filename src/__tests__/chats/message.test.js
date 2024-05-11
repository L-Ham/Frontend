import React from 'react';
import {render} from '@testing-library/react';
import {Message} from '../../layouts/Chats/messages/message.js';
import {describe, it, expect} from '@jest/globals';
import '@testing-library/jest-dom';
/*eslint-disable */
describe('Message Component', () => {
    

    

    it('renders the message component with an avatar', () => {
        const {getByAltText} = render(
            <Message
                time="10:00 PM"
                name="Dijkstra777"
                avatar="https://example.com/avatar.jpg"
                message="Hello, how are you?"
                type="text"
            />,
        );

        // Check if the Avatar component image is rendered
        expect(getByAltText('User Avatar')).toHaveAttribute('src', 'https://example.com/avatar.jpg'); // Make sure the alt text matches exactly what is set in the Avatar component
    });
});

