import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const DeleteAccountButton = () => {
    const handleClick = () => {
        console.log('delete button is clicked');
    // alert('delete button is clicked');
    // actual logic for deletion should start here
    };

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
};

export {DeleteAccountButton};
