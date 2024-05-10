import React from 'react';
import {Image} from './Image/image.js';
import {AddFiles} from './AddFiles/addfiles.js';
import {usePostCreation} from '../../../../postcreationcontext.js';
import {classes} from './uploadingmore.styles.js';

/**
 * Renders the first image upload component.
 * @return {JSX.Element} The rendered component.
 */
export function UploadingMore() {
    const {files, setFiles} = usePostCreation();
    const [isDragging, setIsDragging] = React.useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const newFiles = Array.from(event.dataTransfer.files);
        if (newFiles.length > 0) {
            setFiles((prevState) => [...prevState, ...newFiles]);
            setIsDragging(false);
        }
    };


    return (
        <div className={`${classes.uploadingMoreDiv}  ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            data-testid="uploading-more-div"
        >
            <div className={classes.uploadingMoreDiv2}>
                <div className={classes.uploadingMoreDiv3}>
                    <div className={classes.uploadingMoreDiv4}>
                        <div className={classes.uploadingMoreDiv5}>
                            {files.map((file, idx) => <Image file={file} key={idx} data-testid={`image-${idx}`}/>)}
                        </div>
                        <AddFiles data-testid="add-files"/>
                    </div>
                </div>
                <div className={classes.uploadingMoreDiv6} />
            </div>
        </div>
    );
}
