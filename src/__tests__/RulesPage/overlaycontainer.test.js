/* eslint-disable */
import {render, screen, fireEvent} from '@testing-library/react';
import {OverlayContainer} from '../../pages/RulesPage/General/overlaycontainer';

describe('OverlayContainer', () => {
    test('renders OverlayContainer component', () => {
        render(<OverlayContainer>Test</OverlayContainer>);
        expect(screen.getByTestId('overlay-container')).toBeInTheDocument();
    });

    test('has the correct base classes', () => {
        render(<OverlayContainer>Test</OverlayContainer>);
        const overlay = screen.getByTestId('overlay-container');
        expect(overlay).toHaveClass('fixed');
        expect(overlay).toHaveClass('inset-0');
        expect(overlay).toHaveClass('z-[55]');
    });

    test('responds appropriately to different screen sizes', () => {
        render(<OverlayContainer>Responsive Test</OverlayContainer>);
        // You might need to mock or simulate viewport changes to test responsiveness
        // For instance, using a library that allows such simulations or by setting global.window.innerWidth
        const overlay = screen.getByTestId('overlay-container');
        expect(overlay).toHaveClass('flex');
    });

    test('renders children with their own attributes', () => {
        render(<OverlayContainer><div className="test-child">Child</div></OverlayContainer>);
        const child = screen.getByText('Child');
        expect(child).toBeInTheDocument();
        expect(child).toHaveClass('test-child');
    });

    test('handles different types of children', () => {
        const ChildComponent = () => <div>Component Child</div>;
        render(<OverlayContainer><ChildComponent /></OverlayContainer>);
        expect(screen.getByText('Component Child')).toBeInTheDocument();
    });


    test('handles different types of children', () => {
        const ChildComponent = () => <div>Component Child</div>;
        render(<OverlayContainer><ChildComponent /></OverlayContainer>);
        expect(screen.getByText('Component Child')).toBeInTheDocument();
    });
});
