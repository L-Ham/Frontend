import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect, jest} from '@jest/globals';
import {PostText} from '../../../generic components/Post/PostContent/PostText/posttext.js';

// Mock the usePostText hook as it's not part of this unit test
jest.mock('../../../generic components/Post/PostContent/PostText/posttext.hooks.js', () => ({
    usePostText: () => ({
        classNames: 'test-class',
        postContent: 'Test content',
    }),
}));

describe('PostText', () => {
    it('should render post text with given postId and viewContext', () => {
        const postId = 'testPostId';
        const viewContext = 'testViewContext';

        render(<PostText postId={postId} viewContext={viewContext} />);

        const postTextElement = screen.getByTestId(`content-${postId}-${viewContext}`);
        expect(postTextElement).toBeInTheDocument();
        expect(postTextElement).toHaveClass('test-class');
        expect(postTextElement).toHaveTextContent('Test content');
    });
});
