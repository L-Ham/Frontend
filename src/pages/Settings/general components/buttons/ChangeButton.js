import React from 'react';
import {Button} from '@mui/material';

/**
 * ChangeButton function component renders a styled "Change" button using Material UI.
 * The button showcases custom styling options and logs a message to the console when clicked.
 * It serves as an example of event handling and component styling in React applications using Material UI.
 *
 * @return {React.Component} A styled Material UI Button component with an onClick event handler.
 */
function ChangeButton() {
    /**
     * handleClick function to be executed when the button is clicked.
     * Logs a message to the console indicating that the button has been clicked.
     * This placeholder function can be expanded to include more complex logic,
     * such as initiating state changes or triggering application-specific actions.
     */
    function handleClick() {
        console.log('Change Button clicked');
        // Optional: Uncomment the line below to provide visual feedback via alert.
        // alert('Change Button clicked');
    }

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
