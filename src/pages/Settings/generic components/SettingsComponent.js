import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {Typography, Box} from '@mui/material';

import {LanguagesMenu} from '../tab specific components/account tab/menus/LanguagesMenu';
import {GenderMenu} from '../tab specific components/account tab/menus/GenderMenu';
import {ConnectToTwitterButton} from '../tab specific components/account tab/buttons/ConnectToTwitterButton';
import {ChangeButton} from '../general components/buttons/ChangeButton';
import {AppleButton} from '../tab specific components/account tab/buttons/AppleButton';
import {ToggleButton} from '../general components/buttons/ToggleButton';
import {DeleteAccountButton} from '../tab specific components/account tab/buttons/DeleteAccountButton';
import {MarkAsReadButton} from '../general components/buttons/MarkAsReadButton';
import {RedditMenu} from '../tab specific components/feed settings/RedditMenu';

const SettingsComponent = ({head, text, thirdComponent}) => {
    const handleChangeEmail = () => {
        console.log('Change email clicked');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                margin: 'auto',
                backgroundColor: 'white',
                padding: '20px 0px',
                borderRadius: '0px',
                border: '0px solid black',
            }}
        >
            <Box sx={{textAlign: 'left', marginRight: 'auto'}}>
                <Typography variant="h6" gutterBottom sx={{color: 'black',
                    fontSize: '16px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}}>
                    {head}
                </Typography>
                <Typography variant="body1" sx={{color: '#7c7c7c', fontSize: '12px', fontFamily: 'Arial, sans-serif'}}>
                    {text}
                </Typography>
            </Box>

            {/* Conditional rendering based on thirdComponent */}
            {thirdComponent === 'Change' && <ChangeButton onClick={handleChangeEmail} />}
            {thirdComponent === 'GenderMenu' && <GenderMenu />}
            {thirdComponent === 'Languages' && <LanguagesMenu />}
            {thirdComponent === 'Twitter' && <ConnectToTwitterButton />}
            {thirdComponent === 'Apple' && <AppleButton />}
            {thirdComponent === 'Toggle' && <ToggleButton header={head} />}
            {thirdComponent === 'Delete' && <DeleteAccountButton />}
            {thirdComponent === 'mr' && <MarkAsReadButton />}
            {thirdComponent === 'rm' && <RedditMenu />}
        </Box>
    );
};

// Define prop types for SettingsComponent
SettingsComponent.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    thirdComponent: PropTypes.string.isRequired,
};

export {SettingsComponent};
