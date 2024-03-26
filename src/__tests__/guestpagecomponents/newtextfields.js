import React, {useState} from 'react';
import PropTypes from 'prop-types';

const InputField = ({placeholder}) => {
    const [isActive, setIsActive] = useState(false);

    const handleFocus = () => setIsActive(true);
    const handleBlur = (e) => {
        if (!e.target.value) {
            setIsActive(false);
        }
    };

    // Styles
    const styles = {
        container: {
            position: 'relative',
            padding: '15px 0',
            margin: '10px 0',
            width: '100%',
            maxWidth: '275px', // Set max-width to 275px
            textAlign: 'left',
        },
        input: {
            width: '100%',
            border: '1px solid #ccc', // Border properties added here
            borderRadius: '5px', // Border radius for rounded corners
            background: isActive ? '#fff' : '#fcfcfb',
            padding: '10px',
            outline: 'none',
            transition: 'background-color 0.3s',
            boxSizing: 'border-box', // Ensure padding is included in width
            position: 'relative', // Ensure proper positioning of the dot
        },
        placeholder: {
            position: 'absolute',
            top: isActive ? '20px' : '28px',
            left: isActive ? '10px' : '10px',
            transition: 'top 0.3s, left 0.3s',
            color: isActive ? '#999' : '#999',
            fontSize: isActive ? '8px' : '12px',
            pointerEvents: 'none',
            paddingRight: '20px', // Adjust as needed
            maxWidth: 'calc(100% - 20px)', // Ensure the dot stays inside the input
        },
        dot: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '185px', // Adjust as needed
            width: '6px',
            height: '6px',
            background: '#24a0ed',
            borderRadius: '50%',
            transition: 'opacity 0.3s',
            opacity: isActive ? 0 : 1,

        },
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                style={styles.input}
            />
            <label style={styles.placeholder}>{placeholder}</label>
            <div style={styles.dot}></div>
        </div>
    );
};

InputField.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export {InputField};
