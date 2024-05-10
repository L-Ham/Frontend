import React, {useState} from 'react';

/* eslint-disable max-len */
/**
 * SettingsButton component.
 * @component
 * @example
 * // Render the SettingsButton.
 * <SettingsButton />
 * @return {JSX.Element} The SettingsButton component.
 */
function SettingsButton() {
    // State to control the visibility of the settings menu
    const [menuVisible, setMenuVisible] = useState(false);

    // Toggle the visibility of the menu when the button is clicked
    const toggleMenu = () => setMenuVisible(!menuVisible);

    const handleMuteNotifications = () => {
        // console.log('Muted notifications'); // Replace with actual functionality
        setMenuVisible(false); // Hide menu after action
    };

    const handleHideChat = () => {
        // console.log('Chat hidden'); // Replace with actual functionality
        setMenuVisible(false); // Hide menu after action
    };

    return (
        <div className="relative"> {/* Wrap everything in a container for relative positioning */}
            <button id='settinggss'
                className="button-medium
                icon  inline-flex items-center
                justify-center rounded-full p-1
                text-[color:var(--color-tone-2)] hover:bg-[var(--color-secondary-background-hover)]
                active:bg-[var(--color-interactive-pressed)]"

                type="button"
                aria-haspopup="true"
                aria-expanded={menuVisible ? 'true' : 'false'}
                onClick={toggleMenu}
            >
                <span className="flex items-center justify-center">
                    <span className="flex">
                        <svg fill="currentColor" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 0 1-.992-1.137v-1.073a.97.97 0 0 0-.627-.878A.98.98 0 0 0 6.1 17l-.755.753a1.149 1.149 0 0 1-1.521.1 10.16 10.16 0 0 1-1.671-1.671a1.149 1.149 0 0 1 .1-1.523L3 13.906a.97.97 0 0 0 .176-1.069.98.98 0 0 0-.887-.649H1.216A1.145 1.145 0 0 1 .079 11.2a9.1 9.1 0 0 1 0-2.393a1.145 1.145 0 0 1 1.137-.992h1.073a.97.97 0 0 0 .878-.627A.979.979 0 0 0 3 6.1l-.754-.754a1.15 1.15 0 0 1-.1-1.522a10.16 10.16 0 0 1 1.673-1.676a1.155 1.155 0 0 1 1.522.1L6.1 3a.966.966 0 0 0 1.068.176a.98.98 0 0 0 .649-.887V1.216A1.145 1.145 0 0 1 8.8.079a9.129 9.129 0 0 1 2.393 0a1.144 1.144 0 0 1 .991 1.137v1.073a.972.972 0 0 0 .628.878A.977.977 0 0 0 13.905 3l.754-.754a1.152 1.152 0 0 1 1.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 0 1-.1 1.522L17 6.1a.966.966 0 0 0-.176 1.068.98.98 0 0 0 .887.649h1.073a1.145 1.145 0 0 1 1.137.991a9.096 9.096 0 0 1 0 2.392a1.145 1.145 0 0 1-1.137.992h-1.073a.97.97 0 0 0-.878.627a.979.979 0 0 0 .176 1.068l.753.755a1.149 1.149 0 0 1 .1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 0 1-1.522-.1L13.906 17a.97.97 0 0 0-1.069-.176a.981.981 0 0 0-.65.887v1.073a1.144 1.144 0 0 1-.99 1.137A9.431 9.431 0 0 1 10 20Zm-.938-1.307a7.638 7.638 0 0 0 1.875 0v-.982a2.292 2.292 0 0 1 3.853-1.6l.693.693a8.796 8.796 0 0 0 1.326-1.326l-.693-.694a2.29 2.29 0 0 1 1.6-3.851h.982a7.746 7.746 0 0 0 0-1.876h-.982a2.213 2.213 0 0 1-2.034-1.4a2.223 2.223 0 0 1 .438-2.451l.694-.692a8.76 8.76 0 0 0-1.327-1.326l-.692.693a2.22 2.22 0 0 1-2.434.445a2.221 2.221 0 0 1-1.419-2.041v-.979a7.638 7.638 0 0 0-1.875 0v.982a2.213 2.213 0 0 1-1.4 2.034a2.23 2.23 0 0 1-2.456-.438l-.693-.693a8.757 8.757 0 0 0-1.326 1.327l.692.692a2.216 2.216 0 0 1 .445 2.434a2.22 2.22 0 0 1-2.041 1.418h-.982a7.746 7.746 0 0 0 0 1.876h.982a2.213 2.213 0 0 1 2.034 1.4a2.223 2.223 0 0 1-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.693a2.218 2.218 0 0 1 2.433-.445a2.22 2.22 0 0 1 1.418 2.041v.983ZM10 13.229a3.23 3.23 0 1 1 0-6.458a3.23 3.23 0 0 1 0 6.458Zm0-5.208a1.979 1.979 0 1 0 0 3.958a1.979 1.979 0 0 0 0-3.958" />
                        </svg>
                    </span>
                </span>
            </button>

            {menuVisible && (
                <div className=" absolute right-0 top-full z-50 box-border rounded bg-white shadow-lg"> {/* Positioned to the right of the button */}
                    <div
                        className=" flex items-center gap-2 p-2 text-[color:var(--color-tone-2)] hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]"
                        onClick={handleMuteNotifications}
                    >
                        <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 18h1a2 2 0 1 1-4 0h3ZM10 2.25a4.832 4.832 0 0 1 4.819 4.837v1.612a3.956 3.956 0 0 0 1.738 3.266 a2.7 2.7 0 0 1 1.192 2.235l1.143 1.143A1.1 1.1 0 0 0 19 14.88v-.672a3.95 3.95 0 0 0-1.737-3.278 a2.7 2.7 0 0 1-1.189-2.23 l-.005-1.61 a6.057 6.057 0 0 0-10.034-4.6l.9.9A4.763 4.763 0 0 1 10 2.25Zm8.558 17.192L15.115 16h-13A1.119 1.119 0 0 1 1 14.88v-.672a3.95 3.95 0 0 1 1.738-3.278A2.7 2.7 0 0 0 3.926 8.7V7.087a6 6 0 0 1 .332-1.936l-3.7-3.7.884-.893 18 18-.884.884Zm-4.693-4.692L5.282 6.166c-.064.302-.098.61-.1.919v1.614 a3.956 3.956 0 0 1-1.738 3.266 a2.7 2.7 0 0 0-1.194 2.243v.542h11.615Z"></path>
                        </svg>
            Mute Notifications
                    </div>
                    <div
                        className=" flex items-center gap-2 p-2 text-[color:var(--color-tone-2)] hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]"
                        onClick={handleHideChat}
                    >
                        <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.73 10.127c.004-.069.02-.135.02-.205 0-.721-.29-1.413-.806-1.922A2.768 2.768 0 0 0 10 7.203c-.071 0-.138.015-.208.02l-1.05-1.037c.405-.14.83-.214 1.258-.22 1.06 0 2.078.417 2.829 1.159A3.932 3.932 0 0 1 14 9.922c-.005.423-.08.843-.222 1.242l-1.049-1.037Zm7.187-.63a10.538 10.538 0 0 0-3.954-4.748A10.72 10.72 0 0 0 10 3c-1.297 0-2.584.227-3.8.673l.985.973A9.819 9.819 0 0 1 10 4.236a9.525 9.525 0 0 1 5.242 1.514 a9.368 9.368 0 0 1 3.519 4.128a9.186 9.186 0 0 1-2.526 3.455c-.047.04-.1.075-.148.114l.89.88c.024-.02.051-.037.075-.058a10.421 10.421 0 0 0 2.866-3.924c.11-.273.11-.576-.001-.849ZM3.724 3.541l12.73 12.584-.886.874-1.13-1.117a10.923 10.923 0 0 1-4.438.96 a10.804 10.804 0 0 1-7.476-2.956 a10.265 10.265 0 0 1-2.44-3.542 a1.117 1.117 0 0 1 0-.847 a10.35 10.35 0 0 1 3.453-4.392l-.7-.692.887-.872Zm9.766 11.403-1.59-1.57a3.936 3.936 0 0 1-1.9.502 a4.024 4.024 0 0 1-2.829-1.159A3.932 3.932 0 0 1 6 9.922c.004-.66.179-1.306.508-1.879L4.447 6.005a9.065 9.065 0 0 0-3.208 3.961a9.64 9.64 0 0 0 2.151 3.03a9.552 9.552 0 0 0 6.61 2.61a9.669 9.669 0 0 0 3.49-.66ZM7.25 9.922c 0 .72 .29 1.412 .806 1.922c .515.51 1.215.796 1.944.797c .333 0 .664-.063 .974-.183"></path>
                        </svg>
            Hide Chat
                    </div>
                </div>
            )}


        </div>
    );
}

export {SettingsButton};
