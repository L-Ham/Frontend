import React from 'react';
import {Button} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

const ConnectToTwitterButton = () => {
    const handleConnectToTwitter = () => {
        console.log('Twitter button is clicked');
    // alert('Twitter button is clicked');
    // more logic for actual connection should start here
    };

    return (
        <Button
            variant="contained"
            color="primary"
            startIcon={<TwitterIcon />}
            onClick={handleConnectToTwitter}
            style={{
                textTransform: 'none',
                borderRadius: '20px',
                color: 'white',
                padding: '8px 24px',
                fontWeight: 'bold',
                boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), ' +
                     '0px 2px 2px 0px rgba(0,0,0,0.14), ' +
                     '0px 1px 5px 0px rgba(0,0,0,0.12)',
                backgroundColor: '#1DA1F2',
            }}
        >
      Connect to Twitter
        </Button>
    );
};

export {ConnectToTwitterButton};
