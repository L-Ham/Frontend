import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './firstupload.styles.js';
import {useFirstUpload} from './firstupload.hooks.js';

/**
 * Renders the first image upload component.
 * @return {JSX.Element} The rendered component.
 */
export function FirstUpload() {
    const {fileInputRef, handleButtonClick, handleFileChange} = useFirstUpload();

    return (
        <div className={classes.firstUploadDiv}>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/gif,image/jpeg,image/webp,video/mp4,video/quicktime"
                multiple={false}
                className={classes.firstUploadInput}
                onChange={handleFileChange}
            />
            <div className={classes.firstUploadDiv2}>
                <p className={classes.firstUploadP}>
                Drag and drop images or{' '}
                    <button
                        role="button"
                        tabIndex={0}
                        className={classes.firstUploadButton}
                        onClick={handleButtonClick}
                    >
                    Upload
                    </button>
                </p>
            </div>
        </div>
    );
}

FirstUpload.propTypes = {
    setPostBody: PropTypes.func.isRequired,
};
