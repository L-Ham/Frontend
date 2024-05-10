import React from 'react';
import {render, screen} from '@testing-library/react';

import {UnreadMessage} from '../../pages/Message/UnreadInbox/unreadmessage';
/*eslint-disable*/


describe('UnreadMessage', () => {
   

    it('should render the UnreadMessage component with the correct props', () => {
        const id = 1;
        const subject = 'Test Subject';
        const to = 'testuser';
        const message = 'Test message';
        const isEven = true;

        render(
            <UnreadMessage
                id={id}
                subject={subject}
                to={to}
                message={message}
                isEven={isEven}
            />,
        );

        // Assert that the component renders correctly
        expect(screen.getByTestId('message-message-unread')).toBeInTheDocument();

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

    
});
