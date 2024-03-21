import React from 'react';
import {render} from '@testing-library/react';
import {expect, describe, it} from '@jest/globals';
import {SpoilInstructions} from '../../pages/subreddit/SpoilInstructions';

describe('code snippet', () => {
    // Renders the component with the correct title and instructions.
    it('should render the component with the correct title and instructions', () => {
        // Arrange
        const instructions = ['Instruction 1', 'Instruction 2'];

        // Act
        const {getByText} = render(<SpoilInstructions instructions={instructions} />);

        // Assert
        expect(getByText('DON\'T SPOIL OTHERS.')).toBeInTheDocument();
        expect(getByText('Instruction 1')).toBeInTheDocument();
        expect(getByText('Instruction 2')).toBeInTheDocument();
    });

    // The test should verify that the component renders correctly when the instructions prop is an empty array.
    it('should render the component with an empty list of instructions', () => {
        // Arrange
        const instructions = [];

        // Act
        const {getByText, queryAllByRole} = render(<SpoilInstructions instructions={instructions} />);

        // Assert
        expect(getByText('DON\'T SPOIL OTHERS.')).toBeInTheDocument();
        expect(queryAllByRole('listitem')).toHaveLength(0);
    });
});
