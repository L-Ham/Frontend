import React from 'react';
import {Button} from '@mui/material';
import PropTypes from 'prop-types';

/**
 * MarkAsReadButton function component renders a button styled with Material UI.
 * This button, when clicked, logs a message indicating its activation. It demonstrates
 * the application of custom styles to Material UI components, including adjustments to border radius,
 * color, and hover effects. This button could be used, for example, to mark notifications or messages as read.
 *
 * @return {React.Component} A Material UI Button component labeled "Mark as Read".
 */
function MarkAsReadButton({id}) {
    /**
     * Handles click events for the MarkAsReadButton.
     * It logs a message to the console upon click. This functionality can be extended
     * to perform actions such as marking notifications or messages as read in an application's context.
     */
    function handleClick() {
        console.log('Mark as read Button clicked');

        // alert('Mark as read Button clicked');
    }

    return (
        <Button
            id = 'markAsReadButton1'
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

// Prop validation
MarkAsReadButton.propTypes = {
    id: PropTypes.string,
};

export {MarkAsReadButton};
