// FILEPATH: /D:/2025/Courses_175/Spring 2024/SW/Frontend/src/__tests__/Post/PostBoost/share.test.js

import React from 'react';
import {render, screen} from '@testing-library/react';
import {Share} from '../../../generic components/Post/PostBoost/ShareButton/share.js';
import {describe, it, expect, beforeEach} from '@jest/globals';

describe('Share', () => {
    const postId = 't3_1bmnuhw';

    beforeEach(() => {
        render(<Share postId={postId} />);
    });

    it('should render the share button', () => {
        expect(screen.getByTestId(`share-button-${postId}`)).toBeInTheDocument();
    });

    it('should render the share wrapper', () => {
        expect(screen.getByTestId(`share-wrapper-${postId}`)).toBeInTheDocument();
    });

    it('should render the share icon', () => {
        expect(screen.getByTestId(`share-icon-${postId}`)).toBeInTheDocument();
    });
});
