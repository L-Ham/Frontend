/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {RulesNotes} from '../../pages/RulesPage/Header/Notes/rulesnotes';

// Mock dependencies
jest.mock('../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

// Test 1
test('renders RulesNotes without crashing', () => {
    render(<RulesNotes />);
});

// Test 2
test('renders correct text in RulesNotes', () => {
    render(<RulesNotes />);
    const textElement = screen.getByText(/These are rules that visitors must follow to participate./i);
    expect(textElement).toBeInTheDocument();
});

// Test 3
test('RulesNotes has correct data-testid', () => {
    render(<RulesNotes />);
    const testIdElement = screen.getByTestId('rules-notes');
    expect(testIdElement).toBeInTheDocument();
});

// Test 4
test('RulesNotes has the correct styling', () => {
    render(<RulesNotes />);
    const styleElement = screen.getByTestId('rules-notes');
    expect(styleElement).toHaveClass('text-[14px]/[18px] font-[500] text-[var(--newCommunityTheme-bodyText)]');
});

// Test 5
test('RulesNotes has the expected class name', () => {
    render(<RulesNotes />);
    const classNameElement = screen.getByTestId('rules-notes');
    expect(classNameElement.className).toContain('text-[14px]/[18px]');
});

// Test 7
test('RulesNotes is visible to the user', () => {
    render(<RulesNotes />);
    const visibleElement = screen.getByTestId('rules-notes');
    expect(visibleElement).toBeVisible();
});


// Test 9
test('RulesNotes handles null data gracefully', () => {
    render(<RulesNotes rules={null} />);
    const textElement = screen.getByText(/These are rules that visitors must follow to participate./i);
    expect(textElement).toBeInTheDocument();
});

// Test 10
test('RulesNotes mentions maximum rule count', () => {
    render(<RulesNotes />);
    const maxRulesText = screen.getByText(/Communities can have a maximum of 15 rules./i);
    expect(maxRulesText).toBeInTheDocument();
});


