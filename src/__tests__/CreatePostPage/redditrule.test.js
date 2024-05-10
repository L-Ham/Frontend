/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {RedditRule} from '../../pages/CreatePostPage/CreatePostPageSidebar/RedditRules/RedditRule/redditrule';

// Mock dependencies
jest.mock('../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

describe('RedditRule', () => {
    const mockRules = Array.from({length: 20}, (_, i) => ({rule: `Rule ${i + 1}`}));

    mockRules.forEach((rule, index) => {
        test(`renders correctly with rule ${index + 1}`, () => {
            render(<RedditRule rule={rule} />);
            const ruleElement = screen.getByTestId('reddit-rule-li');
            expect(ruleElement).toBeInTheDocument();
            expect(ruleElement.textContent).toBe(rule.rule);
        });
    });
});
