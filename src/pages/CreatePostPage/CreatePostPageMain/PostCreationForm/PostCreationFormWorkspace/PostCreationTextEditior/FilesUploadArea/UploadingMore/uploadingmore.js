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
    const {files} = usePostCreation();
    return (
        <div className={classes.uploadingMoreDiv}>
            <div className={classes.uploadingMoreDiv2}>
                <div className={classes.uploadingMoreDiv3}>
                    <div className={classes.uploadingMoreDiv4}>
                        <div className={classes.uploadingMoreDiv5}>
                            {files.map((file, idx) => <Image file={file} key={idx}/>)}
                        </div>
                        <AddFiles/>
                    </div>
                </div>
                <div className={classes.uploadingMoreDiv6} />
            </div>
        </div>
    );
}
