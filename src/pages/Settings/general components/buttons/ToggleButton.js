import React, {useState} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ToggleButton = ({header}) => {
    const [isToggledOn, setIsToggledOn] = useState(false);

    const handleToggle = () => {
        setIsToggledOn(!isToggledOn);
        console.log(`${header} is now ${!isToggledOn}`);
        // Uncomment the next line if you want to use an alert.
        // alert(`${header} is now ${!isToggledOn}`);
    };

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
            left: isToggledOn ? '28px' : '2px',
            borderRadius: '50%',
            transition: 'left 0s',
            position: 'absolute',
        },
    };

    return (
        <button style={styles.button} onClick={handleToggle}>
            <span style={styles.circle}></span>
        </button>
    );
};

// Define PropTypes
ToggleButton.propTypes = {
    header: PropTypes.string, // Defines 'header' as a string. Use .isRequired if it's a required prop.
};

export {ToggleButton};
