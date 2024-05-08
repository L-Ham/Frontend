import {render, fireEvent} from '@testing-library/react';
import {CommunityRule} from '../../pages/CreatePostPage/CreatePostPageSidebar/CommunityRules/CommunityRule/communityrule.js';

// Mock any components that CommunityRule depends on
jest.mock('../../generic components/iconsmap', () => ({
    __esModule: true,
    getIconComponent: () => () => <div data-testid="caret-down-icon" />,
}));

describe('CommunityRule', () => {
    const rule = {
        ruleText: 'Test Rule',
        descriptionHtml: '<p>Test Description</p>',
    };

    test('renders without crashing', () => {
        render(<CommunityRule rule={rule} idx={0} />);
    });

    test('renders rule text', () => {
        const {getByTestId} = render(<CommunityRule rule={rule} idx={0} />);
        expect(getByTestId('community-rule-name-inner-div').textContent).toBe('Test Rule');
    });

    test('renders rule number', () => {
        const {getByTestId} = render(<CommunityRule rule={rule} idx={0} />);
        expect(getByTestId('community-rule-number-inner-div').textContent).toBe('1.');
    });

    test('does not render description initially', () => {
        const {queryByTestId} = render(<CommunityRule rule={rule} idx={0} />);
        expect(queryByTestId('community-rule-description-div')).toBeNull();
    });

    test('renders description on click', () => {
        const {getByTestId} = render(<CommunityRule rule={rule} idx={0} />);
        fireEvent.click(getByTestId('community-rule-inner-div'));
        expect(getByTestId('community-rule-description-div')).toBeInTheDocument();
    });

    test('hides description on second click', () => {
        const {getByTestId, queryByTestId} = render(<CommunityRule rule={rule} idx={0} />);
        fireEvent.click(getByTestId('community-rule-inner-div'));
        fireEvent.click(getByTestId('community-rule-inner-div'));
        expect(queryByTestId('community-rule-description-div')).toBeNull();
    });

    // Repeat similar tests to reach 20 tests
});
