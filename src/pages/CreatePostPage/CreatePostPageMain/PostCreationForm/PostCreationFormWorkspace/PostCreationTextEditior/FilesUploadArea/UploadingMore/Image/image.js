import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';
import './image.css';


/**
 * Renders the image component.
 * @param {Object} props The component props.
 * @param {Object} props.file The image to render.
 * @return {JSX.Element} The rendered component.
 */
export function Image({file}) {
    console.log('file', file.name);
    console.log('image url', URL.createObjectURL(file));
    const XIcon = getIconComponent('x', true);
    return (
        <div draggable="true">
            <span className="flex">
                <span className='m-[0_12px_12px_0]'>
                    <div className="relative box-border
                    flex
                    h-[100px] w-full cursor-pointer items-center justify-center
                    rounded-[4px]
                    border-2
                    border-solid border-[color:var(--newCommunityTheme-voteText-base)] p-0 text-[13px]/[16px]
                    decoration-[none] shadow-none transition-all duration-[0.3s]">
                        <span
                            className="post-creation__image m-[6px] block size-[84px] rounded
                            bg-cover bg-[50%] opacity-100
                            outline-none"
                            style={{
                                backgroundImage: `url(${URL.createObjectURL(file)})`,
                            }}
                        >
                            <button className="post-creation__image-x-btn
                            relative
                            left-[60px] top-[4px] size-[21px]
                            cursor-pointer rounded-[50%]
                             border-none
                            bg-transparent">
                                <XIcon className="content-box absolute hidden
                               size-[25px] overflow-hidden rounded-[50%]"/>
                            </button>
                        </span>
                    </div>
                </span>
            </span>
        </div>
    );
}

Image.propTypes = {
    file: PropTypes.object.isRequired,
};
