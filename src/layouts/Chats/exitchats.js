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
function ExitChats({show}) {
    return (

        <button onClick={()=>{
            show(false);
        }} id = 'exitchats' aria-label="Minimize chat" className="
        button-medium button-plain
        icon button inline-flex items-center
        justify-center rounded-full p-1
        text-[color:var(--color-tone-2)] hover:bg-[var(--color-secondary-background-hover)]
        active:bg-[var(--color-interactive-pressed)]" type="button">
            <span className="flex items-center justify-center">
                <span className="flex">
                    <svg fill="currentColor" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path> </svg></span>   </span>      </button>
    );
}

export {ExitChats};
