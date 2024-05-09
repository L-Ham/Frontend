/* eslint-disable */
import {render, screen} from '@testing-library/react';
import {ReasonsNotes} from '../../pages/RulesPage/Header/Notes/reasonsnotes';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext';

jest.mock('../../pages/RulesPage/rulespagecontext.js', () => ({
    __esModule: true,
    useRulesPage: jest.fn(),
}));

// Test 1
test('ReasonsNotes render without rules', () => {
    useRulesPage.mockReturnValue({rules: []});
    render(<ReasonsNotes />);
    const paragraphElement = screen.queryByTestId('reasons-notes-paragraph');
    expect(paragraphElement).toBeInTheDocument();
});

// Test 2
test('ReasonsNotes renders correctly with rules', () => {
    useRulesPage.mockReturnValue({rules: new Array(10)});
    render(<ReasonsNotes />);
    const paragraphElement = screen.getByTestId('reasons-notes-paragraph');
    expect(paragraphElement).toBeInTheDocument();
});

// Test 3
test('renders correct text in ReasonsNotes', () => {
    useRulesPage.mockReturnValue({rules: new Array(20)});
    render(<ReasonsNotes />);
    const textElement = screen.getByText(/Help people become better posters by giving a short reason why their post was removed./i);
    expect(textElement).toBeInTheDocument();
});

// Test 4
test('ReasonsNotes has the correct styling', () => {
    useRulesPage.mockReturnValue({rules: new Array(5)});
    render(<ReasonsNotes />);
    const styleElement = screen.getByTestId('reasons-notes-paragraph');
    expect(styleElement).toHaveClass('mb-[20px] flex text-[12px]/[16px] font-[400] text-[var(--newCommunityTheme-metaText)]');
});

// Test 5
test('ReasonsNotes displays correct rule count', () => {
    useRulesPage.mockReturnValue({rules: new Array(15)});
    render(<ReasonsNotes />);
    const countElement = screen.getByTestId('reasons-notes-counter');
    expect(countElement.textContent).toBe('15/50');
});

// Test 6
test('ReasonsNotes rule count span has correct data-testid', () => {
    useRulesPage.mockReturnValue({rules: new Array(30)});
    render(<ReasonsNotes />);
    const countElement = screen.getByTestId('reasons-notes-counter');
    expect(countElement).toBeInTheDocument();
});

// Test 7
test('ReasonsNotes is visible to the user', () => {
    useRulesPage.mockReturnValue({rules: new Array(25)});
    render(<ReasonsNotes />);
    const visibleElement = screen.getByTestId('reasons-notes-paragraph');
    expect(visibleElement).toBeVisible();
});

// Test 10
test('ReasonsNotes contains expected child elements', () => {
    useRulesPage.mockReturnValue({rules: new Array(10)});
    render(<ReasonsNotes />);
    const counterElement = screen.getByTestId('reasons-notes-counter');
    expect(counterElement).toBeInTheDocument();
});
