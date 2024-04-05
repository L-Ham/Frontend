// FILEPATH: /D:/2025/Courses_175/Spring 2024/SW/Frontend/src/__tests__/Stats/stats.test.js

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {Stats} from '../../../../../generic components/Post/HoverCard/Overlays/UserOverlay/Stats/stats.js';

describe('Stats', () => {
    // Renders Stats with all required props
    it('should render Stats with all required props', () => {
        const authorId = 'testAuthor';
        const linkKarma = 12345;
        const commentKarma = 67890;

        render(<Stats authorId={authorId} linkKarma={linkKarma} commentKarma={commentKarma} />);

        expect(screen.getByTestId(`stats-${authorId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`postKarma-${authorId}`)).toHaveTextContent(linkKarma.toLocaleString());
        expect(screen.getByTestId(`commentKarma-${authorId}`)).toHaveTextContent(commentKarma.toLocaleString());
    });

    // Renders Stats with zero karma
    it('should render Stats with zero karma', () => {
        const authorId = 'testAuthor';
        const linkKarma = 0;
        const commentKarma = 0;

        render(<Stats authorId={authorId} linkKarma={linkKarma} commentKarma={commentKarma} />);

        expect(screen.getByTestId(`stats-${authorId}`)).toBeInTheDocument();
        expect(screen.getByTestId(`postKarma-${authorId}`)).toHaveTextContent(linkKarma.toLocaleString());
        expect(screen.getByTestId(`commentKarma-${authorId}`)).toHaveTextContent(commentKarma.toLocaleString());
    });
});
