import React from 'react';
import {ErrorMessage} from '../../ErrorMessage/errormessage.js';
import {classes} from './postcreationlinkarea.styles.js';
import {usePostCreationLinkArea} from './postcreationlinkarea.hooks.js';

/**
 * Renders the link area for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function PostCreationLinkArea() {
    const {
        link,
        errorMessage,
        setErrorMessage,
        borderColor,
        handleFocus,
        handleBlur,
        handleChange,
        handleBlurTextarea,
    } = usePostCreationLinkArea();

    return (
        <div
            className={classes.postCreationLinkAreaDiv}
            onBlur={handleBlur}
            data-testid="post-creation-link-area-div"
        >
            <textarea
                placeholder="Url"
                className={`${classes.postCreationLinkAreaTextarea}
         ${borderColor} ${errorMessage ? '!border-[red]' : ''}`}
                rows={1}
                value={link}
                onChange={handleChange}
                onBlur={handleBlurTextarea}
                onFocus={handleFocus}
                data-testid="post-creation-link-area-textarea"
            />
            {errorMessage && <ErrorMessage errorMessage={errorMessage}
                setErrorMessage={setErrorMessage} data-testid="error-message"/> }
        </div>
    );
}

