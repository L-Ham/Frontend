import React from 'react';
import {render, screen} from '@testing-library/react';
import {ReadMessage} from '../../pages/Message/AllInbox/readmessage';
/*eslint-disable*/

describe('ReadMessage', () => {
    it('should render the ReadMessage component with the correct props', () => {
        const id = 1;
        const subject = 'Test Subject';
        const to = 'testuser';
        const message = 'Test message';
        const isEven = true;

        render(
            <ReadMessage
                id={id}
                subject={subject}
                to={to}
                message={message}
                isEven={isEven}
            />,
        );

        // Assert that the component renders correctly
        expect(screen.getByTestId('message-message-read')).toBeInTheDocument();

        // Assert that the subject is rendered correctly
        expect(screen.getByText(subject)).toBeInTheDocument();

        // Assert that the "from" username is rendered correctly
        expect(screen.getByText(`/u/${to}`)).toBeInTheDocument();

        // Assert that the message content is rendered correctly
        expect(screen.getByText(message)).toBeInTheDocument();

        // Assert that the "Permalink" link is rendered correctly
        expect(screen.getByText('Permalink')).toBeInTheDocument();

        // Assert that the "Reply" link is rendered correctly
        expect(screen.getByText('Reply')).toBeInTheDocument();
    });

    // Add more test cases as needed
});
