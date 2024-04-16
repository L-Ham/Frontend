/*eslint-disable*/
import React from 'react';
import {usePostCreation} from '../../../postcreationcontext.js';
import PropTypes from 'prop-types';
import './postcreationtextarea.css';
import {classes} from './postcreationtextarea.styles.js';


/**
 * Renders the text area for the post creation form.
 * @param {Object} props The component props.
 * @param {Function} props.setBorderColor The setBorderColor function.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationTextArea({setBorderColor}) {
    const {text, setText} = usePostCreation();

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
        <div>
            <div>
                <div className={classes.postCreationTextareaDiv}>
                    <div className={classes.postCreationTextareaInnerDiv}>
                        <textarea 
                            onFocus={() => setBorderColor('border-[color:var(--newCommunityTheme-navIcon)]')}
                            onBlur={() => setBorderColor('border-[color:var(--newCommunityTheme-line)]')}
                            className={classes.postCreationTextarea}
                            spellCheck="true"
                            style={{
                                outline: 'none',
                                userSelect: 'text',
                                whiteSpace: 'pre-wrap',
                                overflowWrap: 'break-word',
                            }}
                            onChange={(e) => handleTextChange(e)}
                            value = {text}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.postCreationTextareaDiv2} />
        </div>
    </div>
    );
}

// prop types
PostCreationTextArea.propTypes = {
    setBorderColor: PropTypes.func.isRequired,
};
