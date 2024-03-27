import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react';
import {it, expect, describe, jest} from '@jest/globals';
import {UserOverlay} from '../../generic components/Post/HoverCard/Overlays/useroverlay.js';
import {DATA, VIEW_CONTEXTS} from '../../generic components/Post/data.js';

describe('UserOverlay', () => {
    const authorId = 't2_bll4twvt';
    const openOverlay = jest.fn();
    const closeOverlay = jest.fn();
    const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;

    it('should render UserOverlay component', () => {
        const {getByTestId} = render(
            <UserOverlay
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                authorId={authorId}
                viewContext={viewContext}
            />);
        expect(getByTestId(`user-overlay-${authorId}`)).toBeInTheDocument();
    });

    it('should display avatar with correct src and alt', () => {
        const {getByAltText} = render(
            <UserOverlay
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                authorId={authorId}
                viewContext={viewContext}
            />);
        const avatar = getByAltText(`${DATA[authorId].display_name_prefixed} avatar`);
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute('src', DATA[authorId].snoovatar_img);
    });

    it('should have correct username link', () => {
        const {getByText} = render(
            <UserOverlay
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                authorId={authorId}
                viewContext={viewContext}
            />);
        const usernameLink = getByText(DATA[authorId].name);
        expect(usernameLink).toBeInTheDocument();
        expect(usernameLink).toHaveAttribute('href', `/user/${DATA[authorId].name}`);
    });

    it('should call openOverlay on mouse enter', () => {
        const {getByTestId} = render(
            <UserOverlay
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                authorId={authorId}
                viewContext={viewContext} />);
        fireEvent.mouseEnter(getByTestId(`user-overlay-${authorId}`));
        expect(openOverlay).toHaveBeenCalled();
    });

    it('should call closeOverlay on mouse leave', () => {
        const {getByTestId} = render(
            <UserOverlay
                openOverlay={openOverlay}
                closeOverlay={closeOverlay}
                authorId={authorId}
                viewContext={viewContext}
            />);
        fireEvent.mouseLeave(getByTestId(`user-overlay-${authorId}`));
        expect(closeOverlay).toHaveBeenCalled();
    });
});
