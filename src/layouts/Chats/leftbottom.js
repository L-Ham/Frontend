import React from 'react';
import {ChatPreview} from './chatpreview.js';
import PropTypes from 'prop-types';
/*eslint-disable*/

function LeftBottom({chatsToBottom, onSelectChat}) {
    // Check if chatsToBottom is empty
    if (Object.keys(chatsToBottom).length === 0) {
        return <div className="flex-1 p-4">No chats available.</div>;
    }

    return (
        <div className="flex-1">
            <div slot="leading-element"></div>
            {Object.entries(chatsToBottom).map(([chatId, chatData]) => {
                // Ensure chatData.messages is an array and get the last message safely
                const messages = Array.isArray(chatData.messages) ? chatData.messages : [];
                const lastMessage = messages.length > 0 ? messages[messages.length - 1] : undefined;
                const chatDisplayName = chatData.name; // Use the chat name from chatData

                // Check if lastMessage exists and has a valid time, otherwise use "now"
                const displayDate = lastMessage && lastMessage.time ? lastMessage.time : "now";

                // Use the chat's primary avatar if available, or the default avatar if not
                const senderImageURL = chatData.avatar || 'https://www.redditstatic.com/avatars/avatar_default_02_0079D3.png';

                return (
                    <ChatPreview
                        key={chatId}
                        sender={chatDisplayName}
                        lastMessage={lastMessage ? lastMessage.message : 'No messages yet'}
                        senderImageURL={senderImageURL}
                        date={displayDate}
                        chatName={chatDisplayName}
                        onSelect={() => {
                            console.log(chatId); // Logs the chat ID when the chat is selected
                            onSelectChat(chatId); // Calls the onSelectChat function with chatId as argument
                        }}
                    />
                );
            })}
        </div>
    );
}

// Properly validate the propTypes
LeftBottom.propTypes = {
    chatsToBottom: PropTypes.object.isRequired,
    onSelectChat: PropTypes.func.isRequired,
};

export {LeftBottom};
