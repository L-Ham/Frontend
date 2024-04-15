import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {usePostCreation} from '../../../postcreationcontext.js';
import {validateLink} from '../../../../../../../generic components/utils.js';
import {ErrorMessage} from '../../ErrorMessage/errormessage.js';


/**
 * Renders the link area for the post creation form.
 * @param {Object} props The component props.
 * @param {Function} props.setBorderColor The border color setter.
 * @param {Function} props.setErrorMessage The error message setter.
 * @param {string} props.errorMessage The error message.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationLinkArea() {
    const {link, setLink,
        linkErrorMessage: errorMessage,
        setLinkErrorMessage: setErrorMessage} = usePostCreation();
    const [borderColor, setBorderColor] = useState('border-[color:var(--newCommunityTheme-line)]');

    return (
        <div
            tabIndex="0"
            onFocus={() => setBorderColor('border-[color:var(--newCommunityTheme-navIcon)]')}
            onBlur={() => setBorderColor('border-[color:var(--newCommunityTheme-line)]')}
        >
            <textarea
                placeholder="Url"
                className={`box-border block
                h-[66px]
                min-h-[66px]
                w-full resize-none
                overflow-hidden
                break-words rounded border
                border-solid  ${borderColor} ${errorMessage ?
            '!border-[red]' : ''} 
                bg-transparent px-4 py-2 text-sm
                font-normal leading-[21px]
                text-[color:var(--newRedditTheme-bodyText)] caret-[color:var(--newRedditTheme-button)] outline-none`}
                rows={1}
                value={link}
                onChange={(e) => setLink(e.target.value)}
                onBlur={(e) => {
                    const url = e.target.value;
                    if (url.length === 0) {
                        if (errorMessage) {
                            setErrorMessage('');
                        }
                        return;
                    }
                    if (!validateLink(url)) {
                        setErrorMessage('Link doesn\'t look right');
                    } else {
                        setErrorMessage('');
                    }
                }}
                onFocus={() => {
                    setBorderColor('border-[color:var(--newCommunityTheme-navIcon)]');
                }}
            />
            {errorMessage && <ErrorMessage errorMessage={errorMessage} setErrorMessage={setErrorMessage}/> }
        </div>
    );
}

PostCreationLinkArea.propTypes = {
    setBorderColor: PropTypes.func.isRequired,
    setErrorMessage: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired,
};
