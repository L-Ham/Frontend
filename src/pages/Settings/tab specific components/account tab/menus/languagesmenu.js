import React, {useState} from 'react';
import {styled, FormControl, Select, MenuItem} from '@mui/material';

const StyledFormControl = styled(FormControl)({
    'minWidth': 120,
    '& .MuiOutlinedInput-input': {
        padding: '10px',
        backgroundColor: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'blue',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'blue',
    },
});

const StyledMenuItem = styled(MenuItem)({
    '&:hover': {
        backgroundColor: '#e6f3ff',
    },
    '&.Mui-selected': {
        'backgroundColor': '#e6f3ff',
        '&:hover': {
            backgroundColor: '#e6f3ff',
        },
    },
});

/**
 * LanguagesMenu function component for selecting a language from a dropdown menu.
 * This component uses Material UI components to render a styled form control with a select dropdown.
 * The user's selected language is managed using React's useState hook, and changes are logged to the console.
 *
 * @return {React.Component} The LanguagesMenu component rendering a styled select dropdown for language selection.
 */
function LanguagesMenu() {
    const [language, setLanguage] = useState('');

    /**
     * Handles changing the selected language from the dropdown menu.
     * Updates the component's state with the new language and logs the selection to the console.
     *
     * @param {Object} event - The event object representing the change event on the select input.
     */
    function handleChangeLanguage(event) {
        setLanguage(event.target.value);
        console.log(`${event.target.value} is now selected`);
        // alert(`${event.target.value} is now selected`);
    }

    return (
        <StyledFormControl variant="outlined">
            <Select
                value={language}
                onChange={handleChangeLanguage}
                displayEmpty
                inputProps={{'aria-label': 'Without label'}}
            >
                <StyledMenuItem value={'English (US)'}>English (US)</StyledMenuItem>
                <StyledMenuItem value={'Deutsch'}>Deutsch</StyledMenuItem>
                <StyledMenuItem value={'Español (ES)'}>Español (ES)</StyledMenuItem>
                <StyledMenuItem value={'Español (MX)'}>Español (MX)</StyledMenuItem>
                <StyledMenuItem value={'Français'}>Français</StyledMenuItem>
            </Select>
        </StyledFormControl>
    );
}

export {LanguagesMenu};
