import React from 'react';
import {render, screen} from '@testing-library/react';
import {Rule} from '../../pages/subreddit/Rule';
import {expect, describe, test} from '@jest/globals';

describe('Rule component', () => {
    const mockNumber = 1;
    const mockRule = 'Mock Rule';
    const mockDescriptionList = ['Description 1', 'Description 2'];

    test('renders rule number and text', () => {
        render(<Rule number={mockNumber} rule={mockRule} descriptionList={mockDescriptionList} />);

        const ruleNumber = screen.getByText(mockNumber);
        const ruleText = screen.getByText(mockRule);

        expect(ruleNumber).toBeInTheDocument();
        expect(ruleText).toBeInTheDocument();
    });
});
