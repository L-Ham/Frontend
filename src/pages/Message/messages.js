import React from 'react';
import {Header} from './Header/header.js';
import {SendingMessage} from './SendingMessage/sengingmessage.js';
import {MessageSent} from './MessageSent/messagesent.js';
import {AllInbox} from './AllInbox/allinbox.js';
import {Footer} from './Footer/footer.js';
import PropTypes from 'prop-types';
import {UnreadInbox} from './UnreadInbox/unreadInbox.js';
/**
 * Messages component
 * @return {React.Component}
 * @param {string} name
 * @param {string} section
 */
export function Messages({name, section}) {
    return (
        <div className='order-2  box-border flex w-full flex-col  nd:col-start-2'
            style={{font: 'inherit'}} data-testid={`message-main`}>
            <div className=' z-0 m-0 block min-h-screen text-clip p-0
             text-[var(--message-text)]'
            style={{
                font: ' normal x-small verdana, arial, helvetica, sans-serif'}}>
                <Header name={name} section={section}
                />
                { name==='send' &&<SendingMessage/> }
                {name==='sent' && <MessageSent/>}
                {(name==='inbox'&& section==='all') && <AllInbox/>}
                {name==='inbox' && section==='unread' && <UnreadInbox/>}
                <Footer/>
            </div>

        </div>
    );
}
Messages.propTypes = {
    name: PropTypes.string,
    section: PropTypes.string,
};
