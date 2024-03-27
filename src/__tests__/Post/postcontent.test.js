import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {it, expect, describe} from '@jest/globals';
import {PostContent} from '../../generic components/Post/postcontent.js';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';

describe('PostContent', () => {
    const postId = 't3_1bmnuhw';
    const viewContext = VIEW_CONTEXTS.COMMENTS_PAGE;

    it('should render PostContent component', () => {
        render(<PostContent postId={postId} viewContext={viewContext} />);
        expect(screen.getByTestId(`content-${postId}-${viewContext}`)).toBeInTheDocument();
    });

    it('should apply correct class names when viewContext is COMMENTS_PAGE', () => {
        render(<PostContent postId={postId} viewContext={viewContext} />);
        expect(screen.getByTestId(`content-${postId}-${viewContext}`))
            .toHaveClass('mb-2 px-1 md:px-0 text-sm text-ellipsis');
    });

    it('should apply correct class names when viewContext is not COMMENTS_PAGE', () => {
        const viewContext = 'VIEW_CONTEXTS.OTHER_PAGE';
        render(<PostContent postId={postId} viewContext={viewContext} />);
        expect(screen.getByTestId(`content-${postId}-${viewContext}`))
            .toHaveClass('line-clamp-3 h-[60px] text-ellipsis break-words text-sm md:line-clamp-6 md:h-fit');
    });
});
