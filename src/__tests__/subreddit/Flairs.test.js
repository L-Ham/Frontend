import React from 'react';
import {render, screen} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {Flairs, isLightColor} from '../../pages/subreddit/Flairs';

describe('Flairs component', () => {
    it('should render the flairs with correct colors and names', () => {
        // Arrange
        const name = 'testSubreddit';
        const expectedFlairs = [
            {name: 'Discussion', color: 'red'},
            {name: 'Theory', color: 'green'},
            {name: 'Powerscaling', color: 'yellow'},
            {name: 'Analysis', color: 'darkred'},
            {name: 'Fanart', color: 'purple'},
            {name: 'Cosplay', color: 'pink'},
            {name: 'Media', color: 'gray'},
            {name: 'Merchandise', color: 'blue'},
            {name: 'Big News', color: 'orange'},
        ];

        // Act
        render(<Flairs name={name} />);

        // Assert
        expectedFlairs.forEach((flair) => {
            expect(screen.getByText(flair.name)).toBeInTheDocument();
            expect(screen.getByText(flair.name)).toHaveStyle(`background-color: ${flair.color}`);
        });
    });

    it('should throw an error if the color of the flair is not recognized', () => {
        // Arrange
        const invalidColor = 'invalidColor';

        // Act & Assert
        expect(() => {
            isLightColor(invalidColor);
        }).toThrow('Color not recognized');
    });
});
