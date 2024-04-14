import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';


/**
 * ToggleButton function component provides a UI element that allows users to toggle a setting on or off.
 * It visually changes state when clicked and logs the state change to the console.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.header] - An optional header prop to describe the toggle's purpose. Not strictly required.
 * @return {React.Component} A button that toggles its state between on and off.
 */
function ToggleButton({header = '', func, init, id}) { // Default value for header is an empty string if not provided
    const [isToggledOn, setIsToggledOn] = useState(false);
    useEffect(() => {
        setIsToggledOn(init);
        console.log(init);
    }, [init]);

    /**
     * Handles the toggle functionality of the button.
     */
    function handleToggle() {
        setIsToggledOn(!isToggledOn); // Toggle the state
        console.log(`${header} is now ${!isToggledOn ? 'on' : 'off'}`);
        func();
        console.log(func);

        // alert(`${header} is now ${!isToggledOn ? 'on' : 'off'}`);
    }

    const styles = {
        button: {
            width: '37.5px',
            height: '24px',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            backgroundColor: isToggledOn ? '#007bff' : '#ccc',
            borderRadius: '28px',
            position: 'relative',
        },
        circle: {
            width: '19.5px',
            height: '19.5px',
            backgroundColor: '#fff',
            top: '2px',
            left: isToggledOn ? '18px' : '1px', // Adjusted for accurate toggle effect
            borderRadius: '59%',
            transition: 'left 0s', // Added transition time for smooth toggle effect
            position: 'absolute',
        },
    };

    return (
        <div className='relative float-right'>
            <button style={styles.button} onClick={handleToggle}
                id= 'toggleButton1' >
                <span style={styles.circle}>
                </span>
            </button>
        </div>
    );
}

// Define PropTypes
ToggleButton.propTypes = {
    header: PropTypes.string,
    func: PropTypes.func,
    init: PropTypes.bool,
    id: PropTypes.string,
};

export {ToggleButton};
