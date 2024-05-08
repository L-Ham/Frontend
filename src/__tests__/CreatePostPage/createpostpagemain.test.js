import {render, screen} from '@testing-library/react';
import {CreatePostPageMain} from '../../pages/CreatePostPage/CreatePostPageMain/createpostpagemain.js';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/Header/header.js', () => ({
    __esModule: true,
    Header: () => <div data-testid="header" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/CommunityOptionsList/communityoptionslist.js', () => ({
    __esModule: true,
    CommunityOptionsList: () => <div data-testid="community-options-list" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/CommunityNote/communitynote.js', () => ({
    __esModule: true,
    CommunityNote: () => <div data-testid="community-note" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationform.js', () => ({
    __esModule: true,
    PostCreationForm: () => <div data-testid="post-creation-form" />,
}));

describe('CreatePostPageMain', () => {
    test('renders without crashing', () => {
        render(<CreatePostPageMain />);
    });

    test('renders header', () => {
        render(<CreatePostPageMain />);
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    });

    test('renders community options list', () => {
        render(<CreatePostPageMain />);
        const communityOptionsList = screen.getByTestId('community-options-list');
        expect(communityOptionsList).toBeInTheDocument();
    });

    test('renders community note', () => {
        render(<CreatePostPageMain />);
        const communityNote = screen.getByTestId('community-note');
        expect(communityNote).toBeInTheDocument();
    });

    test('renders post creation form', () => {
        render(<CreatePostPageMain />);
        const postCreationForm = screen.getByTestId('post-creation-form');
        expect(postCreationForm).toBeInTheDocument();
    });

    test('renders main div', () => {
        render(<CreatePostPageMain />);
        const mainDiv = screen.getByTestId('main-div');
        expect(mainDiv).toBeInTheDocument();
    });

    test('renders inner div', () => {
        render(<CreatePostPageMain />);
        const innerDiv = screen.getByTestId('inner-div');
        expect(innerDiv).toBeInTheDocument();
    });
});
