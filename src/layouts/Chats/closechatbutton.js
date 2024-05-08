import React from 'react';
import PropTypes from 'prop-types';
// disable eslint maxline length
/* eslint-disable max-len */

/**
 * The chat preview component.
 * @component
 * @example
 * // Render the chat preview.
 * <LeftBar />
 * @return {JSX.Element} The chat preview component.
 */
function CloseChatButton({minimizeChat}) {
    return (

        <button onClick={minimizeChat} aria-label="Minimize chat" className="
        button-medium button-plain
        icon button inline-flex items-center
        justify-center rounded-full p-1
        text-[color:var(--color-tone-2)] hover:bg-[var(--color-secondary-background-hover)]
        active:bg-[var(--color-interactive-pressed)]" type="button">
            <span className="flex items-center justify-center">
                <span className="flex">
                    <svg fill="currentColor"
                        height="16"
                        viewBox="0 0 20 20" width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
                    </svg></span>   </span>      </button>
    );
}
// write prop validation
CloseChatButton.propTypes = {
    minimizeChat: PropTypes.func,
};
export {CloseChatButton};
