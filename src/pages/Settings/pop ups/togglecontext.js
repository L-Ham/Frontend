import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

// Create the context
const ToggleContext = createContext();

// Create a custom hook for using the context
export const useToggle = () => useContext(ToggleContext);

export const ToggleProvider = ({children}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [displaySocial, setDisplaySocial] = useState(false);
    const [displayNfsw, setDisplayNfsw] = useState(false);
    const [displaySocialTwo, setDisplaySocialTwo] = useState(false);
    const [displayConnectToGoogle, setDisplayConnectToGoogle] = useState(false);
    const [socialText, setSocialText] = useState('');
    const [socialIcon, setSocialIcon] = useState('');

    // Function to toggle the display state
    /**
 * Toggles the visibility state for a display element.
 */
    function toggleDisplay() {
        setIsDisplayed(!isDisplayed); // Assuming `isDisplayed` is a boolean state variable
    }

    /**
 * Toggles the visibility state for a social media element.
 */
    function toggleSocial() {
        setDisplaySocial(!displaySocial); // Assuming `displaySocial` is a boolean state variable
    }

    /**
 * Toggles the visibility state for NSFW content.
 */
    function toggleNfsw() {
        setDisplayNfsw(!displayNfsw); // Assuming `displayNfsw` is a boolean state variable
    }

    /**
 * Toggles the visibility state for a secondary social media element.
 */
    function toggleSocialTwo() {
        setDisplaySocialTwo(!displaySocialTwo); // Assuming `displaySocialTwo` is a boolean state variable
    }

    /**
     * Toggles the visibility state for connecting to Google.
     * @return {void}
     * */
    function toggleConnectToGoogle() {
        setDisplayConnectToGoogle(!displayConnectToGoogle);
        // Assuming `displayConnectToGoogle` is a boolean state variable
    }


    return (
        <ToggleContext.Provider value={{isDisplayed, toggleDisplay, displaySocial,
            toggleSocial, displayNfsw, toggleNfsw, displaySocialTwo, toggleSocialTwo,
            displayConnectToGoogle, toggleConnectToGoogle, setSocialText, setSocialIcon,
            socialIcon, socialText}}>
            {children}
        </ToggleContext.Provider>
    );
};

ToggleProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
