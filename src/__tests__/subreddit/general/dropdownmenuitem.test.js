import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {DropdownMenuItem} from '../../../pages/subreddit/General/Components/DropdownMenu/DropdownMenuItem/dropdownmenuitem';
import {classes} from '../../../pages/subreddit/General/Components/DropdownMenu/DropdownMenuItem/dropdownmenuitem.styles';
import PropTypes from 'prop-types';

jest.mock('../../../pages/subreddit/SubredditBanner/BannerImage/bannerimage.js', () => ({
    __esModule: true,
    BannerImage: () => {
        return <div data-testid="banner-image"/>;
    },
}));

describe('DropdownMenuItem', () => {
    const mockOnClick = jest.fn();

    it('renders without crashing', () => {
        render(<DropdownMenuItem text="Test" onClick={mockOnClick} />);
    });

    it('renders all data-testid attributes', () => {
        const {getByTestId} = render(<DropdownMenuItem text="Test" onClick={mockOnClick} />);
        expect(getByTestId('list-item')).toBeInTheDocument();
        expect(getByTestId('item-container')).toBeInTheDocument();
        expect(getByTestId('content-container')).toBeInTheDocument();
        expect(getByTestId('text-container')).toBeInTheDocument();
        expect(getByTestId('gap-span')).toBeInTheDocument();
    });

    it('calls onClick when list item is clicked', () => {
        const {getByTestId} = render(<DropdownMenuItem text="Test" onClick={mockOnClick} />);
        fireEvent.click(getByTestId('list-item'));
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('adds active class when isActive is true', () => {
        const {getByTestId} = render(<DropdownMenuItem text="Test" onClick={mockOnClick} isActive={true} />);
        expect(getByTestId('item-container')).toHaveClass(classes.activeItem);
    });

    it('renders icon when icon prop is passed', () => {
        const {getByTestId} = render(<DropdownMenuItem text="Test" onClick={mockOnClick} icon={<div data-testid="icon"/>} />);
        expect(getByTestId('icon-container')).toBeInTheDocument();
    });

    it('renders text correctly', () => {
        const {getByText} = render(<DropdownMenuItem text="Test" onClick={mockOnClick} />);
        expect(getByText('Test')).toBeInTheDocument();
    });

    it('has correct propTypes defined', () => {
        expect(DropdownMenuItem.propTypes).toEqual({
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            isHidden: PropTypes.bool,
            icon: PropTypes.element,
            isActive: PropTypes.bool,
        });
    });
});
