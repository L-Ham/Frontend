import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

/**
 * DeleteAccountButton function component for initiating the account deletion process.
 * This component renders a Material UI Button with a Delete icon.
 * Clicking the button logs a message to the console, and this is where deletion logic could be implemented.
 *
 * @return {React.Component} The DeleteAccountButton component rendering a styled button for account deletion.
 */
function DeleteAccountButton() {
    /**
     * Handles click events on the delete account button.
     * Logs a message to the console and placeholder for actual account deletion logic.
     */
    function handleClick() {
        console.log('delete button is clicked');
        // Optionally, uncomment the next line to show an alert with the click confirmation
        // alert('delete button is clicked');
        // Placeholder for actual deletion logic
    }

    return (
        <Button
            variant="text"
            startIcon={<DeleteIcon />}
            onClick={handleClick}
            style={{
                color: 'red',
                fontWeight: 'bold',
            }}
        >
            DELETE ACCOUNT
        </Button>
    );
}

export {DeleteAccountButton};
