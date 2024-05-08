import {render, screen} from '@testing-library/react';
import {CommunityRules} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityRules/communityrules';
import {useCreatePostPage} from '../../pages/CreatePostPage/createpostpage.context';

jest.mock('../../pages/CreatePostPage/createpostpage.context', () => ({
    useCreatePostPage: jest.fn(),
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/CommunityRules/CommunityRule/communityrule', () => ({
    __esModule: true,
    CommunityRule: () => <div data-testid={`mock-community-rule`} />,
}));

describe('CommunityRules', () => {
    beforeEach(() => {
        useCreatePostPage.mockClear();
    });

    test('renders correctly when there are no rules', () => {
        useCreatePostPage.mockReturnValue({rules: null});
        render(<CommunityRules />);
        expect(screen.queryByTestId('community-rules-div')).toBeNull();
    });

    test('renders correctly when there are rules', () => {
        useCreatePostPage.mockReturnValue({rules: ['Rule 1']});
        render(<CommunityRules />);
        expect(screen.getByTestId('community-rules-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-rules-inner-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-rules-header-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-rules-header-inner-div')).toBeInTheDocument();
        expect(screen.getByTestId('community-rules-content-div')).toBeInTheDocument();
    });

    test('renders the correct number of CommunityRule components when there are rules', () => {
        useCreatePostPage.mockReturnValue({rules: ['Rule 1', 'Rule 2', 'Rule 3']});
        render(<CommunityRules />);
        expect(screen.getAllByTestId('mock-community-rule')).toHaveLength(3);
    });

    test('renders the correct data-testids when there are rules', () => {
        useCreatePostPage.mockReturnValue({rules: ['Rule 1', 'Rule 2']});
        render(<CommunityRules />);
        expect(screen.getAllByTestId('mock-community-rule')).toHaveLength(2);
    });
});
