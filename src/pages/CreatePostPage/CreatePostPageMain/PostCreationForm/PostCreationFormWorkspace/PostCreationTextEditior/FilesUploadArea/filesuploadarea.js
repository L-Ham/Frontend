import React from 'react';
import './filesuploadarea.css';
import {FirstUpload} from './FirstUpload/firstupload.js';
import {Video} from './Video/video.js';
import {UploadingMore} from './UploadingMore/uploadingmore.js';
import {usePostCreation} from '../../../postcreationcontext.js';


/**
 * Renders the image area for the post creation form.
 * @return {JSX.Element} The rendered component.
 */
export function FilesUploadArea() {
    const {files} = usePostCreation();
    console.log('files', files);
    files.length > 0 ? console.log(files[0].type) : '';
    return (
        <div className="rounded-[4px]">
            <div>
                {files.length > 0 ? (files[0].type === 'video/mp4') ? <Video/> : <UploadingMore/> :
                    <FirstUpload/>}
            </div>
        </div>
    );
}
