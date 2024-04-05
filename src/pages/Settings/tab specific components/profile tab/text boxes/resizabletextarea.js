import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import {TextField, Box} from '@mui/material';

/**
 * A text area component that supports resizing and character count limitation.
 *
 * @param {object} props - Component properties.
 * @param {number} props.maxCharacters - The maximum number of characters allowed.
 * @return {JSX.Element} A component consisting of a text area with character count limitation.
 */
function ResizableTextArea({maxCharacters}) {
    const [text, setText] = useState('');

    /**
     * Handles changes to the text area input.
     *
     * Updates the component's state with the new input value, ensuring
     * the text remains within the specified character limit.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event triggered upon changing the text input.
     */
    function handleTextChange(event) {
        setText(event.target.value);
    }

    const charactersRemaining = maxCharacters - text.length;

    return (
        <div>
            <textarea
                placeholder="About (optional)"
                maxLength="200"
                rows="4"
                className="mb-0 box-border block h-[99px] w-full resize
                 rounded border border-solid border-[color:var(--newCommunityTheme-line)]
                 bg-[color:var(--newCommunityTheme-body)] p-2 text-[color:var(--newCommunityTheme-bodyText)]"
                onChange={handleTextChange}
            >
                {text}
            </textarea>
            <div className="text-left text-xs text-[color:var(--newCommunityTheme-metaText)]">
                {charactersRemaining} characters remaining</div>
        </div>
    );
}

ResizableTextArea.propTypes = {
    maxCharacters: PropTypes.number.isRequired,
};

export {ResizableTextArea};
