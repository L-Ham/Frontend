import React from 'react';
import {render, screen} from '@testing-library/react';
import {UnreadInbox} from '../../pages/Message/UnreadInbox/unreadInbox';
/*eslint-disable*/

describe('UnreadInbox', () => {
    it('should render the UnreadInbox component', () => {
        render(<UnreadInbox />);

        // Assert that the component renders correctly
        expect(screen.getByTestId('message-unreadinbox')).toBeInTheDocument();
    });
});
