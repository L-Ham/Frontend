import {render, screen} from '@testing-library/react';
import {CreatePostPage} from '../../pages/CreatePostPage/createpostpage';

jest.mock('../../pages/CreatePostPage/CreatePostPageMain/createpostpagemain.js', () => ({
    __esModule: true,
    CreatePostPageMain: () => {
        return <div data-testid="create-post-page-main" />;
    },
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/createpostpagesidebar.js', () => ({
    __esModule: true,
    CreatePostPageSidebar: () => {
        return <div data-testid="create-post-page-sidebar" />;
    },
}));

jest.mock('../../pages/CreatePostPage/createpostpage.context.js', () => ({
    __esModule: true,
    CreatePostPageProvider: ({children}) => {
        return <div data-testid="create-post-page-provider" >
            {children}
        </div>;
    },
}));

describe('CreatePostPage', () => {
    test('renders without crashing', () => {
        render(<CreatePostPage name="test" />);
    });

    test('renders CreatePostPageMain', () => {
        render(<CreatePostPage name="test" />);
        expect(screen.getByTestId('create-post-page-provider')).toBeInTheDocument();
    });

    test('renders CreatePostPageMain', () => {
        render(<CreatePostPage name="test" />);
        expect(screen.getByTestId('create-post-page-main')).toBeInTheDocument();
    });

    test('renders CreatePostPageSidebar', () => {
        render(<CreatePostPage name="test" />);
        expect(screen.getByTestId('create-post-page-sidebar')).toBeInTheDocument();
    });

    test('renders CreatePostPageSidebar', () => {
        render(<CreatePostPage name="test" />);
        expect(screen.getByTestId('main-div')).toBeInTheDocument();
    });
});
