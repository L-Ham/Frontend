/* eslint-disable */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {PostCreationPollArea} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/postcreationpollarea';
import {PostCreationPollOption} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollOptions/PostCreationPollOption/postcreationpolloption';

import {PostCreationpollTips} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollTips/postcreationpolltips';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollOptions/postcreationpolloptions.js', () => ({
    __esModule: true,
    PostCreationPollOptions: () => {
        return <div data-testid="post-creation-poll-options"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/PostCreationTextEditior/PostCreationPollArea/PostCreationPollTips/postcreationpolltips', () => ({
    __esModule: true,
    PostCreationpollTips: () => {
        return <div data-testid="post-creation-poll-tips"/>;
    },
}));


describe('PostCreationPollArea', () => {
    test('renders without crashing', () => {
        render(<PostCreationPollArea />);
    });

    test('renders PostCreationPollOptions', () => {
        render(<PostCreationPollArea />);
        const pollOptions = screen.getByTestId('post-creation-poll-options');
        expect(pollOptions).toBeInTheDocument();
    });

    test('renders PostCreationpollTips', () => {
        render(<PostCreationPollArea />);
        const pollTips = screen.getByTestId('post-creation-poll-tips');
        expect(pollTips).toBeInTheDocument();
    });

    test('renders post-creation-poll-area-div', () => {
        render(<PostCreationPollArea />);
        const pollAreaDiv = screen.getByTestId('post-creation-poll-area-div');
        expect(pollAreaDiv).toBeInTheDocument();
    });

    test('renders poll-creator', () => {
        render(<PostCreationPollArea />);
        const pollCreator = screen.getByTestId('poll-creator');
        expect(pollCreator).toBeInTheDocument();
    });

    test('renders post-creation-poll-area-inner-div', () => {
        render(<PostCreationPollArea />);
        const pollAreaInnerDiv = screen.getByTestId('post-creation-poll-area-inner-div');
        expect(pollAreaInnerDiv).toBeInTheDocument();
    });
});
