
import React from 'react';
import Button from '@mui/material/Button';
/**
 *
 * @return {JSX.Element} Google Icon
 */
const GoogleIcon = () => (
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/archive/5/51/20190725151512%21Google_%22G%22_logo.svg"
        alt="Google Icon"
        width="24"
        height="24"
        style={{marginRight: '10px'}} // Adjust the margin between icon and text
    />
);

const ContinueWithGoogleButton = () => {
    const handleGoogleLogin = () => {
    // Perform necessary front-end actions here
    // For demonstration purposes, let's log a message to the console
        console.log('Continue with Google button clicked');
    };

    return (
        <Button
            variant="contained"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin} // Add onClick event handler
            sx={{
                'backgroundColor': '#fff',
                'color': '#202124', // Google's grey text color
                '&:hover': {
                    backgroundColor: '#f8f9fa', // Light grey on hover
                },
                'textTransform': 'none',
                'borderRadius': '24px', // Make the button rounder
                'boxShadow': 'none',
                'border': '1px solid #dcdcdc', // Defined grey border
                '&:active': {
                    boxShadow: 'none',
                    backgroundColor: '#f8f9fa', // Light grey on active state
                    borderColor: '#f8f9fa',
                },
                '&:focus': {
                    boxShadow: '0 0 0 0.2rem rgba(66,133,244,.5)',
                },
                'width': '60%', // Decrease the width by 40%
                'maxWidth': '275px', // Adjust the maximum width to match TextField
            }}
        >
      Continue with Google
        </Button>
    );
};

export {ContinueWithGoogleButton};
