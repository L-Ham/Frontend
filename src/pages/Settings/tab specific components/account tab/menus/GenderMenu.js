import React, {useState} from 'react';
import {FormControl, Select, MenuItem} from '@mui/material';


const GenderMenu = () => {
    const [selection, setSelection] = useState('');


    const handleChangeGender = (event) => {
        setSelection(event.target.value);
        console.log(`${event.target.value} is now selected`);

        // alert(`${event.target.value} is now selected`);
    };


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
};

export {GenderMenu};
