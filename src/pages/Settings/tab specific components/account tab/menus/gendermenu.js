import React, {useState} from 'react';
import {FormControl, Select, MenuItem} from '@mui/material';

/**
 * GenderMenu function component for selecting a gender identity from a dropdown menu.
 * This component uses Material UI components to render a form control with a select dropdown.
 * The user's selected gender identity is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The GenderMenu component rendering a select dropdown for gender identity selection.
 */
function GenderMenu() {
    const [selection, setSelection] = useState('');

    /**
     * Handles changing the selected gender identity from the dropdown menu.
     * Updates the component's state with the new selection and logs the selection to the console.
     *
     * @param {Object} event - The event object representing the change event on the select input.
     */
    function handleChangeGender(event) {
        setSelection(event.target.value);
        console.log(`${event.target.value} is now selected`);

        // alert(`${event.target.value} is now selected`);
    }

    return (
        <FormControl>
            <Select
                value={selection}
                displayEmpty
                onChange={handleChangeGender}
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
                <MenuItem value={'Woman'}>Woman</MenuItem>
                <MenuItem value={'Man'}>Man</MenuItem>
                <MenuItem value={'Non-Binary'}>Non-Binary</MenuItem>
                <MenuItem value={'Self-Define'}>I Refer To Myself As...</MenuItem>
                <MenuItem value={'Prefer-Not-to-Say'}>I Prefer Not To Say</MenuItem>
            </Select>
        </FormControl>
    );
}

export {GenderMenu};
