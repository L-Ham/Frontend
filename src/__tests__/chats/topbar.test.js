import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {TopBar} from '../../layouts/Chats/topbar.js';
import {describe, expect, test, jest} from '@jest/globals';
import '@testing-library/jest-dom';

describe('TopBar Component Tests', () => {
    test('calls expand function on expand action', () => {
        const mockExpand = jest.fn();
        const {getByLabelText} = render(<TopBar expand={mockExpand} />);
        fireEvent.click(getByLabelText('Expand chats'));
        expect(mockExpand).toHaveBeenCalled();
    });
});
