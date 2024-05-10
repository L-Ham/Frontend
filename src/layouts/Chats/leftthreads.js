import React from 'react';

// disable eslint maxline length
/* eslint-disable  */

/**
 * The chat preview component.
 * @component
 * @example
 * // Render the chat preview.
 * <LeftBar />
 * @return {JSX.Element} The chat preview component.
 */
function LeftThreads({onSelect, chats = []}) {
    const chatsKeys = Object.keys(chats);  // Get all keys from the chats object

    const handleClick = () => {
        if (chatsKeys.length > 0) {
            // console.log("First chat key:", chatsKeys[0]);  // Log the first key
            onSelect(chatsKeys[0]);  // Trigger onSelect with the chatId of the first chat
        }
    };
    
    return (
        <div id = 'threads' onClick = {handleClick}  className="border-0 border-b border-solid border-b-[color:var(--color-tone-5)]">

            <div className="mb-2 flex flex-col">
 

                <li
                    className="relative mt-0 list-none " role="presentation">

                    <div tabIndex="0"
                        className="relative flex
                    cursor-pointer justify-between
                    gap-2 py-2
                     pl-4 text-[color:var(--color-secondary)]
                      -outline-offset-1  hover:bg-[var(--color-secondary-background-hover)]
                      hover:no-underline  active:bg-[var(--color-interactive-pressed)] "
                        style={{paddingRight: '16px'}}>
                        <span className="flex min-w-0 shrink items-center gap-2">
                            <span className="flex size-8
                              shrink-0 items-center justify-center text-xl leading-4">
                                <svg fill="currentColor"
                                    height="20" viewBox="0 0 20 20"
                                    width="20" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M13.3 7H3.065l5.024-5.023-.889-.884L1.058 7.24a.625.625 0 0 0 0 .884L7.2 14.27l.885-.884L2.952 8.25H13.3a4.417 4.417 0 0 1 4.45 4.375V17H19v-4.375A5.669 5.669 0 0 0 13.3 7Z">
                                    </path>
                                </svg> </span>

                            <span className="flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]">
                                <span className="leading-5">
                                    <span className="text-base leading-5 text-[color:var(--color-tone-1)]">
                       Threads
                                    </span></span> <span className="text-xs leading-4 text-[color:var(--color-secondary)]">

                                </span> </span>
                        </span>

                        <span className="flex shrink-0 items-center">
                            <span className="flex h-6 items-center justify-center">

                                <rs-notifications-badge classname="mr-xs" count="0"
                                    shouldshowfullcount=""></rs-notifications-badge>
                                <svg fill="currentColor"
                                    height="20"
                                    viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">

                                    <path d="m7.942 15.442-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 0 1 0 .884l-5 5Z">
                                    </path>
                                </svg>
                            </span> </span>
                    </div> </li>
            </div>

        </div>

    );
}

export {LeftThreads};
