import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * ToggleButton function component provides a UI element that allows users to toggle a setting on or off.
 * It visually changes state when clicked and logs the state change to the console.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.header] - An optional header prop to describe the toggle's purpose. Not strictly required.
 * @return {React.Component} A button that toggles its state between on and off.
 */
function ToggleButton({header = ''}) { // Default value for header is an empty string if not provided
    const [isToggledOn, setIsToggledOn] = useState(false);

    /**
     * Handles the toggle functionality of the button.
     */
    function handleToggle() {
        setIsToggledOn(!isToggledOn); // Toggle the state
        console.log(`${header} is now ${!isToggledOn ? 'on' : 'off'}`);
        // Uncomment the next line if you want to use an alert for feedback
        // alert(`${header} is now ${!isToggledOn ? 'on' : 'off'}`);
    }

    const styles = {
        button: {
            width: '52px',
            height: '28px',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            backgroundColor: isToggledOn ? '#007bff' : '#ccc',
            borderRadius: '28px',
            position: 'relative',
        },
        circle: {
            width: '25px',
            height: '25px',
            backgroundColor: '#fff',
            top: '2px',
            left: isToggledOn ? '25px' : '2px', // Adjusted for accurate toggle effect
            borderRadius: '50%',
            transition: 'left 0s', // Added transition time for smooth toggle effect
            position: 'absolute',
        },
    };

    return (
        <button style={styles.button} onClick={handleToggle}>
            <span style={styles.circle}></span>
        </button>
    );
}

// Define PropTypes
ToggleButton.propTypes = {
    header: PropTypes.string, // Optional prop, can be made required by adding .isRequired
};

export {ToggleButton};
