/*eslint-disable*/
import React from 'react';
import {usePostCreation} from '../../../postcreationcontext.js';
import PropTypes from 'prop-types';
import './postcreationtextarea.css';


/**
 * Renders the text area for the post creation form.
 * @param {Object} props The component props.
 * @param {Function} props.setBorderColor The setBorderColor function.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationTextArea({setBorderColor}) {
    const {text, setText} = usePostCreation();
    console.log('text', text);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <div>
                <div>
                    <div className="relative overflow-auto">
                        <div className="relative z-[1] border-l-[none]
                        bg-[hsla(0,0%,100%,0)]">
                            <textarea 
                                onFocus={() => setBorderColor('border-[color:var(--newCommunityTheme-navIcon)]')}
                                onBlur={() => setBorderColor('border-[color:var(--newCommunityTheme-line)]')}
                                className="font size-full
                                min-h-[122px]
                                resize-y
                                overflow-hidden rounded-[4px]
                                bg-[var(--newCommunityTheme-body)]
                                p-[8px_16px]
                                text-[14px]/[21px]
                                font-[400]
                                text-[var(--newRedditTheme-bodyText)]
                                caret-[var(--newRedditTheme-bodyText)]
                                flex
                                "
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
                <div className={`left-0 right-0 pointer-events-none transition-[top] duration-[0.2s]
                text-[var(--newCommunityTheme-bodyText)] absolute z-[100]`} />
            </div>
        </div>
    );
}

// prop types
PostCreationTextArea.propTypes = {
    setBorderColor: PropTypes.func.isRequired,
};
