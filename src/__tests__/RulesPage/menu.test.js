/* eslint-disable */
import {render, screen, fireEvent} from '@testing-library/react';
import {Menu} from '../../pages/RulesPage/Header/Menu/menu';
import {useRulesPage} from '../../pages/RulesPage/rulespagecontext';

jest.mock('../../pages/RulesPage/rulespagecontext', () => ({
    useRulesPage: jest.fn(),
}));

describe('Menu Component', () => {
    const mockTabs = [
        {name: 'Rules', url: '/r/testsub/about/rules', type: 'rules'},
        {name: 'Removal Reasons', url: '/r/testsub/about/removal', type: 'removal-reasons'},
    ];

    beforeEach(() => {
        useRulesPage.mockReturnValue({
            name: 'testsub',
            type: 'rules', // Change this in some tests to 'removal-reasons'
        });
    });

    it('renders without crashing', () => {
        render(<Menu />);
        expect(screen.getByTestId('menu-container')).toBeInTheDocument();
    });

    it('displays the correct title', () => {
        render(<Menu />);
        expect(screen.getByTestId('menu-title')).toHaveTextContent('Rules and Removal Reasons');
    });

    it('renders all tabs', () => {
        render(<Menu />);
        mockTabs.forEach((tab) => {
            expect(screen.getByTestId(`menu-tab-${tab.name}`)).toBeInTheDocument();
        });
    });

    it('active tab should have correct background color for rules', () => {
        render(<Menu />);
        const activeTab = screen.getByTestId('menu-tab-Rules');
        expect(activeTab).toHaveStyle(`background-color: var(--color-secondary-background-selected)`);
    });

    it('inactive tab should be transparent for removal reasons', () => {
        useRulesPage.mockReturnValue({
            name: 'testsub',
            type: 'removal-reasons',
        });
        render(<Menu />);
        const inactiveTab = screen.getByTestId('menu-tab-Rules');
        expect(inactiveTab).toHaveClass('bg-transparent');
    });

    // Test navigation to each tab URL
    mockTabs.forEach((tab) => {
        it(`navigates to ${tab.url} when ${tab.name} is clicked`, () => {
            render(<Menu />);
            const linkElement = screen.getByTestId(`menu-tab-${tab.name}`);
            expect(linkElement).toHaveAttribute('href', tab.url);
        });
    });

    // Adding more tests to check for correct font properties, hover states, etc.
    it('checks font weight of tabs', () => {
        render(<Menu />);
        const tab = screen.getByTestId('menu-tab-Rules');
        expect(tab).toHaveClass('font-semibold');
    });

    // Test for responsiveness
    it('renders correctly on small screens', () => {
    // Resize window to small screen
        window.innerWidth = 320;
        window.innerHeight = 480;
        window.dispatchEvent(new Event('resize'));
        render(<Menu />);
    // Check if the menu is rendered correctly on small screens
    // This will depend on your implementation
    });

    // Test for hover effects
    it('changes style on hover', () => {
        render(<Menu />);
        const tab = screen.getByTestId('menu-tab-Rules');
        // Trigger hover event
        fireEvent.mouseOver(tab);
    // Check if the style changes on hover
    // This will depend on your implementation
    });

    // More detailed tests based on interactions
    it('changes active tab on click', () => {
        render(<Menu />);
        const tab = screen.getByTestId('menu-tab-Removal Reasons');
        fireEvent.click(tab);
    // Check if the active tab changes on click
    // This will depend on your implementation
    });
});

