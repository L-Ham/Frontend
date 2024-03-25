import React, {useState} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {TextField, Box} from '@mui/material';

const ResizableTextArea = ({maxCharacters}) => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const charactersRemaining = maxCharacters - text.length;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 500,
            margin: 'auto',
            backgroundColor: 'white',
        }}>
            <TextField
                multiline
                placeholder="About (optional)"
                variant="outlined"
                InputProps={{
                    style: {resize: 'vertical', overflow: 'auto'},
                }}
                inputProps={{
                    maxLength: maxCharacters,
                }}
                value={text}
                onChange={handleTextChange}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        'fontSize': '1rem',
                        'backgroundColor': 'white',
                        '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.23)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'black',
                        },
                    },
                    '& .MuiOutlinedInput-multiline': {
                        padding: 0,
                    },
                }}
            />
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    alignItems: 'flex-end',
                    color: 'rgba(0, 0, 0, 0.6)',
                    justifyContent: 'space-between',
                    fontSize: '0.875rem',
                }}
            >
                <Box sx={{alignSelf: 'flex-start'}}>{charactersRemaining} Characters remaining</Box>
            </Box>
        </Box>
    );
};

ResizableTextArea.propTypes = {
    // Define prop types with default props
    maxCharacters: PropTypes.number,
};

ResizableTextArea.defaultProps = {
    // Set default props
    maxCharacters: 200,
};

export {ResizableTextArea};
