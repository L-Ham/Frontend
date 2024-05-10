import React from 'react';
import {useToggle} from '../../../pop ups/togglecontext';
import PropTypes from 'prop-types';

/**
 * DeleteAccountButton function component for initiating the account deletion process.
 * This component renders a Material UI Button with a Delete icon.
 * Clicking the button logs a message to the console, and this is where deletion logic could be implemented.
 *
 * @return {React.Component} The DeleteAccountButton component rendering a styled button for account deletion.
 */
function DeleteAccountButton({id}) {
    const {setDisplayDelete} = useToggle();
    /**
     * Handles click events on the delete account button.
     * Logs a message to the console and placeholder for actual account deletion logic.
     */
    function handleClick() {
        // console.log('delete button is clicked');
        setDisplayDelete(true);

        // alert('delete button is clicked');
        // Placeholder for actual deletion logic
    }

    return (
        <button id = {'del' + id} className="flex cursor-pointer
         border-[none]  p-[initial] text-xs font-bold uppercase
         leading-6 tracking-[0.5px] text-[#ff585b]" onClick = {handleClick}>
            <svg className="mr-1 w-5 flex-none fill-[#ff585b]"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,
            0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"></path>
                <path d="M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,
            17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,
            0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,
            1.5,0Z"></path></svg>delete account</button>
    );
}

DeleteAccountButton.propTypes = {
    id: PropTypes.string,
};

export {DeleteAccountButton};
