import React from 'react';
import {useSelector} from 'react-redux';
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
    const user = useSelector((state) => state.user);
    // Correctly destructure useState return value
    const [sentMessages, setsentMessages] = useState([]);

    useEffect(() => {
        const fetchsentMessages = async () => {
            const sentmessages = await fetchsent();
            setsentMessages(sentmessages); // Correctly use setlinks to update state
            return sentmessages;
        };
        fetchsentMessages();
    }, [user.token]);

    const fetchsent = async () => {
        try {
            const response = await axios.get(API_ROUTES.sentMessages);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div className='m-0 block bg-none'>
            <div className='mx-auto my-5 block
            w-[70%] min-w-[700px] list-none bg-[#1a1a1b]
            text-[#d7dadc]'>
                {sentMessages?.map((message, index) => (
                    <Sent
                        key={message.messageId}
                        subject={message.subject}
                        to={message.receiver}
                        created={message.createdAt}
                        message={message.message}
                        isEven={index % 2 === 0}
                    />
                ))}
            </div>
        </div>
    );
}
