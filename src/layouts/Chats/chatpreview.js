import React from 'react';
import PropTypes from 'prop-types';
/*eslint-disable*/
function ChatPreview({sender, lastMessage, senderImageURL, date, onSelect, unreadTotal}) {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect();
        // console.log('Sender: ' + sender);
        // console.log('Last Message: ' + lastMessage);
        // console.log('Sender Image URL: ' + senderImageURL);
        // console.log('Date: ' + date);
    };

    return (
        <a onClick={handleClick} href="/room/!MxHlh0MiugoGF9z1iOaB1y8SRI2bpAMCkLPGAQi0B40:reddit.com"
            className="relative box-border flex min-h-[60px] flex-row items-center gap-[var(--spacer-xs)] border-[none] bg-[color:var(--color-tone-7)] px-[var(--spacer-sm)] py-[var(--spacer-xs)] text-left no-underline hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]">
            <span className="box-border size-[var(--size-xl)]">
                <span className="inline-flex items-center justify-center">
                    <span className="fp-avatar-container relative isolate box-border inline-flex size-8 rounded-full">
                        <span style={{background: 'var(--color-avatar-gradient)'}}
                            className="border-neutral-background h-100 w-100 relative box-border justify-center rounded-full border border-solid">
                            <span className="absolute bottom-0 left-0 z-[2] inline-flex size-8 shrink-0 justify-center">
                                <svg width="100%" height="100%" viewBox="0 0 121 122" xmlns="http://www.w3.org/2000/svg" className="overflow-hidden">
                                    <defs>
                                        <clipPath id="circle-clip">
                                            <circle cx="60.5" cy="61" r="60" />
                                        </clipPath>
                                    </defs>
                                    <image height="100%" width="100%" href={senderImageURL} alt="Sender Avatar" clipPath="url(#circle-clip)"></image>
                                </svg>
                            </span>
                        </span>
                    </span>
                </span>
            </span>
            <div className="flex flex-1 flex-col gap-[var(--spacer-4xs)] overflow-hidden">
                <div className="flex min-w-0 justify-between gap-[var(--spacer-xs)]">
                    <span className="truncate text-xs text-[color:var(--color-tone-1)]">{sender}</span>
                    <span className="whitespace-nowrap text-[0.65rem] text-[color:var(--color-tone-2)]">{date}</span>
                </div>
                <div className="flex min-w-0 justify-between gap-[var(--spacer-xs)]">
                    <span className="whitespace-nowrap text-[0.65rem] text-[color:var(--color-tone-2)]">{lastMessage}</span>
                    <div className="flex flex-nowrap items-center gap-[var(--spacer-xs)]"></div>
                </div>
            </div>
            {unreadTotal > 0 && (
                <div className="py-0.5 absolute right-4 top-[55%] -translate-y-1/2 rounded-full bg-blue-500 px-1 text-[8px] leading-none text-white">
                    {unreadTotal}
                </div>
            )}
        </a>
    );
}

ChatPreview.defaultProps = {
    sender: 'Unknown',
    lastMessage: 'No message available',
    senderImageURL: 'https://example.com/default-avatar.png',
    date: 'Unknown Date',
    unreadTotal: 0,
};

ChatPreview.propTypes = {
    sender: PropTypes.string,
    lastMessage: PropTypes.string,
    senderImageURL: PropTypes.string,
    date: PropTypes.string,
    unreadTotal: PropTypes.number,
};

export {ChatPreview};
