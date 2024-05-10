import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
/**
 * A text input component for entering a display name with a maximum character limit.
 * It provides real-time feedback on the number of characters remaining when the textbox loses focus.
 * The component uses local component state to manage the input value and calculate
 * the remaining characters allowed based on the MAX_CHARS limit.
 * @return {JSX.Element} The display name text box component. func is for post
 */
function DisplayNameTextBox({initialText = '', functio, id}) {
    // Initialize both inputValue and tempValue with f, defaulting to an empty string

    const [tempValue, setTempValue] = useState(initialText);

    const MAX_CHARS = 30;

    useEffect(() => {
        // Ensure tempValue and inputValue are updated if f changes

        setTempValue(initialText);
    }, [initialText]);

    /**
 * Updates the temporary input state based on the user's input.
 *
 * @param {Event} event - The event triggered by changing the input field.
 */
    function handleTempInputChange(event) {
        setTempValue(event.target.value); // Assuming `setTempValue` updates a state for temporary input storage
    }


    /**
 * Finalizes the input process by logging the temporary value, updating the final input value,
 * and triggering an external function with the new value.
 */
    function handleInputFinalize() {
        // console.log(tempValue); // Log the temporary input value
        functio('displayName', tempValue); // Assuming `functio` is a function that processes the input further
    }


    // Calculate characters remaining based on tempValue
    const charsRemaining = MAX_CHARS - tempValue.length;

    return (
        <div style={{width: '100%', height: '100%'}}>
            <input id = {'dn1' + id}
                placeholder="Display name (optional)"
                maxLength={MAX_CHARS}
                type="text"
                className="mb-2 box-border h-12 w-full rounded border
                border-solid border-[color:var(--newCommunityTheme-line)]
                 bg-[color:var(--newCommunityTheme-body)] pb-1 pl-3 pr-6
                  pt-3 text-[color:var(--newCommunityTheme-bodyText)]"
                value={tempValue} // Bind tempValue to input value
                onChange={handleTempInputChange}
                onBlur={handleInputFinalize}
            />
            <div className="pt-[5px] text-xs font-normal leading-4
            text-[color:var(--newCommunityTheme-metaText)]" style={{textAlign: 'left'}}>
                {charsRemaining} Characters remaining
            </div>
        </div>
    );
}

DisplayNameTextBox.propTypes = {
    initialText: PropTypes.string,
    functio: PropTypes.func,
    id: PropTypes.string,

};

export {DisplayNameTextBox};
