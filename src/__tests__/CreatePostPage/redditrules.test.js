import {render, screen} from '@testing-library/react';
import {RedditRules} from '../../pages/CreatePostPage/CreatePostPageSidebar/RedditRules/redditrules';
import {useRedditRules} from '../../pages/CreatePostPage/CreatePostPageSidebar/RedditRules/redditrules.hooks';

jest.mock('../../generic components/iconsmap', () => ({
    __esModule: true,
    getIconComponent: () => () => <div data-testid="posting-to-reddit-icon" />,
}));

jest.mock('../../pages/CreatePostPage/CreatePostPageSidebar/RedditRules/RedditRule/redditrule', () => ({
    __esModule: true,
    RedditRule: () => <div data-testid='reddit-rule'/>,
}));

describe('RedditRules', () => {
    const mockRules = [
        {title: 'Rule 1', description: 'Description 1'},
        {title: 'Rule 2', description: 'Description 2'},
        {title: 'Rule 2', description: 'Description 2'},
        {title: 'Rule 2', description: 'Description 2'},
        {title: 'Rule 2', description: 'Description 2'},
        {title: 'Rule 2', description: 'Description 2'},
        {title: 'Rule 2', description: 'Description 2'},
        {title: 'Rule 2', description: 'Description 2'},
    // Add more rules as needed
    ];

    beforeEach(() => {
        jest.spyOn(require('../../pages/CreatePostPage/CreatePostPageSidebar/RedditRules/redditrules.hooks.js'), 'useRedditRules').mockReturnValue({rules: mockRules});
    });

    it('renders without crashing', () => {
        render(<RedditRules />);
        expect(screen.getByTestId('reddit-rules-div')).toBeInTheDocument();
        expect(screen.getByTestId('reddit-rules-inner-div')).toBeInTheDocument();
        expect(screen.getByTestId('posting-to-reddit-icon')).toBeInTheDocument();
        expect(screen.getByTestId('reddit-rules-ol')).toBeInTheDocument();
        // get all rules with data-testi with 'reddit-rule' and check on length
        expect(screen.getAllByTestId('reddit-rule')).toHaveLength(mockRules.length);
    });

    // Add more tests as needed
});
