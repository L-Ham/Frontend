/* eslint-disable */
import {render, fireEvent} from '@testing-library/react';
import {PostCreationPollOptions} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollOptions/postcreationpolloptions.js';
import {usePostCreation} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js';
import {PostCreationPollOption} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollOptions/PostCreationPollOption/postcreationpolloption.js';


jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollOptions/PostCreationPollOption/postcreationpolloption.js', () => ({
    __esModule: true,
    PostCreationPollOption: () => {
        return <div data-testid="post-creation-poll-option"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext.js', () => ({
    usePostCreation: jest.fn(),
}));

describe('PostCreationPollOptions', () => {
    it('renders correctly', () => {
        usePostCreation.mockReturnValue({pollData: {options: {0: 'Option 1',
            1: 'Option 2'}}});
        const {getByTestId} = render(<PostCreationPollOptions />);
        expect(getByTestId('post-creation-poll-options-div')).toBeInTheDocument();
    });

    it('renders correct number of PostCreationPollOption', () => {
        usePostCreation.mockReturnValue({
            pollData: {
                options: {
                    0: 'Option 1',
                    1: 'Option 2',
                },
            },
        });
        const {getAllByTestId} = render(<PostCreationPollOptions />);
        expect(getAllByTestId('post-creation-poll-option').length).toBe(2);
    });

    // it('adds a new option when "Add Option" button is clicked', () => {
    //     usePostCreation.mockReturnValue({
    //         pollData: {
    //             options: {
    //                 0: 'Option 1',
    //             },
    //         },
    //         setPollData: jest.fn(),
    //     });
    //     const setPollData = jest.fn();
    //     const {getByTestId} = render(<PostCreationPollOptions />);
    //     fireEvent.click(getByTestId('post-creation-poll-options-button'));
    //     expect(setPollData).toHaveBeenCalled();
    // });

    it('disables "Add Option" button when there are 6 options', () => {
        usePostCreation.mockReturnValue({
            pollData: {
                options: {
                    0: 'Option 1',
                    1: 'Option 2',
                    2: 'Option 3',
                    3: 'Option 4',
                    4: 'Option 5',
                    5: 'Option 6',
                },
            },
        },
        );
        const {getByTestId} = render(<PostCreationPollOptions />);
        expect(getByTestId('post-creation-poll-options-button')).toBeDisabled();
    });

    it('displays "Voting length" text correctly', () => {
        usePostCreation.mockReturnValue({
            pollData: {
                options: {
                    0: 'Option 1',
                    1: 'Option 2',
                },
            },
        });
        const {getByTestId} = render(<PostCreationPollOptions />);
        expect(getByTestId('voting-length').textContent).toBe('3 days');
    });
});
