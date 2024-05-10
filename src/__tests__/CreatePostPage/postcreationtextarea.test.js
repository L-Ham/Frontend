/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostCreationTextArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationTextArea/postcreationtextarea.js';
import {usePostCreation} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js');

describe('PostCreationTextArea', () => {
    let setBorderColor;
    let setText;
    let text;

    beforeEach(() => {
        setBorderColor = jest.fn();
        setText = jest.fn();
        text = 'Test text';
        usePostCreation.mockReturnValue({text, setText});
    });

    it('renders correctly', () => {
        const {getByTestId} = render(<PostCreationTextArea setBorderColor={setBorderColor} />);
        expect(getByTestId('post-creation-textarea-outer-div')).toBeInTheDocument();
        expect(getByTestId('post-creation-textarea-inner-div1')).toBeInTheDocument();
        expect(getByTestId('post-creation-textarea-inner-div2')).toBeInTheDocument();
        expect(getByTestId('post-creation-textarea-div')).toBeInTheDocument();
        expect(getByTestId('post-creation-textarea-inner-div3')).toBeInTheDocument();
        expect(getByTestId('post-creation-textarea')).toBeInTheDocument();
        expect(getByTestId('post-creation-textarea-div2')).toBeInTheDocument();
    });

    it('calls setBorderColor when textarea is focused', () => {
        const {getByTestId} = render(<PostCreationTextArea setBorderColor={setBorderColor} />);
        fireEvent.focus(getByTestId('post-creation-textarea'));
        expect(setBorderColor).toHaveBeenCalledWith('border-[color:var(--newCommunityTheme-navIcon)]');
    });

    it('calls setBorderColor when textarea is blurred', () => {
        const {getByTestId} = render(<PostCreationTextArea setBorderColor={setBorderColor} />);
        fireEvent.blur(getByTestId('post-creation-textarea'));
        expect(setBorderColor).toHaveBeenCalledWith('border-[color:var(--newCommunityTheme-line)]');
    });

    it('calls setText when textarea value changes', () => {
        const {getByTestId} = render(<PostCreationTextArea setBorderColor={setBorderColor} />);
        fireEvent.change(getByTestId('post-creation-textarea'), {target: {value: 'New text'}});
        expect(setText).toHaveBeenCalledWith('New text');
    });

    it('textarea value is the same as text value from usePostCreation hook', () => {
        const {getByTestId} = render(<PostCreationTextArea setBorderColor={setBorderColor} />);
        expect(getByTestId('post-creation-textarea').value).toBe(text);
    });
});
