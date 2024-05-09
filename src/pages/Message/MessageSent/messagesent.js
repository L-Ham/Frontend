import React from 'react';
import {useEffect, useState} from 'react';
import {axiosInstance as axios} from '../../../requests/axios.js';
import {API_ROUTES} from '../../../requests/routes.js';
import {Sent} from './sent.js';
/*eslint-disable */
/**
 * MessageSent component
 * @return {React.Component}
 */
export function MessageSent() {
    // Correctly destructure useState return value
    const [sentMessages, setsentMessages] = useState([]);

    useEffect(() => {
        const fetchsentMessages = async () => {
            const sentmessages = await fetchsent();
            setsentMessages(sentmessages); // Correctly use setlinks to update state
            return sentmessages;
        };
        fetchsentMessages();
    }, []);

    const fetchsent = async () => {
        try {
            const response = await axios.get(API_ROUTES.sentMessages);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div className='m-0 block bg-none' data-testid={`message-cent`}>
        
            <div className='mx-auto my-5 block
            w-[70%] min-w-[700px] list-none bg-[var(--message-content-odd)]
            text-[var(--message-content-text)]'>
                {sentMessages?.map((message, index) => (
                    <Sent
                        key={message.messageId}
                        id={message.messageId}
                        subject={message.subject}
                        to={message.receiver}
                        created={message.createdAt}
                        message={message.message}
                        isEven={index % 2 === 0}
                        createdAt={message.createdAt}
                    />
                ))}
            </div>
        </div>
    );
}
