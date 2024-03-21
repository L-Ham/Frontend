import React from 'react';
import {render} from '@testing-library/react';
import {Rules} from '../../pages/subreddit/Rules';
import {expect, describe, it} from '@jest/globals';


describe('Rules', () => {
    const rules = [
        {
            title: 'Rule 1',
            description: ['Description for Rule 1'],
        },
        {
            title: 'Rule 2',
            description: ['Description for Rule 2'],
        },
    ];

    it('renders the rules correctly', () => {
        const {getByText} = render(<Rules rules={rules} />);

        rules.forEach((rule) => {
            expect(getByText(rule.title)).toBeInTheDocument();
            expect(getByText(rule.description)).toBeInTheDocument();
        });
    });
});
