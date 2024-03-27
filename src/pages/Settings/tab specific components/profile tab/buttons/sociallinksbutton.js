import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

/**
 * Renders a Material UI button with an icon and text that matches the provided design.
 *
 * @return {React.Component} The styled button component.
 */
function SocialLinksButton() {
    return (
        <Button
            variant="contained"
            startIcon={<AddIcon />}
            style={{
                backgroundColor: '#D3D3D3',
                color: 'black',
                boxShadow: 'none',
                paddingLeft: '12px',
                paddingRight: '24px',
                textTransform: 'none',
                borderRadius: '20px',


                border: '1px solid #cccccc',
            }}
        >
      Add social link
        </Button>
    );
}

export {SocialLinksButton};
