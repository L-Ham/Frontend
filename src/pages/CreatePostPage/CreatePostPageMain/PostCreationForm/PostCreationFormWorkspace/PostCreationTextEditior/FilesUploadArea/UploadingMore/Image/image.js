import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';
import './image.css';
import {classes} from './image.styles';


/**
 * Renders the image component.
 * @param {Object} props The component props.
 * @param {Object} props.file The image to render.
 * @return {JSX.Element} The rendered component.
 */
export function Image({file}) {
    const XIcon = getIconComponent('x', true);
    return (
        <div className={classes.imageDiv}>
            <span className={classes.imageSpan}>
                <span className={classes.imageSpan2}>
                    <div className={classes.imageDiv2}>
                        <span
                            className={classes.imageSpan3}
                            style={{
                                backgroundImage: `url(${URL.createObjectURL(file)})`,
                            }}
                        >
                            <button className={classes.imageButton}>
                                <XIcon className={classes.xIcon}/>
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
