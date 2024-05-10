/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostTags} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/PostTags/posttags.js';
import {PostTag} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/PostTags/PostTag/posttag.js';
import {usePostCreation} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/PostTags/PostTag/posttag.js', () => ({
    __esModule: true,
    PostTag: ({tag, isActive, setPostTags}) => {
        return <div data-testid={`post-tag-${tag}`} onClick={() => setPostTags(tag)} className={isActive ? 'active' : 'inactive'} />;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js', () => ({
    __esModule: true,
    usePostCreation: jest.fn(),
}));

describe('PostTags', () => {
    const setPostTags = jest.fn();
    const postTags = ['OC', 'SPOILER'];
    const tags = ['OC', 'SPOILER', 'NSFW'];

    beforeEach(() => {
        usePostCreation.mockReturnValue({
            setPostTags,
            postTags,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders without crashing', () => {
        render(<PostTags />);
    });

    test('renders post-tags-div and post-tags-inner-div', () => {
        const {getByTestId} = render(<PostTags />);
        expect(getByTestId('post-tags-div')).toBeInTheDocument();
        expect(getByTestId('post-tags-inner-div')).toBeInTheDocument();
    });

    test('renders correct number of PostTag components', () => {
        const {getAllByTestId} = render(<PostTags />);
        expect(getAllByTestId(/post-tag-/).length).toBe(tags.length);
    });

    test('calls setPostTags when PostTag is clicked', () => {
        const {getByTestId} = render(<PostTags />);
        fireEvent.click(getByTestId('post-tag-OC'));
        expect(setPostTags).toHaveBeenCalledWith('OC');
    });
});
