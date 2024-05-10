/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {PostCreationFormFooter} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/postcreationformfooter.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/ActionButtons/actionbuttons.js', () => ({
    __esModule: true,
    ActionButtons: () => <div data-testid="action-buttons" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/PostTags/posttags.js', () => ({
    __esModule: true,
    PostTags: () => <div data-testid="post-tags" />,
}));

describe('PostCreationFormFooter', () => {
    beforeEach(() => {
        render(<PostCreationFormFooter />);
    });

    test('renders correctly', () => {
        const footer = screen.getByTestId('post-creation-form-footer-div');
        expect(footer).toBeInTheDocument();
    });

    test('renders PostTags', () => {
        const postTags = screen.getByTestId('post-tags');
        expect(postTags).toBeInTheDocument();
    });

    test('renders ActionButtons', () => {
        const actionButtons = screen.getByTestId('action-buttons');
        expect(actionButtons).toBeInTheDocument();
    });

    test('renders hr', () => {
        const hr = screen.getByTestId('post-creation-form-footer-hr');
        expect(hr).toBeInTheDocument();
    });
});
