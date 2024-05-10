import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {RedditMenu} from '../../pages/Settings/tab specific components/feed tab/redditmenu.js';
import '@testing-library/jest-dom';
import {describe, expect, it, jest, beforeEach} from '@jest/globals';

describe('RedditMenu', () => {
    const mockChangeVal = jest.fn();
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const changedItem = 'testItem';

    beforeEach(() => {
        mockChangeVal.mockClear();
    });

    it('renders correctly with initial value', () => {
        render(<RedditMenu list={options} changeVal={mockChangeVal}
            changedItem={changedItem} init="Option 1" id="test1" />);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    it('toggles dropdown on button click', () => {
        render(<RedditMenu list={options} changeVal={mockChangeVal}
            changedItem={changedItem} init="Option 1" id="test1" />);
        const button = screen.getByText('Option 1');
        fireEvent.click(button); // Open dropdown
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        fireEvent.click(button); // Close dropdown
        expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
    });

    it('handles item selection and function call', () => {
        render(<RedditMenu list={options} changeVal={mockChangeVal}
            changedItem={changedItem} init="Option 1" id="test1" />);
        const button = screen.getByText('Option 1');
        fireEvent.click(button); // Open dropdown
        const option = screen.getByText('Option 3');
        fireEvent.click(option); // Select option
        expect(screen.getByText('Option 3')).toBeInTheDocument();
        expect(mockChangeVal).toHaveBeenCalledWith('testItem', 'Option 3');
    });
});
