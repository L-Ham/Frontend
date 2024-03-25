import React from 'react';
import {Button} from '@mui/material';

/**
 * Renders a button with custom styles and a click handler.
 *
 * Upon clicking, it logs a message to the console. This component
 * demonstrates how to style Material UI components and handle events.
 *
 * @return {JSX.Element} The rendered ChangeButton component.
 */
function ChangeButton() {
    /**
   * Handles the click event for the ChangeButton component.
   * Currently, it logs a message to the console.
   */
    const handleClick = () => {
        console.log('Change Button clicked');
        // alert('Change Button clicked');
    };

    return (
        <Button
            variant="outlined"
            onClick={handleClick}
            sx={{
                'borderRadius': '20px',
                'textTransform': 'none',
                'color': '#1976d2',
                'backgroundColor': '#fff',
                'borderWidth': '2px',
                'borderColor': '#1976d2',
                '&:hover': {
                    borderColor: '#1976d2',
                    backgroundColor: '#e3f2fd',
                },
            }}
        >
    Change
        </Button>
    );
}

export {ChangeButton};
