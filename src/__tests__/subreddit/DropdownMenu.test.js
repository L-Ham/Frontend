import React from 'react';
import {render, screen} from '@testing-library/react';
import {expect, describe, it, jest} from '@jest/globals';
import {DropdownMenu} from '../../generic components/DropdownMenu';


describe('code snippet', () => {
    // Renders the DropdownMenu component with menu items and active item.
    it('should render the DropdownMenu component with menu items and active item', () => {
    // Arrange
        const menuItems = [
            {
                content: {
                    text: 'low',
                    icon: 'notification',
                },
                onClick: jest.fn(),
            },
            {
                content: {
                    text: 'frequent',
                    icon: 'notification-frequent',
                },
                onClick: jest.fn(),
            },
        ];
        const activeItem = 'notification';

        // Act
        const {getByText} = render(<DropdownMenu menuItems={menuItems} activeItem={activeItem} />);

        // Assert
        expect(getByText('low')).toBeInTheDocument();
        expect(getByText('frequent')).toBeInTheDocument();
        // For "low", checking its parent element's className
        expect(getByText('low')).toBeInTheDocument();
        const lowParentClass = getByText('low').parentElement.className;
        expect(lowParentClass.includes('bg-[#251c00]')).toBe(true);

        // For "frequent", checking its parent element's className
        expect(getByText('frequent')).toBeInTheDocument();
        const frequentParentClass = getByText('frequent').parentElement.className;
        expect(frequentParentClass.includes('bg-[#251c00]')).toBe(false);
    });

    // Renders the DropdownMenu component with a empty menu items prop.
    it('should render the DropdownMenu component with a empty menu items prop', () => {
    // Arrange
        const menuItems = [];
        const activeItem = 'notification';

        // Act
        render(<DropdownMenu menuItems={menuItems} activeItem={activeItem} />);

        // Assert
        expect(screen.queryAllByRole('menuitem')).toHaveLength(0);
    });
});
