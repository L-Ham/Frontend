import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@mui/material';
import {LanguagesMenu} from '../tab specific components/account tab/menus/languagesmenu';
import {GenderMenu} from '../tab specific components/account tab/menus/gendermenu';
import {ConnectToTwitterButton} from '../tab specific components/account tab/buttons/connecttotwitterbutton';
import {ChangeButton} from '../general components/buttons/changebutton';
import {AppleButton} from '../tab specific components/account tab/buttons/applebutton';
import {ToggleButton} from '../general components/buttons/togglebutton';
import {DeleteAccountButton} from '../tab specific components/account tab/buttons/deleteaccountbutton';
import {MarkAsReadButton} from '../general components/buttons/markasreadbutton';
import {RedditMenu} from '../tab specific components/feed tab/redditmenu';
import {DropDownMenu} from '../tab specific components/chats tab/dropdownmenu';


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

            {thirdComponent === 'Change' && <ChangeButton />}
            {thirdComponent === 'GenderMenu' && <GenderMenu />}
            {thirdComponent === 'Languages' && <LanguagesMenu />}
            {thirdComponent === 'Twitter' && <ConnectToTwitterButton />}
            {thirdComponent === 'Apple' && <AppleButton />}
            {thirdComponent === 'Toggle' && <ToggleButton />}
            {thirdComponent === 'Delete' && <DeleteAccountButton />}
            {thirdComponent === 'mr' && <MarkAsReadButton />}
            {thirdComponent === 'rm' && <RedditMenu />}
            {thirdComponent === 'chatMenu' && <DropDownMenu />}
        </Box>
    );
}

SettingsGenericItemRight.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    thirdComponent: PropTypes.string.isRequired,
};

export {SettingsGenericItemRight};
