import React from 'react';
import '@testing-library/jest-dom';
import {it, expect, describe} from '@jest/globals';
import {Share} from '../../generic components/Post/PostBoost/share.js';
import {render} from '@testing-library/react';

describe('Share', () => {
    // Check if the component renders correctly
    it('should render correctly', () => {
        const postId = 't3_1bmnuhw';
        const {getByTestId} = render(<Share postId={postId} />);

        expect(getByTestId(`share-${postId}`)).toBeInTheDocument();
    });

    // Check on styling
    it('should have the correct styling', () => {
        const postId = 't3_1bmnuhw';
        const {getByTestId} = render(<Share postId={postId} />);

        expect(getByTestId(`share-${postId}`)).toHaveStyle('font: var(--font-button-sm);');
    });

    // Check on text
    it('should have the correct text', () => {
        const postId = 't3_1bmnuhw';
        const {getByTestId} = render(<Share postId={postId} />);

        expect(getByTestId(`share-${postId}`)).toHaveTextContent('Share');
    });
});
