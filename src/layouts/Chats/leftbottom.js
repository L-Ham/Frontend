import React from 'react';
import {ChatPreview} from './chatpreview.js';
import PropTypes from 'prop-types';
/*eslint-disable*/
function LeftBottom({chatsToBottom, onSelectChat}) {
    return (
        <div className="flex-1">
            <div slot="leading-element"></div>
            {Object.entries(chatsToBottom).map(([chatId, chatData]) => {
                const lastMessage = chatData.messages.slice(-1)[0]; // Get the last message
                const chatDisplayName = chatData.name; // Use the chat name from chatData

                // Check if lastMessage exists and has a valid time, otherwise use "now"
                const displayDate = lastMessage && lastMessage.time ? lastMessage.time : "now";

                return (
                    <ChatPreview
                        key={chatId}
                        sender={chatDisplayName} // Now using chatDisplayName
                        lastMessage={lastMessage ? lastMessage.message : 'No messages yet'} // Show 'No messages yet' if no message text is available
                        senderImageURL={lastMessage && lastMessage.avatar ? lastMessage.avatar : 'https://www.redditstatic.com/avatars/avatar_default_02_0079D3.png'} // Use specific or default avatar image
                        date={displayDate} // Set date to last message time or "now"
                        chatName={chatDisplayName} // Always display the user-friendly chat name
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
