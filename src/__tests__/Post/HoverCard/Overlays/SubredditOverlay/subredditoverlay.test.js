import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect, jest} from '@jest/globals';
import {SubredditOverlay} from
    '../../../../../generic components/Post/HoverCard/Overlays/SubredditOverlay/subredditoverlay.js';
import {VIEW_CONTEXTS} from '../../../../../generic components/Post/data.js';
describe('SubredditOverlay', () => {
    const mockOpenOverlay = jest.fn();
    const mockCloseOverlay = jest.fn();
    const subredditId = 't5_33vsv';
    const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;

    it('should render SubredditOverlay with all required props', () => {
        render(<SubredditOverlay
            openOverlay={mockOpenOverlay}
            closeOverlay={mockCloseOverlay}
            subredditId={subredditId}
            viewContext={viewContext}
        />);

        expect(screen.getByTestId(`subreddit-overlay-${subredditId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`subreddit-overlay-description-${subredditId}`)).toBeInTheDocument();
    });

    it('should call openOverlay and closeOverlay on mouse enter and leave', () => {
        render(<SubredditOverlay
            openOverlay={mockOpenOverlay}
            closeOverlay={mockCloseOverlay}
            subredditId={subredditId}
            viewContext={viewContext}
        />);

        fireEvent.mouseEnter(screen.getByTestId(`subreddit-overlay-${subredditId}`));
        expect(mockOpenOverlay).toHaveBeenCalled();

        fireEvent.mouseLeave(screen.getByTestId(`subreddit-overlay-${subredditId}`));
        expect(mockCloseOverlay).toHaveBeenCalled();
    });
});
