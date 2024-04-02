import React from 'react';
import {render, screen} from '@testing-library/react';
import {PostBoost} from '../../../generic components/Post/PostBoost/postboost.js';
import {describe, it, expect, beforeEach} from '@jest/globals';

describe('PostBoost', () => {
    const postId = 't3_1bmnuhw';
    const viewContext = 'viewContextValue'; // replace with actual value

    beforeEach(() => {
        render(<PostBoost postId={postId} viewContext={viewContext} />);
    });

    it('should render the PostBoost component', () => {
        expect(screen.getByTestId(`post-footer-${postId}`)).toBeInTheDocument();
    });

    it('should contain the Vote component', () => {
        expect(screen.getByTestId(`score-${postId}`)).toBeInTheDocument();
    });

    it('should contain the Comments component', () => {
        expect(screen.getByTestId(`comments-button-${postId}`)).toBeInTheDocument();
    });

    it('should contain the Share component', () => {
        expect(screen.getByTestId(`share-button-${postId}`)).toBeInTheDocument();
    });
});
