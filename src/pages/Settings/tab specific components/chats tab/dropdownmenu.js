import React, {useState} from 'react';
import {FormControl, Select, MenuItem} from '@mui/material';

/**
 * DropDownMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The DropDownMenu component rendering a select dropdown for gender identity selection.
 */
function DropDownMenu() {
    const [selection, setSelection] = useState('');

    /**
     * Handles changing the selected setting  from the dropdown menu.
     * Updates the component's state with the new selection and logs the selection to the console.
     *
     * @param {Object} event - The event object representing the change event on the select input.
     */
    function handleChangeSetting(event) {
        setSelection(event.target.value);
        console.log(`${event.target.value} is now selected`);

        // alert(`${event.target.value} is now selected`);
    }

    return (
        <FormControl>
            <Select
                value={selection}
                displayEmpty
                onChange={handleChangeSetting}
                inputProps={{'aria-label': 'Without label'}}
                MenuProps={{
                    transitionDuration: 0,
                    MenuListProps: {
                        style: {
                            backgroundColor: 'white',
                            border: '1px solid black',
                        },
                    },
                }}
                sx={{
                    '& .MuiMenuItem-root': {
                        '&:not(:first-of-type)': {
                            borderTop: '4px solid #000000',
                        },
                    },
                }}
            >
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value={'Everyone'}>Everyone</MenuItem>
                <MenuItem value={'thirty'}>Accounts Older Than 30 Days</MenuItem>
                <MenuItem value={'none'}>Nobody</MenuItem>

            </Select>
        </FormControl>
    );
}

export {DropDownMenu};
