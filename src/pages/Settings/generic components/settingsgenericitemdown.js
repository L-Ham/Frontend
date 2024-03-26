import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@mui/material';


import {GenderMenu} from '../tab specific components/account tab/menus/gendermenu';
import {ConnectToTwitterButton} from '../tab specific components/account tab/buttons/connecttotwitterbutton';
import {ChangeButton} from '../general components/buttons/changebutton';
import {AppleButton} from '../tab specific components/account tab/buttons/applebutton';
import {ToggleButton} from '../general components/buttons/togglebutton';
import {DeleteAccountButton} from '../tab specific components/account tab/buttons/deleteaccountbutton';
import {LanguagesMenu} from '../tab specific components/account tab/menus/languagesmenu';
import {DisplayNameTextBox} from '../tab specific components/profile tab/text boxes/displaynametextbox';
import {ResizableTextArea} from '../tab specific components/profile tab/text boxes/resizabletextarea';
import {DoubleDropZone} from '../tab specific components/profile tab/image dropzones/doubledropzone';
import {BlockUserComponent} from '../tab specific components/safety and privacy tab/blockusercomponent';
import {SocialLinksButton} from '../tab specific components/profile tab/buttons/sociallinksbutton';

/**
 * SettingsGenericItemDown function component displays a settings
 *  item with a title, description, and a dynamically rendered
 * component based on the `thirdComponent` prop. Designed for
 *  settings that require more detailed information or interaction, presented in a columnar layout.
 *
 * @param {Object} props - Component props.
 * @param {string} props.head - The title of the setting item.
 * @param {string} props.text - The description of the setting item.
 * @param {string} props.thirdComponent - Identifier for the third component to render dynamically.
 * @return {React.Component} The rendered component for a generic settings item.
 */
function SettingsGenericItemDown({head, text, thirdComponent}) {
    /**
     * Handles the change email button click event.
     */
    function handleChangeEmail() {
        console.log('Change email button clicked');
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                width: '100%',
                margin: 'auto',
                backgroundColor: 'white',
                padding: '20px 0px',
            }}
        >
            <Box>
                <Typography variant="h6" gutterBottom sx={{color: 'black',
                    fontSize: '16px', textAlign: 'left', fontWeight: 'bold'}}>
                    {head}
                </Typography>
                <Typography variant="body1" sx={{color: '#7c7c7c', fontSize: '12px', textAlign: 'left'}}>
                    {text}
                </Typography>
            </Box>
            <Box sx={{alignSelf: thirdComponent === 'Twitter' ? 'end' : 'start', width: '100%'}}>
                {thirdComponent === 'Change' && <ChangeButton onClick={handleChangeEmail} />}
                {thirdComponent === 'GenderMenu' && <GenderMenu />}
                {thirdComponent === 'Languages' && <LanguagesMenu />}
                {thirdComponent === 'Twitter' && <ConnectToTwitterButton />}
                {thirdComponent === 'Apple' && <AppleButton />}
                {thirdComponent === 'Toggle' && <ToggleButton />}
                {thirdComponent === 'Delete' && <DeleteAccountButton />}
                {thirdComponent === 'text30' && <DisplayNameTextBox />}
                {thirdComponent === 'text200' && <ResizableTextArea maxCharacters={200} />}
                {thirdComponent === '2images' && <DoubleDropZone />}
                {thirdComponent === 'block' && <BlockUserComponent />}
                {thirdComponent === 'social' && <SocialLinksButton />}
            </Box>
        </Box>
    );
}

SettingsGenericItemDown.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string,
    thirdComponent: PropTypes.string.isRequired,
};

export {SettingsGenericItemDown};
