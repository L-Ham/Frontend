import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
// disable eslint for the whole file

/**
 * The chat preview component.
 * @component
 * @example
 * // Render the chat preview.
 * <ChatPreview sender="Fahdseddik" lastMessage="You: ba test" senderImageURL="https://example.com/image.png" date="Apr 25" />
 * @param {string} sender - The name of the sender.
 * @param {string} lastMessage - The last message sent in the chat.
 * @param {string} senderImageURL - URL for the sender's avatar image.
 * @param {string} date - The date of the last message.
 * @return {JSX.Element} The chat preview component.
 */
function ChatPreview({ sender, lastMessage, senderImageURL, date, onSelect }) {
    const handleClick = (e) => {
        e.preventDefault();  // Prevents the browser default action (if the tag is <a>)
        e.stopPropagation(); // Stops the event from bubbling up the event chain
        onSelect();
        //console.log all prompts
       // console.log("Chat Name: " + chatName);
        console.log("Sender: " + sender);
        console.log("Last Message: " + lastMessage);
        console.log("Sender Image URL: " + senderImageURL);
        console.log("Date: " + date);
    };

    return (
        <a onClick={handleClick} href="/room/!MxHlh0MiugoGF9z1iOaB1y8SRI2bpAMCkLPGAQi0B40:reddit.com"
            className="items-center hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)] box-border flex flex-row gap-[var(--spacer-xs)] min-h-[60px] pt-[var(--spacer-xs)] pr-[var(--spacer-sm)] pb-[var(--spacer-xs)] pl-[var(--spacer-sm)] text-left no-underline border-[none] bg-[color:var(--color-tone-7)]">
            <span className="box-border h-[var(--size-xl)] w-[var(--size-xl)]">
                <span className="inline-flex items-center justify-center">
                    <span className="inline-flex relative fp-avatar-container box-border rounded-full w-[2rem] h-[2rem] isolate">
                        <span style={{ background: 'var(--color-avatar-gradient)' }}
                            className="rounded-full box-border border-solid border-neutral-background border relative h-100 w-100 justify-center">
                            <span className="absolute left-0 z-[2] bottom-0 inline-flex shrink-0 justify-center w-[2rem] h-[2rem]">
                                <svg width="100%" height="100%" viewBox="0 0 121 122" xmlns="http://www.w3.org/2000/svg" className="overflow-hidden">
                                    <defs>
                                        <clipPath id="circle-clip">
                                            <circle cx="60.5" cy="61" r="60" /> {/* Create a circular clipping path */}
                                        </clipPath>
                                    </defs>
                                    <image height="100%" width="100%" href={senderImageURL} alt="Sender Avatar" clipPath="url(#circle-clip)"></image>
                                </svg>
                            </span>
                        </span>
                    </span>
                </span>
            </span>
            <div className="flex-1 flex-col gap-[var(--spacer-4xs)] overflow-hidden flex">
                <div className="gap-[var(--spacer-xs)] justify-between min-w-0 flex">
                    <span className="text-[color:var(--color-tone-1)] text-xs overflow-hidden text-ellipsis whitespace-nowrap">{sender}</span>
                    <span class="text-[color:var(--color-tone-2)] text-[0.65rem] whitespace-nowrap">{date}</span>
                </div>
                <div class="gap-[var(--spacer-xs)] justify-between min-w-0 flex">
                    <span class="text-[color:var(--color-tone-2)] text-[0.65rem] whitespace-nowrap">{lastMessage}</span>
                    <div className="items-center flex flex-nowrap gap-[var(--spacer-xs)]"></div>
                </div>
            </div>
        </a>
    );
}

/**
 * Default values for the component's props.
 */
ChatPreview.defaultProps = {
    sender: "Unknown",
    lastMessage: "No message available",
    senderImageURL: "https://example.com/default-avatar.png",
    date: "Unknown Date",
};

/**
 * Prop types to ensure the component gets correct data.
 */
ChatPreview.propTypes = {
    sender: PropTypes.string,
    lastMessage: PropTypes.string,
    senderImageURL: PropTypes.string,
    date: PropTypes.string,
};

export { ChatPreview };
