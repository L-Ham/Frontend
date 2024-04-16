import React from 'react';
import {describe, jest, it, expect, beforeEach} from '@jest/globals';
import {cleanup, render, fireEvent} from '@testing-library/react';
import {UserOverlay} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/useroverlay.js';
import {useUserOverlay} from '../../../../generic components/Post/HoverCard/Overlays/UserOverlay/useroverlay.hooks.js';

jest.mock('../../../../generic components/Post/HoverCard/Overlays/UserOverlay/useroverlay.hooks.js');

describe('UserOverlay', () => {
    const mockOpenOverlay = jest.fn();
    const mockCloseOverlay = jest.fn();

    beforeEach(() => {
        cleanup();
        mockOpenOverlay.mockClear();
        mockCloseOverlay.mockClear();
        useUserOverlay.mockImplementation(() => ({
            classNames: 'overlay-class',
            avatar: 'avatar-url',
            created: '2020-01-01',
            username: 'john_doe',
            description: 'A brief description',
            postKarma: 1000,
            commentKarma: 500,
            isFriend: true,
        }));
    });

    it('renders correctly with required props and applies correct class', () => {
        const {getByTestId} = render(
            <UserOverlay openOverlay={mockOpenOverlay}
                closeOverlay={mockCloseOverlay} userId="user123" viewContext="profile" />,
        );
        expect(getByTestId('user-overlay-user123')).toHaveClass('overlay-class');
    });

    it('triggers openOverlay function on mouse leave', () => {
        const {getByTestId} = render(
            <UserOverlay openOverlay={mockOpenOverlay}
                closeOverlay={mockCloseOverlay} userId="user123" viewContext="profile" />,
        );
        fireEvent.mouseLeave(getByTestId('user-overlay-user123'));
        expect(mockCloseOverlay).toHaveBeenCalled();
    });

    it('triggers openOverlay function on mouse enter', () => {
        const {getByTestId} = render(
            <UserOverlay openOverlay={mockOpenOverlay}
                closeOverlay={mockCloseOverlay} userId="user123" viewContext="profile" />,
        );
        fireEvent.mouseEnter(getByTestId('user-overlay-user123'));
        expect(mockOpenOverlay).toHaveBeenCalled();
    });

    it('stops propagation of click events on the overlay', () => {
        // Mock functions to pass as props
        const mockOpenOverlay = jest.fn();
        const mockCloseOverlay = jest.fn();

        // Render component
        const {getByTestId} = render(
            <UserOverlay
                openOverlay={mockOpenOverlay}
                closeOverlay={mockCloseOverlay}
                userId="user123"
                viewContext="profile"
            />,
        );

        // Get the overlay element
        const overlayElement = getByTestId('user-overlay-user123');

        // Create a native event object
        const mockEvent = new MouseEvent('click', {
            bubbles: true, // Make sure it bubbles for a realistic test
            cancelable: true,
        });
        // Spy on stopPropagation method of the event
        jest.spyOn(mockEvent, 'stopPropagation');

        // Dispatch the native event to the element
        fireEvent(overlayElement, mockEvent);

        // Assert that stopPropagation was called
        expect(mockEvent.stopPropagation).toHaveBeenCalled();
    });

    it('conditionally renders description if present', () => {
        const {getByTestId} = render(
            <UserOverlay openOverlay={mockOpenOverlay}
                closeOverlay={mockCloseOverlay} userId="user123" viewContext="profile" />,
        );
        expect(getByTestId('user-overlay-description-user123')).toHaveTextContent('A brief description');
    });

    it('does not render description if not present', () => {
        useUserOverlay.mockImplementationOnce(() => ({
            classNames: 'overlay-class',
            avatar: 'avatar-url',
            created: '2020-01-01',
            username: 'john_doe',
            description: '',
            postKarma: 1000,
            commentKarma: 500,
            isFriend: true,
        }));
        const {queryByTestId} = render(
            <UserOverlay openOverlay={mockOpenOverlay}
                closeOverlay={mockCloseOverlay} userId="user123" viewContext="profile" />,
        );
        expect(queryByTestId('user-overlay-description-user123')).toBeNull();
    });
});
