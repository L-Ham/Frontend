import React from 'react';
import './filesuploadarea.css';
import {FirstUpload} from './FirstUpload/firstupload.js';
import {Video} from './Video/video.js';
import {UploadingMore} from './UploadingMore/uploadingmore.js';
import {usePostCreation} from '../../../postcreationcontext.js';
import {classes} from './filesuploadarea.styles.js';


/**
 * Renders the image area for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function FilesUploadArea() {
    const {files} = usePostCreation();
    return (
        <div className={classes.filesUploadAreaDiv}>
            <div>
                {files.length > 0 ? (files[0].type === 'video/mp4') ? <Video/> : <UploadingMore/> :
                    <FirstUpload/>}
            </div>
        </div>
    );
}
