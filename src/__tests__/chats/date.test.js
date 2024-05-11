import React from 'react';
import {render} from '@testing-library/react';
import {Date} from '../../layouts/Chats/messages/date.js';
import {describe, it, expect} from '@jest/globals';
import '@testing-library/jest-dom';

describe('Date Component', () => {
    it('renders the date passed as a prop', () => {
        const testDate = 'April 30, 2024';
        const {getByText} = render(<Date date={testDate} />);

        const displayedDate = getByText(testDate);
        expect(displayedDate).toBeInTheDocument();
    });

    it('renders "now" when no date is passed', () => {
        const {getByText} = render(<Date />);

        const defaultDate = getByText('now');
        expect(defaultDate).toBeInTheDocument();
    });
});

