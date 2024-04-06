import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect, jest, beforeEach} from '@jest/globals';
import {HoverCard} from '../../../generic components/Post/HoverCard/hovercard.js';
import {useHoverCard} from '../../../generic components/Post/HoverCard/hovercard.hooks.js';
import {VIEW_CONTEXTS} from '../../../generic components/Post/data.js';
jest.mock('../../../generic components/Post/HoverCard/hovercard.hooks.js');

describe('HoverCard', () => {
    const defaultProps = {
        postId: 't3_1bmnuhw',
        fullName: 't2_bll4twvt',
        viewContext: VIEW_CONTEXTS.COMMENTS_PAGE,
        icon: null,
    };

    const mockHoverCardData = {
        handlePopoverOpen: jest.fn(),
        handlePopoverClose: jest.fn(),
        DefaultSubredditIcon: () => <div>Icon</div>,
        overlayOpen: false,
        prefixedName: 'u/roguethrowaway0999',
        subredditId: 't5_33vsv',
        authorId: 't2_bll4twvt',
        isUser: false,
    };

    beforeEach(() => {
        useHoverCard.mockReturnValue(mockHoverCardData);
    });

    it('should render HoverCard with all required props', () => {
        render(<HoverCard {...defaultProps} />);

        expect(screen.getByTestId(`hovercard-${defaultProps.postId}-${defaultProps.fullName}`)).toBeInTheDocument();
    });
});
