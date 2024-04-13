import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {useToggle} from '../../../pop ups/togglecontext.js';

/**
 * Renders a Material UI button with an icon and text that matches the provided design.
 *
 * @return {React.Component} The styled button component.
 */
function SocialLinksButton() {
    const {toggleSocial} = useToggle();
    return (
        <Button onClick={toggleSocial}
            variant="contained"
            disableRipple
            startIcon={<AddIcon />}
            style={{
                backgroundColor: '#edeff1',
                color: '#1c1c1c',
                boxShadow: 'none',
                paddingLeft: '10px', // Matching padding from list items for consistency
                paddingRight: '10px', // Adjusted to match list items for consistency
                textTransform: 'none',
                borderRadius: '20px',
                fontFamily: '"IBMPlexSans",Arial, sans-serif',
                fontWeight: '700',
                height: '37px', // Ensure this matches the height of your list items
                width: 'auto', // Adjust width to be auto for flexibility, or set a specific width if needed
                fontSize: '12px',
                border: '0px solid #cccccc',
                marginRight: '8px', // Add some margin if you want spacing between this and list items
            }}
        >
            Add social link
        </Button>
    );
}

export {SocialLinksButton};
