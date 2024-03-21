import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {CommunityStatsItem} from '../../pages/subreddit/CommunityStatsItem';

describe('code snippet', () => {
    // Renders the component with correct props.
    it('should render the component with correct props', () => {
        // Arrange
        const item = {
            title: 'Test Title',
            text: 'Test Text',
            icon: 'online',
        };

        // Act
        const {container, getByText} = render(<CommunityStatsItem item={item} />);

        // Assert
        expect(getByText('Test Title')).toBeInTheDocument();
        expect(getByText('Test Text')).toBeInTheDocument();
        // Checking if there is one SVG element (for the icon)
        const svgIcons = container.querySelectorAll('svg');
        expect(svgIcons.length).toBe(1); // Should find the onlnie icon as an SVG
    });
});
