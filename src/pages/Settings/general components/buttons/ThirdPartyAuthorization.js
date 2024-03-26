import React from 'react';
import PropTypes from 'prop-types';
import {Typography, IconButton, Box, Paper} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinkOffIcon from '@mui/icons-material/LinkOff';

/**
 * ThirdPartyAuthorization function component renders a UI element for managing third-party application authorizations.
 * It presents a user-friendly interface to navigate to detailed authorization settings and allows for actions like
 * revoking access. The component visually indicates its interactivity and navigational purpose.
 *
 * @param {Object} props - Component props.
 * @param {number} [props.spacing=2] - Controls the horizontal space between the text and the navigation icon.
 * @return {React.Component} A Material UI Paper component containing the authorization management options.
 */
function ThirdPartyAuthorization({spacing = 2}) {
    /**
     * handleNavigation function to be called upon user interaction with the component.
     * It is designed to initiate navigation to a detailed settings
     *  page or modal for managing third-party app authorizations.
     * Placeholder for actual navigation implementation.
     */
    function handleNavigation() {
        // Navigation logic placeholder
        console.log('Navigate to the third-party app authorization settings');
    }

    return (
        <Paper elevation={2} sx={{padding: 2, margin: 2, display: 'flex',
            alignItems: 'center', cursor: 'pointer', backgroundColor: '#ffffff'}}>
            <Typography variant="body1" color="primary" sx={{flexGrow: 1,
                display: 'flex', alignItems: 'center'}} onClick={handleNavigation}>
                Manage third-party app authorization
                <LinkOffIcon color="primary" sx={{ml: 1}} />
            </Typography>
            <Box sx={{flexGrow: 1, mr: spacing}} />
            <IconButton color="primary" onClick={handleNavigation} size="small">
                <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
        </Paper>
    );
}

ThirdPartyAuthorization.propTypes = {
    spacing: PropTypes.number,
};

export {ThirdPartyAuthorization};
