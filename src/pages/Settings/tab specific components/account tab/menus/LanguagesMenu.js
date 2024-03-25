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

const LanguagesMenu = () => {
    const [language, setLanguage] = useState('');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
        console.log(`${event.target.value} is now selected`);
    // alert(`${event.target.value} is now selected`);
    };

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
};

export {LanguagesMenu};
