import React from 'react';
import {render} from '@testing-library/react';
import {ExpandChatsButton} from '../../layouts/Chats/expandchats';
import {describe, it, jest, expect} from '@jest/globals';
import '@testing-library/jest-dom';
describe('ExpandChatsButton', () => {
    // Test to ensure it renders without crashing
    it('renders without crashing', () => {
        const mockExpandChats = jest.fn();
        const {getByRole} = render(<ExpandChatsButton expandChats={mockExpandChats} />);
        expect(getByRole('button')).toBeInTheDocument();
    });

    // Accessibility test to ensure the button has the correct aria-label
    it('has proper aria-label for accessibility', () => {
        const mockExpandChats = jest.fn();
        const {getByLabelText} = render(<ExpandChatsButton expandChats={mockExpandChats} />);
        expect(getByLabelText('Expand chats')).toBeInTheDocument();
    });

    // Snapshot test to ensure the rendered output does not change unexpectedly
    it('matches snapshot', () => {
        const mockExpandChats = jest.fn();
        const {asFragment} = render(<ExpandChatsButton expandChats={mockExpandChats} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
