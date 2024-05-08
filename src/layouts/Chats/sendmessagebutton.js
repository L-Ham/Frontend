import React from 'react';
/* eslint-disable  */
/**
 * SettingsButton component.
 * @component
 * @example
 * // Render the SettingsButton.
 * <SettingsButton />
 * @return {JSX.Element} The SettingsButton component.
 */
function SendMessageButton({ sendMessage,image }) {
    const handleClick = async () => {
        if(image)
            {
                sendMessage(2);
            }
            else
            {
        sendMessage();
            }
            console.log('image',image);
    }
    return (
        <button onClick={handleClick} className="
button-medium button-plain
icon
button
inline-flex items-center
justify-center px-[var(--rem8)]" type="button">
            <span className="flex items-center justify-center">
                <span className="flex">
                    <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.885 8.994 1.988.545a1.125 1.125 0 0 0-1.54 1.443L3.821 10 .448 18.012a1.128 1.128 0 0 0 1.034 1.563c.176 0 .349-.041.506-.12l16.9-8.449a1.125 1.125 0 0 0 0-2.012h-.003Z"></path>
                    </svg>
                </span>
            </span>
        </button>
    );
}



export {SendMessageButton};
