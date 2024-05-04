import React from 'react';
import {render, screen} from '@testing-library/react';
import {Sent} from './sent';
/*eslint-disable*/

describe('Sent', () => {
    it('should render the Sent component with the correct props', () => {
        const id = 1;
        const subject = 'Test Subject';
        const to = 'testuser';
        const message = 'Test message';
        const isEven = true;

        render(
            <Sent
                id={id}
                subject={subject}
                to={to}
                message={message}
                isEven={isEven}
            />,
        );

        // Assert that the component renders correctly
        expect(screen.getByTestId('message-message-sent')).toBeInTheDocument();
    });

    // Add more test cases as needed
});