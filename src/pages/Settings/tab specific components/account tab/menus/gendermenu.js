import React from 'react';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// import {FormControl, Select, MenuItem} from '@mui/material';

/**
 * GenderMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The GenderMenu component rendering a select dropdown for gender identity selection.
 */
function GenderMenu({init, id}) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedGender, setSelectedGender] = useState('MAN');

    useEffect(() => {
        setSelectedGender(init);
    }, [init]);


    /**
 * Toggles the visibility state of a dropdown menu.
 */
    function toggleDropdown() {
        setShowDropdown(!showDropdown); // Assuming `showDropdown` is a boolean state variable
    }


    /**
 * Selects a gender and performs additional actions on selection.
 *
 * @param {string} gender - The gender value to set.
 */
    function selectGender(gender) {
        setSelectedGender(gender); // Set the selected gender state
        // func(gender); // Assuming `func` is a function that does something with the gender
        setShowDropdown(false); // Hide the dropdown after selection
    }

    // const [selection, setSelection] = useState('');

    // /**
    //  * Handles changing the selected gender identity from the dropdown menu.
    //  * Updates the component's state with the new selection and logs the selection to the console.
    //  *
    //  * @param {Object} event - The event object representing the change event on the select input.
    //  */
    // function handleChangeGender(event) {
    //     setSelection(event.target.value);
    //     // console.log(`${event.target.value} is now selected`);

    //     // alert(`${event.target.value} is now selected`);
    // }

    return (
        <div className='flex grow items-center justify-end'>
            <div className='ml-4 flex items-center'>
                <div className='cursor-pointer'>
                    <div className='flex items-center'>
                        <button id = {'b' + id} className='block w-full whitespace-nowrap
                        border-[none] fill-[var(--newRedditTheme-button)] p-1 text-left text-xs
                        font-bold uppercase leading-6 tracking-[0.5px] text-[color:var(--newRedditTheme-button)]'
                        onClick={toggleDropdown}>
                            {selectedGender ? selectedGender.toUpperCase():'UNKNOWN'}
                        </button>
                        <span id = {'span' + id} onClick={toggleDropdown}>
                            <svg
                                className="ml-0.5 inline-block
                                size-5 fill-[var(--newRedditTheme-actionIcon)] align-middle"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85">
                                </path>
                            </svg>
                        </span>
                    </div>
                    {showDropdown && (
                        <div className='absolute z-[1] overflow-hidden
                    rounded
                    border
                    border-solid border-[var(--newCommunityTheme-line)] bg-[color:var(--newCommunityTheme-body)]
                    text-[var(--newCommunityTheme-bodyText)]
                    shadow-[0_2px_4px_0_var(--newCommunityTheme-bodyTextAlpha20)]
                     first:border-none'
                        style={{
                            fontFamily: '"IBM Plex Sans", sans-serif',
                        }}
                        >
                            {['Woman', 'Man', 'Non-Binary',
                                'I Refer To Myself As...', 'I Prefer Not To Say'].map((gender) => (
                                <button id = {'button2' + id} key={gender} className='block w-full whitespace-nowrap
                                border-t border-solid
                            border-b-[none] border-t-[color:var(--newRedditTheme-line)]
                             fill-[var(--newRedditTheme-actionIcon)] p-2 text-left
                            text-sm
                            font-medium
                            capitalize
                            leading-[18px]
                            text-[color:var(--newRedditTheme-actionIcon)]
                             hover:bg-[color:var(--newRedditTheme-highlight)]
                              hover:fill-[var(--newRedditTheme-bodyText)]
                              hover:text-[color:var(--newRedditTheme-bodyText)]'
                                onClick={() => selectGender(gender)}>
                                    <div className='inline-block'>{gender}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export {GenderMenu};

GenderMenu.propTypes = {
    init: PropTypes.string,
    id: PropTypes.string,
};
