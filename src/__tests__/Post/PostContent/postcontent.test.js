import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, it, expect, jest} from '@jest/globals';
import {PostContent} from '../../../generic components/Post/PostContent/postcontent.js';
import {usePostContent} from
    '../../../generic components/Post/PostContent/postcontent.hooks.js';

jest.mock('../../../generic components/Post/PostContent/postcontent.hooks.js');

describe('PostContent', () => {
    it('should render post content', () => {
        const postId = 'testPostId';
        const viewContext = 'testViewContext';
        const mockPostContent = 'Test post content';

        usePostContent.mockReturnValue({
            postContent: mockPostContent,
        });

        render(<PostContent postId={postId} viewContext={viewContext} />);

        expect(screen.getByText(mockPostContent)).toBeInTheDocument();
    });

    it('should render empty if no post content', () => {
        const postId = 'testPostId';
        const viewContext = 'testViewContext';

        usePostContent.mockReturnValue({
            postContent: null,
        });

        const {container} = render(<PostContent postId={postId} viewContext={viewContext} />);

        expect(container.firstChild).toBeEmptyDOMElement();
    });
});
