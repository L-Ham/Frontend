import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect} from '@jest/globals';
import {PostTitle} from '../../generic components/Post/PostTitle/posttitle.js';
import {titleClasses} from '../../generic components/Post/PostTitle/posttitle.styles.js';

describe('PostTitle', () => {
    const postId = 'testPostId';
    const title = 'Test Title';

    // Test case when isCommentsPage is true
    it('should render h1 with correct title when isCommentsPage is true', () => {
        render(<PostTitle postId={postId} title={title} isCommentsPage={true} />);

        expect(screen.getByTestId(`title-${postId}`)).toHaveTextContent(title);
        expect(screen.getByTestId(`title-${postId}`)).toHaveClass(titleClasses.h1);
    });

    // Test case when isCommentsPage is false
    it('should render div with correct title when isCommentsPage is false', () => {
        render(<PostTitle postId={postId} title={title} isCommentsPage={false} />);

        expect(screen.getByTestId(`title-${postId}`)).toHaveTextContent(title);
        expect(screen.getByTestId(`title-${postId}`)).toHaveClass(titleClasses.a);
    });
});
