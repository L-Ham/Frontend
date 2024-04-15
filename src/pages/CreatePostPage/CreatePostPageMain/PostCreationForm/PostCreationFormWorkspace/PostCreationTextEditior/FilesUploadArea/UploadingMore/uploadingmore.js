import React from 'react';
import {Image} from './Image/image.js';
import {AddFiles} from './AddFiles/addfiles.js';
import {usePostCreation} from '../../../../postcreationcontext.js';

/**
 * Renders the first image upload component.
 * @return {JSX.Element} The rendered component.
 */
export function UploadingMore() {
    const {files} = usePostCreation();
    return (
        <div className='box-border rounded-[4px] border-DEFAULT border-solid
        p-[12px] '>
            <div className='box-border flex w-full flex-wrap'>
                <div className='box-border block w-full overflow-auto'>
                    <div className='inline-flex w-full overflow-x-auto'>
                        <div className="inline-flex">
                            {files.map((file, idx) => <Image file={file} key={idx}/>)}
                        </div>
                        <AddFiles/>
                    </div>
                </div>
                <div className="block w-full max-w-full" />
            </div>
        </div>
    );
}
