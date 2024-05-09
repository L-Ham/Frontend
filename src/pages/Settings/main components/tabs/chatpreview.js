import React from 'react';
/* eslint-disable */
// disable eslint for the whole file

/**
 * The chat preview component.
 * @component
 * @example
 * // Render the chat preview.
 * <ChatPreview />
 * @return {JSX.Element} The chat preview component.
 */
function ChatPreview() {
    return (
        <a href="/room/!MxHlh0MiugoGF9z1iOaB1y8SRI2bpAMCkLPGAQi0B40:reddit.com"
            className="items-center box-border flex flex-row gap-[var(--spacer-xs)] min-h-[60px] pt-[var(--spacer-xs)] pr-[var(--spacer-sm)] pb-[var(--spacer-xs)] pl-[var(--spacer-sm)] text-left no-underline border-[none] bg-[color:var(--color-tone-6)]">
            <span className="box-border h-[var(--size-xl)] w-[var(--size-xl)]">
                <span className="inline-flex items-center justify-center">
                    <span className="inline-flex relative fp-avatar-container box-border rounded-full w-[2rem] h-[2rem] isolate">
                        <span style={{ background: 'var(--color-avatar-gradient)' }}
                            className="rounded-full box-border border-solid border-neutral-background border relative h-100 w-100 justify-center">
                            <span className="absolute left-0 z-[2] bottom-0 inline-flex shrink-0 justify-center w-[2rem] h-[2rem]">
                                <svg width="100%" height="100%" viewBox="0 0 121 122" xmlns="http://www.w3.org/2000/svg" className="overflow-hidden">
                                    <defs>
                                        <clipPath id="0efdf0926b17e">
                                            <path d="M0 0V79L28.1628 105.5C35.013 115.465 46.4934 122 59.5 122C72.5066 122 83.987 115.465 90.8372 105.5L120.5 79V0H0Z"></path>
                                        </clipPath>
                                    </defs>
                                    <image height="100%" width="100%" href="https://styles.redditmedia.com/t5_683vv9/styles/profileIcon_snoo9c636f8d-a01b-4e18-a866-60f7c6107f8e-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=2b0fc564b8afef193c354c13965169d5c52bc477" alt="User Avatar" clipPath="url(#0efdf0926b17e)"></image>
                                </svg>
                            </span>
                        </span>
                    </span>
                </span>
            </span>
            <div className="flex-1 flex-col gap-[var(--spacer-4xs)] overflow-hidden flex">
                <div className="gap-[var(--spacer-xs)] justify-between min-w-0 flex">
                    <span className="text-[color:var(--color-tone-1)] overflow-hidden text-ellipsis whitespace-nowrap">Fahdseddik</span>
                    <span class="text-[color:var(--color-tone-2)] whitespace-nowrap">Apr 25</span>
                </div>
                <div className="gap-[var(--spacer-xs)] justify-between min-w-0 flex">
                    <span className="text-[color:var(--color-tone-2)] whitespace-nowrap">You: ba test</span>
                    <div className="items-center flex flex-nowrap gap-[var(--spacer-xs)]"></div>
                </div>
            </div>
        </a>
    );
}

export { ChatPreview };
