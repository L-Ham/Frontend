import React from 'react';
import {describe, jest, it, expect} from '@jest/globals';
import {render, fireEvent} from '@testing-library/react';
import {JoinButton} from '../../../pages/subreddit/SubredditBanner/HeaderButtons/JoinButton/joinbutton';
import {useJoinButton} from '../../../pages/subreddit/SubredditBanner/HeaderButtons/JoinButton/joinbutton.hooks';

jest.mock('../../../pages/subreddit/SubredditBanner/HeaderButtons/JoinButton/joinbutton.hooks.js');

describe('JoinButton', () => {
    const mockHandleJoinClick = jest.fn();

    it('renders correctly when subscribed', () => {
        useJoinButton.mockReturnValue({
            handleClick: mockHandleJoinClick,
            buttonClasses: 'join-button subscribed',
            buttonLabel: 'Unsubscribe',
        });

        const {getByTestId} = render(
            <JoinButton
                subscribeLabel="Subscribe"
                unSubscribeLabel="Unsubscribe"
                handleJoinClick={mockHandleJoinClick}
                isSubscribed={true}
                isDisabled={false}
            />,
        );

        const button = getByTestId('join-button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('join-button subscribed');
        expect(button).toHaveTextContent('Unsubscribe');
        expect(button).not.toBeDisabled();

        fireEvent.click(button);
        expect(mockHandleJoinClick).toHaveBeenCalled();
    });

    it('renders correctly when not subscribed', () => {
        useJoinButton.mockReturnValue({
            handleClick: mockHandleJoinClick,
            buttonClasses: 'join-button',
            buttonLabel: 'Subscribe',
        });

        const {getByTestId} = render(
            <JoinButton
                subscribeLabel="Subscribe"
                unSubscribeLabel="Unsubscribe"
                handleJoinClick={mockHandleJoinClick}
                isSubscribed={false}
                isDisabled={false}
            />,
        );

        const button = getByTestId('join-button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('join-button');
        expect(button).toHaveTextContent('Subscribe');
        expect(button).not.toBeDisabled();

        fireEvent.click(button);
        expect(mockHandleJoinClick).toHaveBeenCalled();
    });

    it('renders correctly when disabled', () => {
        useJoinButton.mockReturnValue({
            handleClick: mockHandleJoinClick,
            buttonClasses: 'join-button',
            buttonLabel: 'Subscribe',
        });

        const {getByTestId} = render(
            <JoinButton
                subscribeLabel="Subscribe"
                unSubscribeLabel="Unsubscribe"
                handleJoinClick={mockHandleJoinClick}
                isSubscribed={false}
                isDisabled={true}
            />,
        );

        const button = getByTestId('join-button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('join-button');
        expect(button).toHaveTextContent('Subscribe');
        expect(button).toBeDisabled();
    });
});
