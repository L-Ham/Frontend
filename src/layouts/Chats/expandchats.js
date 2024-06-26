import React from 'react';
import PropTypes from 'prop-types';
/*eslint-disable*/
/**
 * ExpandChatsButton component.
 * @component
 * @example
 * // Render the ExpandChatsButton.
 * <ExpandChatsButton expandChats={someExpandFunction} />
 * @return {JSX.Element} The ExpandChatsButton component.
 */
function ExpandChatsButton({ expandChats }) {
    return (
        <button id = 'expand' onClick={expandChats} aria-label="Expand chats" className="
        button-medium button-plain
        icon button inline-flex items-center
        justify-center rounded-full p-1
        text-[color:var(--color-tone-2)] hover:bg-[var(--color-secondary-background-hover)]
        active:bg-[var(--color-interactive-pressed)]" type="button">
            <span className="flex items-center justify-center">
                <span className="flex">
                    <svg fill="currentColor" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 13H17v3.375A2.63 2.63 0 0 1 14.375 19H3.625A2.63 2.63 0 0 1 1 16.375V5.625A2.629 2.629 0 0 1 3.625 3H7v1.25H3.625A1.377 1.377 0 0 0 2.25 5.625v10.75a1.377 1.377 0 0 0 1.375 1.375h10.75a1.377 1.377 0 0 0 1.375-1.375V13Zm2.625-12h-5v1.25h3.491l-8.433 8.433.884.884 8.433-8.433v3.491H19v-5A.625.625 0 0 0 18.375 1Z"></path>
                    </svg>
                </span>
            </span>
        </button>
    );
}

// Prop validation
ExpandChatsButton.propTypes = {
    expandChats: PropTypes.func.isRequired,
};

export { ExpandChatsButton };
