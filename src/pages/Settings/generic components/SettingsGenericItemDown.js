import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Box} from '@mui/material';

// Import components
import {GenderMenu} from '../tab specific components/account tab/menus/GenderMenu';
import {ConnectToTwitterButton} from '../tab specific components/account tab/buttons/ConnectToTwitterButton';
import {ChangeButton} from '../general components/buttons/ChangeButton';
import {AppleButton} from '../tab specific components/account tab/buttons/AppleButton';
import {ToggleButton} from '../general components/buttons/ToggleButton';
import {DeleteAccountButton} from '../tab specific components/account tab/buttons/DeleteAccountButton';
import {LanguagesMenu} from '../tab specific components/account tab/menus/LanguagesMenu';
import {DisplayNameTextBox} from '../tab specific components/profile tab/text boxes/DisplayNameTextBox';
import {ResizableTextArea} from '../tab specific components/profile tab/text boxes/ResizableTextArea';
import {DoubleDropZone} from '../tab specific components/profile tab/image dropzones/DoubleDropZone';
import {BlockUserComponent} from '../tab specific components/safety and privacy/BlockUserComponent';

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
                {thirdComponent === 'text200' && <ResizableTextArea />}
                {thirdComponent === '2images' && <DoubleDropZone />}
                {thirdComponent === 'block' && <BlockUserComponent />}
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
