import React from 'react';
import {render, screen} from '@testing-library/react';
import {Header} from '../../pages/Message/Header/header';
/*eslint-disable*/
describe('Header', () => {
  it('should render the header with correct props', () => {
    const name = 'send';
    render(<Header name={name} />);

    const messageHeader = screen.getByTestId('message-header');
    expect(messageHeader).toBeInTheDocument();

    const sendLink = screen.getByTestId('message-header-send');
    expect(sendLink).toBeInTheDocument();
    expect(sendLink).toHaveTextContent('Send a private message');

    const inboxLink = screen.getByTestId('message-header-inbox');
    expect(inboxLink).toBeInTheDocument();
    expect(inboxLink).toHaveTextContent('Inbox');

    const sentLink = screen.getByTestId('message-header-sent');
    expect(sentLink).toBeInTheDocument();
    expect(sentLink).toHaveTextContent('Sent');
  });
});