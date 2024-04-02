import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect, jest, beforeEach} from '@jest/globals';
import {UserOverlay} from '../../../../../generic components/Post/HoverCard/Overlays/UserOverlay/useroverlay.js';
import {VIEW_CONTEXTS} from '../../../../../generic components/Post/data.js';
describe('UserOverlay', () => {
    const mockData = {
        userId: 't2_bll4twvt',
        openOverlay: jest.fn(),
        closeOverlay: jest.fn(),
        viewContext: VIEW_CONTEXTS.COMMENTS_PAGE,
        // Add other props as needed
    };

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    // Renders UserOverlay with all required props
    it('should render UserOverlay with all required props', () => {
        render(<UserOverlay {...mockData} />);

        expect(screen.getByTestId(`user-overlay-${mockData.userId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`user-overlay-description-${mockData.userId}`)).toBeInTheDocument();
    });

    // Add more tests as needed
});
