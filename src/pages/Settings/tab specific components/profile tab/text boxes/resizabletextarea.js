import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * A text area component that supports resizing, character count limitation,
 * and updates its value when it loses focus. It dynamically updates its
 * character count as the user types and adjusts the internal value when the
 * provided initial text changes.
 *
 * @param {object} props - Component properties.
 * @param {number} props.maxCharacters - The maximum number of characters allowed.
 * @param {string} [props.initialText=''] - The initial text to display in the textarea.
 * @param {Function} [props.functio] - A function to call with the text value when the textarea loses focus.
 * @return {JSX.Element} A component consisting of a text area with character count limitation and dynamic updates.
 */
function ResizableTextArea({maxCharacters, initialText = '', functio, id}) {
    // State to keep track of the text area's temporary value
    const [tempValue, setTempValue] = useState(initialText);

    /**
     * Effect to synchronize the tempValue with the initialText whenever the
     * initialText prop changes. This ensures that the textarea reflects the
     * latest initial value provided.
     */
    useEffect(() => {
        setTempValue(initialText);
    }, [initialText]);

    /**
     * Handles changes to the text input field by updating the state with the value,
     * limited to a maximum number of characters specified by maxCharacters.
     *
     * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The event triggered by changing the text input field.
     */
    function handleTempChange(event) {
        setTempValue(event.target.value.slice(0, maxCharacters));
    }

    /**
     * Finalizes the input process by setting the confirmed text value from the temporary state,
     * logging the current value, and optionally calling an external function with the updated value.
     * This function is typically called when the input field loses focus.
     */
    function handleBlur() {
        // console.log(tempValue); // Log the temporary value for debugging
        if (functio) {
            functio('about', tempValue); // Call an external function to process the value further
        }
    }

    // Calculate the number of characters remaining based on the temporary text
    const charactersRemaining = maxCharacters - tempValue.length;

    return (
        <div style={{width: '100%', height: '100%'}}>
            <textarea id = {'text' + id}
                placeholder="About (optional)"
                maxLength={maxCharacters}
                rows="4"
                className="box-border block w-full rounded border border-solid
                border-[color:var(--newCommunityTheme-line)] bg-[color:var(--newCommunityTheme-body)]
                 p-2 text-[color:var(--newCommunityTheme-bodyText)]"
                style={{marginBottom: '0px', resize: 'both'}}
                value={tempValue}
                onChange={handleTempChange}
                onBlur={handleBlur}
            ></textarea>
            <div className="flex w-full">
                <div className='pt-[5px] text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]'>
                    {charactersRemaining} characters remaining
                </div>
            </div>
        </div>
    );
}

ResizableTextArea.propTypes = {
    maxCharacters: PropTypes.number.isRequired,
    initialText: PropTypes.string,
    functio: PropTypes.func,
    id: PropTypes.string,
};

export {ResizableTextArea};
