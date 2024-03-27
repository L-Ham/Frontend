import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react';
import {it, expect, describe, jest} from '@jest/globals';
import {Comments} from '../../generic components/Post/PostBoost/comments.js';

describe('Comments', () => {
    const postId = 't3_1bmnuhw';

    it('should render comments link', () => {
        const {getByTestId} = render(<Comments postId={postId} />);
        expect(getByTestId(`comments-${postId}`)).toBeInTheDocument();
    });

    it('should stop propagation when comments link is clicked', () => {
        const {getByTestId} = render(<Comments postId={postId} />);
        const link = getByTestId(`comments-${postId}`);
        const onClick = jest.fn();
        link.onclick = onClick;
        fireEvent.click(link);
        expect(onClick).toHaveBeenCalled();
    });
});
