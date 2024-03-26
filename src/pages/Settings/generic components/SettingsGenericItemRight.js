import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@mui/material';
import {LanguagesMenu} from '../tab specific components/account tab/menus/LanguagesMenu';
import {GenderMenu} from '../tab specific components/account tab/menus/GenderMenu';
import {ConnectToTwitterButton} from '../tab specific components/account tab/buttons/ConnectToTwitterButton';
import {ChangeButton} from '../general components/buttons/ChangeButton';
import {AppleButton} from '../tab specific components/account tab/buttons/AppleButton';
import {ToggleButton} from '../general components/buttons/ToggleButton';
import {DeleteAccountButton} from '../tab specific components/account tab/buttons/DeleteAccountButton';
import {MarkAsReadButton} from '../general components/buttons/MarkAsReadButton';
import {RedditMenu} from '../tab specific components/feed tab/RedditMenu';

/**
 * SettingsGenericItemRight displays a settings item with a title,
 *  description, and a dynamically loaded component to the right.
 * It supports various components like toggles, buttons, and custom menus based on the `thirdComponent` prop.
 *
 * @param {Object} props - Component props
 * @param {string} props.head - The title of the setting item
 * @param {string} props.text - The description of the setting item
 * @param {string} props.thirdComponent - The key for the dynamically loaded component
 * @return {React.Component} A React component representing a generic setting item.
 */
function SettingsGenericItemRight({head, text, thirdComponent}) {
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
            }}
        >
            <Box sx={{textAlign: 'left', marginRight: 'auto'}}>
                <Typography variant="h6" gutterBottom sx={{color: 'black', fontSize: '16px', fontWeight: 'bold'}}>
                    {head}
                </Typography>
                <Typography variant="body1" sx={{color: '#7c7c7c', fontSize: '12px'}}>
                    {text}
                </Typography>
            </Box>
            {/* Conditional rendering based on thirdComponent */}
            {thirdComponent === 'Change' && <ChangeButton />}
            {thirdComponent === 'GenderMenu' && <GenderMenu />}
            {thirdComponent === 'Languages' && <LanguagesMenu />}
            {thirdComponent === 'Twitter' && <ConnectToTwitterButton />}
            {thirdComponent === 'Apple' && <AppleButton />}
            {thirdComponent === 'Toggle' && <ToggleButton />}
            {thirdComponent === 'Delete' && <DeleteAccountButton />}
            {thirdComponent === 'mr' && <MarkAsReadButton />}
            {thirdComponent === 'rm' && <RedditMenu />}
        </Box>
    );
}

SettingsGenericItemRight.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    thirdComponent: PropTypes.string.isRequired,
};

export {SettingsGenericItemRight};
