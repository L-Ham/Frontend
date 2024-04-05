// FILEPATH: /D:/2025/Courses_175/Spring 2024/SW/Frontend/src/__tests__/Post/PostBoost/comments.test.js

import React from 'react';
import {render, screen} from '@testing-library/react';
import {Comments} from '../../../generic components/Post/PostBoost/CommentButton/comments.js';
import {DATA} from '../../../generic components/Post/data.js';
import {describe, it, expect, beforeEach} from '@jest/globals';
import {formatNumber} from '../../../generic components/utils.js';

describe('Comments', () => {
    const postId = 't3_1bmnuhw';

    beforeEach(() => {
        render(<Comments postId={postId} />);
    });

    it('should render the comments button', () => {
        expect(screen.getByTestId(`comments-button-${postId}`)).toBeInTheDocument();
    });

    it('should render the comments wrapper', () => {
        expect(screen.getByTestId(`comments-wrapper-${postId}`)).toBeInTheDocument();
    });

    it('should render the comments icon', () => {
        expect(screen.getByTestId(`comments-icon-${postId}`)).toBeInTheDocument();
    });

    it('should render the comments count with correct formatting', () => {
        const {commentCount} = DATA[postId];
        expect(screen.getByTestId(`comments-count-${postId}`)).toHaveTextContent(formatNumber(commentCount));
    });
});
