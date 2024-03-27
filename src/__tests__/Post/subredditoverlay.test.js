import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react';
import {SubredditOverlay} from '../../generic components/Post/HoverCard/Overlays/subredditoverlay.js';
import {it, expect, describe, jest} from '@jest/globals';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';

describe('SubredditOverlay', () => {
    const subredditId = 't5_33vsv';
    const openOverlay = jest.fn();
    const closeOverlay = jest.fn();
    const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;

    it('should render subreddit overlay', () => {
        const {getByTestId} = render(
            <SubredditOverlay
                subredditId={subredditId}
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                viewContext={viewContext}
            />);
        expect(getByTestId(`subreddit-overlay-${subredditId}`)).toBeInTheDocument();
    });

    it('should render subreddit banner', () => {
        const {getByTestId} = render(
            <SubredditOverlay
                subredditId={subredditId}
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                viewContext={viewContext} />);
        expect(getByTestId(`banner-${subredditId}`)).toBeInTheDocument();
    });

    it('should render join button', () => {
        const {getByTestId} = render(
            <SubredditOverlay
                subredditId={subredditId}
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                viewContext={viewContext}
            />);
        expect(getByTestId(`join-${subredditId}`)).toBeInTheDocument();
    });

    it('should render subreddit description', () => {
        const {getByTestId} = render(
            <SubredditOverlay
                subredditId={subredditId}
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                viewContext={viewContext}
            />);
        expect(getByTestId(`description-${subredditId}`)).toBeInTheDocument();
    });

    it('should render subreddit members', () => {
        const {getByTestId} = render(
            <SubredditOverlay
                subredditId={subredditId}
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                viewContext={viewContext}
            />);
        expect(getByTestId(`members-${subredditId}`)).toBeInTheDocument();
    });

    it('should render subreddit members name', () => {
        const {getByTestId} = render(
            <SubredditOverlay
                subredditId={subredditId}
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                viewContext={viewContext}
            />);
        expect(getByTestId(`members-name-${subredditId}`)).toBeInTheDocument();
    });

    it('should stop propagation when overlay is clicked', () => {
        const {getByTestId} = render(
            <SubredditOverlay
                subredditId={subredditId}
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                viewContext={viewContext} />);
        const overlay = getByTestId(`subreddit-overlay-${subredditId}`);
        const onClick = jest.fn();
        overlay.onclick = onClick;
        fireEvent.click(overlay);
        expect(onClick).toHaveBeenCalled();
    });
});
