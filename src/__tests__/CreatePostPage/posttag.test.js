/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostTag} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/PostTags/PostTag/posttag.js';
import {usePostTag} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/PostTags/PostTag/posttag.hooks.js';
import {getIconComponent} from '../../generic components/iconsmap.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/PostTags/PostTag/posttag.hooks.js',
    () => ({
        usePostTag: jest.fn(),
    }),
);
jest.mock('../../generic components/iconsmap.js');

describe('PostTag', () => {
    const setPostTagsMock = jest.fn();
    const handleTagClickMock = jest.fn();
    const IconMock = () => <div data-testid="post-tag-icon" />;

    it('renders correctly', () => {
        usePostTag.mockReturnValue({
            handleTagClick: handleTagClickMock,
            Icon: IconMock,
        });
        const {getByTestId} = render(<PostTag tag="test" setPostTags={setPostTagsMock} isActive={true} />);
        expect(getByTestId('post-tag-button')).toBeInTheDocument();
        expect(getByTestId('post-tag-icon')).toBeInTheDocument();
        expect(getByTestId('post-tag-span')).toHaveTextContent('test');
    });

    it('calls handleTagClick on button click', () => {
        usePostTag.mockReturnValue({
            handleTagClick: handleTagClickMock,
            Icon: IconMock,
        });
        const {getByTestId} = render(<PostTag tag="test" setPostTags={setPostTagsMock} isActive={true} />);
        fireEvent.click(getByTestId('post-tag-button'));
        expect(handleTagClickMock).toHaveBeenCalled();
    });
});
