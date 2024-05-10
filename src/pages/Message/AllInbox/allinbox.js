import React from 'react';
import {ReadMessage} from './readmessage.js';
import {axiosInstance as axios} from '../../../requests/axios.js';
import {API_ROUTES} from '../../../requests/routes.js';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

/**
 * MessageSent component
 * @return {React.Component}
 */
export function AllInbox() {
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
        // console.log(sentMessages);
    }, [user.token]);

    const fetchsent = async () => {
        try {
            const response = await axios.get(API_ROUTES.allInbox);
            return response.data;
        } catch (e) {
            // console.error(e);
        }
    };
    return (
        <div className='m-0 block bg-none'>
            <div className='m-0 overflow-hidden border-b-0 bg-[var(--message-header)] p-0 text-[larger]'>
                <div className='m-0 inline p-0'>
                    <ul className='mx-0 my-[100px] mb-[20px] inline list-none p-0'>
                        <li className='m-0 inline p-0 font-bold '>
                            <a className='mx-2.5 my-0 ml-[150px] inline-block cursor-pointer
                            border-b-2 border-x-[none]
                            border-b-[var(--message-header-text)] border-t-[none] bg-transparent px-2.5 pb-[5px]
                            pt-0 font-normal capitalize text-[var(--message-header-text)]
                            ' href='/message/inbox/all' data-testid={`message-header-all`}>
                            All
                            </a>
                        </li>
                        <li className='m-0 inline p-0 font-bold '>
                            <a className='mx-2.5 my-0 inline-block cursor-pointer
                             border-x-[none]
                            border-t-[none] bg-transparent px-2.5 pb-[5px]
                            pt-0 font-normal capitalize text-[var(--message-header-text-high)]
                            ' href='/message/inbox/unread' data-testid={`message-header-unread`}>
                            Unread
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='mx-auto my-5 block
            w-[70%] min-w-[700px] list-none bg-[var(--message-content-odd)]
            text-[var(--message-content-text)]'>
                {
                    sentMessages?.map((message, index) => (
                        <ReadMessage
                            key={message.messageId}
                            id={message.messageId}
                            subject={message.subject}
                            to={message.sender}
                            message={message.message}
                            isEven={index % 2 === 0}
                            isRead={message.isRead}
                            createdAt={message.createdAt}
                        />

                    ))}
            </div>
        </div>
    );
}
