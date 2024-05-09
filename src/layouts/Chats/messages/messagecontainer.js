import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
/*eslint-disable*/
function MessageContainer({ messages }) {
    const containerRef = useRef(null);

    const scrollToBottom = () => {
        setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
        }, 1000); // Delay of 100ms
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (!messages || !Array.isArray(messages)) {
        return <div>No messages available.</div>;
    }

    return (
        <div
            ref={containerRef}
            className='flex-[1_0_0px]'
            style={{
                overflowX: 'hidden',
                overflowY: 'auto',
            }}
        >
            <div>
                <div className='mt-auto'>
                    {messages.map((message, index) => (
                        <div key={index}>{message}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

MessageContainer.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export {MessageContainer};
