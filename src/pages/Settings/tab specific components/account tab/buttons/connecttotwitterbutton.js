import React from 'react';
import {Button} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

/**
 * ConnectToTwitterButton function component to create a button that initiates
 * a connection process to Twitter when clicked. This component utilizes Material UI
 * components to render a button styled specifically to resemble Twitter's branding.
 * The button includes an icon of Twitter and custom styles to match Twitter's theme.
 *
 * @return {React.Component} A button styled with Twitter's branding that logs a click event to the console.
 */
function ConnectToTwitterButton() {
    /**
     * Handles the button click event to initiate the connection process to Twitter.
     * This function logs a message to the console and is a placeholder for further connection logic.
     */
    function handleConnectToTwitter() {
        console.log('Twitter button is clicked');

        // alert('Twitter button is clicked');
        // Placeholder for the actual connection logic
    }

    return (
        <Button
            variant="contained"
            color="primary"
            className='min-h-[32px] min-w-[32px] px-4 py-1 text-sm font-bold leading-[17px] tracking-[unset]'
            startIcon={<TwitterIcon />}
            onClick={handleConnectToTwitter}
            style={{
                textTransform: 'none',
                borderRadius: '20px',
                color: 'white',
                padding: '4px 20px',
                fontWeight: 'bold',

                backgroundColor: '#1DA1F2',
            }}
        >
            Connect to Twitter
        </Button>
    );
}

export {ConnectToTwitterButton};
