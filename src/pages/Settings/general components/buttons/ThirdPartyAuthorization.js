import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {Typography, IconButton, Box, Paper} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinkOffIcon from '@mui/icons-material/LinkOff';

/**
 * Renders a component for managing third-party app authorization.
 *
 * This component displays an option for users to manage third-party app authorization settings,
 * including revoking access. It includes navigation functionality, presumably to a detailed
 * settings page, and provides visual feedback that it's clickable.
 *
 * @param {Object} props - Component props.
 * @param {number} [props.spacing=2] - Optional spacing prop to control the space between
 * the text and the navigation icon.
 * @return {React.ReactElement} The rendered Paper component with authorization management option.
 */
function ThirdPartyAuthorization({spacing = 2}) {
    /**
     * Handles navigation to the authorization settings page or modal.
     * This function is meant to be expanded to include navigation logic,
     * such as using React Router for page navigation or opening a modal.
     */
    const handleNavigation = () => {
        // Placeholder for navigation logic
    };

    return (
        <Paper elevation={2} sx={{padding: 2, margin: 2, display:
        'flex', alignItems: 'center', cursor: 'pointer', backgroundColor: 'white'}}>
            <Typography color="primary" onClick={handleNavigation} sx={{display: 'flex', alignItems: 'center'}}>
                Manage third-party app authorization
                <LinkOffIcon color="primary" sx={{ml: 1}} />
            </Typography>
            <Box sx={{flexGrow: 1, mr: spacing}}></Box>
            <IconButton color="primary" onClick={handleNavigation} size="small">
                <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
        </Paper>
    );
}

// Define prop types for ThirdPartyAuthorization
ThirdPartyAuthorization.propTypes = {
    spacing: PropTypes.number, // Define spacing as an optional number
};

export {ThirdPartyAuthorization};
