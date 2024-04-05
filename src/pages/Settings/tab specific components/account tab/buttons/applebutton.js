import React from 'react';

/**
 * AppleButton function component creates a styled button intended to represent or initiate
 * a connection with Apple services. Upon clicking the button, a log message is displayed in
 * the console. This component demonstrates how to incorporate SVG graphics (in this case, an
 * Apple logo) directly within React component style definitions.
 *
 * @return {React.Component} A button with an Apple logo, styled to match Apple's branding.
 */
function AppleButton() {
    /**
     * Handles click events on the button, logging a confirmation message to the console.
     * This function serves as a placeholder for actual logic to connect to Apple services.
     */
    function handleClick() {
        console.log('apple button clicked');

        // alert('apple button clicked');
        // Placeholder for actual connection logic
    }

    return (
        <button onClick={handleClick} style={styles.button}>
            <div style={styles.logo}>
                <svg color="#ffffff" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d={`M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1` +
                    `024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.` +
                    `1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.5497 5 3.9478` +
                    `7 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7` +
                    `.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9` +
                    `794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C1` +
                    `5.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C` +
                    `14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.172` +
                    `28C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.` +
                    `5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z`}>
                    </path>
                </svg>
            </div>
            Connect to Apple
        </button>
    );
}

const styles = {
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        color: '#fff',
        padding: '8px 15px',
        borderRadius: '20px',
        justifyContent: 'center',
        backgroundColor: '#000',
        border: 'none',
        margin: '0',
        fontSize: '14px',
        fontWeight: 'bold',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: 'none',
        textTransform: 'none',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.25)',
    },
    logo: {
        width: '24px',
        borderRadius: '50%',
        marginRight: '8px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export {AppleButton};

