import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {Typography, Box} from '@mui/material';

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

const SettingsComponentDown = ({head, text, thirdComponent}) => {
    const handleChangeEmail = () => {
        console.log('Change email clicked');
        alert('Change email clicked');
    };

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
                borderRadius: '0px',
                border: '0px solid black',
            }}
        >
            <Box>
                <Typography variant="h6" gutterBottom style={{color: 'black',
                    fontSize: '16px', textAlign: 'left', fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}}>
                    {head}
                </Typography>
                <Typography variant="body1" style={{color: '#7c7c7c',
                    fontSize: '12px', textAlign: 'left', fontFamily: 'Arial, sans-serif'}}>
                    {text}
                </Typography>
            </Box>
            <Box
                sx={{
                    alignSelf: thirdComponent === 'Twitter' ? 'end' : 'start',
                    width: '100%',
                }}
            >
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
};

SettingsComponentDown.propTypes = {
    head: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    thirdComponent: PropTypes.string.isRequired,
};

export {SettingsComponentDown};
