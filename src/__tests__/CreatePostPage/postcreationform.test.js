/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {PostCreationForm} from '../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationform';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormFooter/postcreationformfooter', () => ({
    __esModule: true,
    PostCreationFormFooter: () => {
        return <div data-testid="post-creation-form-footer"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormSharingOptions/postcreationformsharingoptions', () => ({
    __esModule: true,
    PostCreationFormSharingOptions: () => {
        return <div data-testid="post-creation-form-sharing-options"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormTabs/postcreationformtabs', () => ({
    __esModule: true,
    PostCreationFormTabs: () => {
        return <div data-testid="post-creation-form-tabs"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/PostCreationFormWorkspace/postcreationformworkspace', () => ({
    __esModule: true,
    PostCreationFormWorkspace: () => {
        return <div data-testid="post-creation-form-workspace"/>;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/PostCreationForm/postcreationcontext', () => ({
    __esModule: true,
    PostCreationProvider: ({children}) => children,
}));

describe('PostCreationForm', () => {
    test('renders without crashing', () => {
        render(<PostCreationForm />);
        expect(screen.getByTestId('post-creation-form-div')).toBeInTheDocument();
    });

    test('renders PostCreationFormTabs', () => {
        render(<PostCreationForm />);
        expect(screen.getByTestId('post-creation-form-tabs')).toBeInTheDocument();
    });

    test('renders PostCreationFormWorkspace', () => {
        render(<PostCreationForm />);
        expect(screen.getByTestId('post-creation-form-workspace')).toBeInTheDocument();
    });

    test('renders PostCreationFormFooter', () => {
        render(<PostCreationForm />);
        expect(screen.getByTestId('post-creation-form-footer')).toBeInTheDocument();
    });

    test('renders PostCreationFormSharingOptions', () => {
        render(<PostCreationForm />);
        expect(screen.getByTestId('post-creation-form-sharing-options')).toBeInTheDocument();
    });
});
