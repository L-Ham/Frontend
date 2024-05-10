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
        <div className={classes.imageDiv} data-testid="image-div">
            <span className={classes.imageSpan} data-testid="image-span">
                <span className={classes.imageSpan2} data-testid="image-span2">
                    <div className={classes.imageDiv2} data-testid="image-div2">
                        <span
                            className={classes.imageSpan3}
                            style={{
                                backgroundImage: `url(${URL.createObjectURL(file)})`,
                            }}
                            data-testid="image-span3"
                        >
                            <button className={classes.imageButton} data-testid="image-button">
                                <XIcon className={classes.xIcon} data-testid="x-icon"/>
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
