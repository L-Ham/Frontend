import React, {useState} from 'react';
import {TextField, Button, Box} from '@mui/material';

/**
 * Represents a component for blocking a user.
 * Allows input of a user identifier and provides a button to trigger the block action.
 *
 * @return {JSX.Element} A component with a text field and a button for blocking a user.
 */
function BlockUserComponent() {
    const [inputValue, setInputValue] = useState(''); // for the user input

    /**
     * Handles changes to the input field.
     * Updates the component's state with the current input value.
     *
     * @param {Object} event - The input change event.
     */
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    /**
     * Handles click on the "ADD" button.
     * Logs the current input value as a blocked user.
     */
    function handleButtonClick() {
        console.log(`${inputValue} is blocked`);
        // Uncomment the next line to enable alert
        // alert(`${inputValue} is blocked`);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 1,
                width: '100%',
                maxWidth: 500,
                backgroundColor: 'white',
                boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
                border: '1px solid #ccc',
                borderRadius: '4px',
            }}
        >
            <TextField
                variant="standard"
                placeholder="BLOCK NEW USER"
                InputProps={{disableUnderline: true}}
                sx={{flex: 1, marginLeft: 1}}
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button
                variant="contained"
                sx={{marginX: 1, boxShadow: 'none'}}
                onClick={handleButtonClick}
            >
                ADD
            </Button>
        </Box>
    );
}

export {BlockUserComponent};
