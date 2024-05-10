/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostCreationPollOption} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollOptions/PostCreationPollOption/postcreationpolloption.js';
import {usePostCreationPollOption} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollOptions/PostCreationPollOption/postcreationpolloption.hooks.js';
import {getIconComponent} from '../../generic components/iconsmap.js';

jest.mock('../../generic components/iconsmap');

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollOptions/PostCreationPollOption/postcreationpolloption.hooks', () => ({
    usePostCreationPollOption: jest.fn(),
}));

describe('PostCreationPollOption', () => {
    const defaultProps = {
        index: 1,
        value: 'Test',
    };

    it('renders without crashing', () => {
        usePostCreationPollOption.mockReturnValue({
            handleDelete: jest.fn(),
            handleChange: jest.fn(),
            handleDragStart: jest.fn(),
            handleDragEnd: jest.fn(),
            handleDragEnter: jest.fn(),
            handleDragLeave: jest.fn(),
        });
        const Icon= () => <svg data-testid="option-drag-icon"/>;
        getIconComponent.mockReturnValue(Icon);
        render(<PostCreationPollOption {...defaultProps} />);
    });

    it('renders correct elements', () => {
        usePostCreationPollOption.mockReturnValue({
            handleDelete: jest.fn(),
            handleChange: jest.fn(),
            handleDragStart: jest.fn(),
            handleDragEnd: jest.fn(),
            handleDragEnter: jest.fn(),
            handleDragLeave: jest.fn(),
        });
        const Icon= () => <svg data-testid="option-drag-icon"/>;
        getIconComponent.mockReturnValue(Icon);
        const {getByTestId} = render(<PostCreationPollOption {...defaultProps} />);
        expect(getByTestId('post-creation-poll-option-div-outer')).toBeInTheDocument();
        expect(getByTestId('post-creation-poll-option-div-inner')).toBeInTheDocument();
        expect(getByTestId('option-drag-icon')).toBeInTheDocument();
        expect(getByTestId('post-creation-poll-option-input')).toBeInTheDocument();
        expect(getByTestId('post-creation-poll-option-delete-div')).toBeInTheDocument();
    });

    it('calls correct functions on events', () => {
        usePostCreationPollOption.mockReturnValue({
            handleDelete: jest.fn(),
            handleChange: jest.fn(),
            handleDragStart: jest.fn(),
            handleDragEnd: jest.fn(),
            handleDragEnter: jest.fn(),
            handleDragLeave: jest.fn(),
        });
        const Icon= () => <svg data-testid="option-drag-icon"/>;
        getIconComponent.mockReturnValue(Icon);
        const {getByTestId} = render(<PostCreationPollOption {...defaultProps} />);
        const outerDiv = getByTestId('post-creation-poll-option-div-outer');
        const input = getByTestId('post-creation-poll-option-input');
        const deleteDiv = getByTestId('post-creation-poll-option-delete-div');

        fireEvent.dragStart(outerDiv);
        expect(usePostCreationPollOption().handleDragStart).toHaveBeenCalled();

        fireEvent.drop(outerDiv);
        expect(usePostCreationPollOption().handleDragEnd).toHaveBeenCalled();

        fireEvent.dragEnter(outerDiv);
        expect(usePostCreationPollOption().handleDragEnter).toHaveBeenCalled();

        fireEvent.dragLeave(outerDiv);
        expect(usePostCreationPollOption().handleDragLeave).toHaveBeenCalled();

        fireEvent.click(deleteDiv);
        expect(usePostCreationPollOption().handleDelete).toHaveBeenCalled();
    });
});
