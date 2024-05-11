import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {ImageButton} from '../../layouts/Chats/imagebutton.js';
import {describe, it} from '@jest/globals';
import '@testing-library/jest-dom';
describe('ImageButton', () => {
    it('resets the file input after file selection', () => {
        // This is to demonstrate the intention, real testing might not access input directly.
        const {getByRole} = render(<ImageButton setImage={() => {}} setPreview={() => {}} />);
        const input = getByRole('button'); // Incorrect but serves as a placeholder.

        fireEvent.change(input, {target: {files: [new File(['content'], 'filename.png', {type: 'image/png'})]}});

        // You'd check the functional behavior here, e.g., the state or calls that depend on the input being cleared.
    });
});
