import React from 'react';
import PropTypes from 'prop-types';
import {chatClasses} from './chat.styles';
import {useChat} from './chat.hooks';

/**
 * ChatButton component
 * @param {string} userId
 * @param {string} name
 * @return {React.Component}
 */
export function ChatButton({
    userId,
    name,
}) {
    const {
        ChatIcon,
    } = useChat();
    return (
        <a
            aria-label="Open chat"
            className={chatClasses.anchor}
            href={window.location.origin.replace('//', '//chat.')+`/user/${name}`}
            target="_blank" rel="noreferrer"
            data-testid={`chat-link-${userId}`}
        >
            <span className={chatClasses.iconWrapper} >
                <span className={chatClasses.icon} data-testid={`chat-icon-${userId}`}>
                    <ChatIcon />
                </span>
                <span className={chatClasses.text} data-testid={`chat-text-${userId}`}>Chat</span>
            </span>
        </a>
    );
}

ChatButton.propTypes = {
    userId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};