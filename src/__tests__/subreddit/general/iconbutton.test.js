import {render, fireEvent} from '@testing-library/react';
import {IconButton} from '../../../pages/subreddit/CommunityAppearance/components/iconbutton';
import React from 'react';

jest.mock('../../../pages/subreddit/CommunityAppearance/components/svgicon', () => ({
    __esModule: true,
    SvgIcon: ({children}) => <div data-testid="svg-icon">{children}</div>,
}));

describe('IconButton', () => {
    const mockOnClick = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    for (let i = 0; i < 20; i++) {
        it(`renders correctly - test ${i}`, () => {
            const {getByTestId} = render(<IconButton onClick={mockOnClick} icon={<div />} className={`class-${i}`} id={`id-${i}`} />);
            expect(getByTestId('icon-button')).toBeInTheDocument();
            expect(getByTestId('icon-button-span')).toBeInTheDocument();
            expect(getByTestId('svg-icon')).toBeInTheDocument();
        });

        it(`renders with correct class name - test ${i}`, () => {
            const {getByTestId} = render(<IconButton onClick={mockOnClick} icon={<div />} className={`class-${i}`} id={`id-${i}`} />);
            expect(getByTestId('icon-button')).toHaveClass(`class-${i}`);
        });

        it(`renders with correct id - test ${i}`, () => {
            const {getByTestId} = render(<IconButton onClick={mockOnClick} icon={<div />} className={`class-${i}`} id={`id-${i}`} />);
            expect(getByTestId('icon-button')).toHaveAttribute('id', `id-${i}`);
        });

        it(`renders with correct icon - test ${i}`, () => {
            const {getByTestId} = render(<IconButton onClick={mockOnClick} icon={<div data-testid={`icon-${i}`} />} className={`class-${i}`} id={`id-${i}`} />);
            expect(getByTestId(`icon-${i}`)).toBeInTheDocument();
        });

        it(`calls onClick when clicked - test ${i}`, () => {
            const {getByTestId} = render(<IconButton onClick={mockOnClick} icon={<div />} className={`class-${i}`} id={`id-${i}`} />);
            fireEvent.click(getByTestId('icon-button'));
            expect(mockOnClick).toHaveBeenCalled();
        });
    }
});
