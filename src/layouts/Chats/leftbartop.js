import React, {useState} from 'react';
import PropTypes from 'prop-types';
/*eslint-disable*/
function LeftBarTop({ addingUser,filterChats }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleMenu = () => setMenuVisible(!menuVisible);
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    const handleMenuClick = (option) => {
        console.log(option);
        filterChats(option) // Handle the option here or propagate it up
        setDropdownVisible(false); // Hide the dropdown after selection
    };

    return (
        <div className="flex items-center px-4 py-3">
            <span className="text-lg font-bold leading-6">Chats</span>
            <button onClick={() => {
                toggleMenu();
                addingUser();
            }}
            className="ml-auto mr-1 box-border
                inline-flex h-[var(--button-height)] cursor-pointer items-center justify-center truncate rounded-[999px] border-[solid_var(--button-border-color,transparent)] px-[var(--rem6)] text-center leading-[calc(var(--button-height)_-_var(--button-border-width,0px)*2)] text-[color:var(--button-color-text)] no-underline shadow-[var(--button-shadow)] hover:bg-[var(--color-secondary-background-hover)] active:bg-[var(--color-interactive-pressed)]"
            >
                <span className="flex items-center justify-center">
                    <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.063 2.931A9.99 9.99 0 0 0 .123 8.444a9.883 9.883 0 0 0 1.195 6.49L.085 19.009a.729.729 0 0 0 .9.913l4.166-1.194a9.856 9.856 0 0 0 6.448 1.142 9.989 9.989 0 0 0 8.12-12.214 9.991 9.991 0 0 0-2.656-4.725Zm1.57 8.499a8.784 8.784 0 0 1-7.227 7.2 8.664 8.664 0 0 1-5.856-1.112l-.231-.139-3.762 1.078 1.118-3.691-.145-.238a8.655 8.655 0 0 1-1.172-5.893 8.751 8.751 0 1 1 17.275 2.8v-.005Zm-8.008-2.058h3.374v1.25h-3.375v3.379h-1.25v-3.376H6v-1.25h3.375V6.002h1.25v3.37Z" />
                    </svg>
                </span>
            </button>

            <div className="relative">
                <button
                    id="1"
                    className="ml-1 button-medium button-plain
                    icon button inline-flex items-center
                    justify-center rounded-full p-1
                    text-[color:var(--color-tone-2)] hover:bg-[var(--color-secondary-background-hover)]
                    active:bg-[var(--color-interactive-pressed)]"
                    aria-haspopup="true"
                    aria-expanded={dropdownVisible ? 'true' : 'false'}
                    onClick={toggleDropdown}
                >
                    <span className="flex items-center justify-center">
                        <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10,11.616l4.558-4.558.884.884-5,5a.624.624 0 0 1-.442.183Z" />
                        </svg>
                    </span>
                </button>

                {dropdownVisible && (
                    <div className="absolute right-0 top-full mt-1 py-1 w-48 bg-white rounded-md shadow-lg z-50">
                        <button onClick={() => handleMenuClick('all')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">All</button>
                        <button onClick={() => handleMenuClick('single')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Single</button>
                        <button onClick={() => handleMenuClick('group')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Group</button>
                    </div>
                )}
            </div>
        </div>
    );
}

LeftBarTop.propTypes = {
    addingUser: PropTypes.func.isRequired,
};

export { LeftBarTop };
