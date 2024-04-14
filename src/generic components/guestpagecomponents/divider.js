import React from 'react';

import PropTypes from 'prop-types';

// ... rest of your code ...


const Divider = ({length}) => {
    const dividerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        margin: '20px 0',
    };

    const lineStyle = (length) => ({
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: `${length}px`, // Set the length in pixels
        border: 'none',
        borderTop: '1px solid #ccc',
        margin: '0 10px',
    });

    const textStyle = {
        padding: '0 10px',
        background: '#fff',

        fontsize: '6px',
        fontweight: '1000',
        lineheight: '18px',
        color: '#878a8c',
    };

    return (
        <div style={dividerStyle}
            data-testid="divider"
        >
            <hr style={lineStyle(length / 2)} />
            <span style={textStyle}>OR</span>
            <hr style={lineStyle(length / 2)} />
        </div>
    );
};
Divider.propTypes = {
    length: PropTypes.number,
};
export {Divider};
