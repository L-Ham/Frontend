import React, {useState} from 'react';
import PropTypes from 'prop-types';


/**
 * Communitytoggle function component provides a UI element that allows users to toggle a setting on or off.
 * @return {JSX.Element} A button that toggles its state between on and off.
 */
function Communitytoggle({ontoggle}) { // Default value for header is an empty string if not provided
    const [isToggledOn, setIsToggledOn] = useState(false); // State variable to track toggle state
    const handleToggle = () => {
        setIsToggledOn(!isToggledOn); // Toggle the state of the button
        ontoggle(!isToggledOn);
    };

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

        <div className='relative float-right' data-testid="ijerfvhnbgeyjei">
            <button style={styles.button} onClick={handleToggle}
                id= 'commbutton' >
                <span style={styles.circle} data-testid="ieuwshgvfsygvxbdcfj">
                </span>
            </button>
        </div>

    );
}


// Define PropTypes
Communitytoggle.propTypes = {
    ontoggle: PropTypes.func.isRequired,
};


export {Communitytoggle};
