import React from 'react';
import PropTypes from 'prop-types';
/**
 * ClearHistory function component renders a styled "Change" button using Material UI.
 * The button showcases custom styling options and logs a message to the console when clicked.
 * It serves as an example of event handling and component styling in React applications using Material UI.
 *
 * @return {React.Component} A styled Material UI Button component with an onClick event handler.
 */
function ClearHistory({id}) {
    /**
     * handleClick function to be executed when the button is clicked.
     * Logs a message to the console indicating that the button has been clicked.
     * This placeholder function can be expanded to include more complex logic,
     * such as initiating state changes or triggering application-specific actions.
     */
    function handleClick() {
        console.log('Change Button clicked');
        // alert('Change Button clicked');
    }

    return (
        <button id = {'cl' + id}
            onClick={handleClick}
            className='box-border min-h-[32px] w-auto min-w-[32px] border border-solid
            border-[var(--newCommunityTheme-button)] fill-[var(--newCommunityTheme-button)]
            px-4 py-1 text-center text-sm font-bold leading-[17px] tracking-[unset]
            text-[var(--newCommunityTheme-button)] hover:bg-[var(--newCommunityTheme-buttonAlpha05)]
            active:bg-[var(--newCommunityTheme-buttonAlpha10)]'
            style={{
                fontFamily: '"Noto Sans", sans-serif',
                textTransform: 'unset',
                borderRadius: '999px',
            }}
        >
            Clear history
        </button>
    );
}

// write prop validation
ClearHistory.propTypes = {
    id: PropTypes.string,
};

export {ClearHistory};
