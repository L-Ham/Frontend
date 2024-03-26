import React, {useState} from 'react';
import '../../../external css/DisplayNameInput.css';

const MAX_CHARS = 30;

/**
 * A text input component for entering a display name with a maximum character limit.
 * It provides real-time feedback on the number of characters remaining.
 * The component uses local component state to manage the input value and calculate
 * the remaining characters allowed based on the MAX_CHARS limit.
 * @return {JSX.Element} The display name text box component.
 */
function DisplayNameTextBox() {
    const [displayName, setDisplayName] = useState('');

    /**
     * Handles changes to the display name input field, updating the component's state.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event on the input field.
     */
    function handleChange(event) {
        setDisplayName(event.target.value);
    }

    // Calculate the number of characters remaining.
    const charsRemaining = MAX_CHARS - displayName.length;

    return (
        <div className="display-name-container">
            <input
                type="text"
                value={displayName}
                onChange={handleChange}
                id="displayName"
                maxLength={MAX_CHARS}
                className="display-name-input"
                placeholder="Display name (optional)"
                style={{background: 'white'}}
            />
            <div className="char-counter" style={{textAlign: 'left'}}>
                {charsRemaining} Characters remaining
            </div>
        </div>
    );
}

export {DisplayNameTextBox};
