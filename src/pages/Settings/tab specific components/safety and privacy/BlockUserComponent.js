import React, {useState} from 'react';
import {TextField, Button, Box} from '@mui/material';

const BlockUserComponent = () => {
    const [inputValue, setInputValue] = useState(''); // for the user input


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleButtonClick = () => {
        console.log(`${inputValue} is blocked`);
    // alert(`${inputValue} is blocked`);
    };

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
                value={inputValue} // sanve the user text input
                onChange={handleInputChange} // update the state var
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
};

export {BlockUserComponent};
