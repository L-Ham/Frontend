import React from 'react';
import {Button} from '@mui/material';

/**
 * Renders a "Mark as Read" button.
 *
 * When clicked, this button logs a message to the console. It's styled with Material UI and demonstrates
 * custom styling options for buttons, including border radius, color, and hover effects.
 *
 * @return {JSX.Element} The rendered "Mark as Read" button.
 */
function MarkAsReadButton() {
    /**
   * Handles click events on the "Mark as Read" button.
   *
   * Currently, it logs a message to the console indicating that the button was clicked.
   * This function can be expanded to include more complex logic, such as updating a state
   * or sending a notification to mark a message or notification as read.
   */
    const handleClick = () => {
        console.log('Mark as read Button clicked');
    // Uncomment the following line to alert users upon click, if desired.
    // alert('Mark as read Button clicked');
    };

    return (
        <Button
            variant="outlined"
            onClick={handleClick}
            sx={{
                'borderRadius': '20px',
                'textTransform': 'none',
                'borderWidth': '2px',
                'borderColor': '#1976d2',
                'color': '#1976d2',
                'backgroundColor': '#fff',
                '&:hover': {
                    backgroundColor: '#e3f2fd',
                    borderColor: '#1976d2',
                },
            }}
        >
      Mark as Read
        </Button>
    );
}

export {MarkAsReadButton};
