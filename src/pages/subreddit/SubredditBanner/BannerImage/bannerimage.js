import React from 'react';
import PropTypes from 'prop-types';
import {classes} from './bannerimage.styles.js';

/**
 * Renders the banner image.
 * @param {object} props The component props.
 * @param {string} props.backgroundImage The background image for the banner.
 * @return {JSX.Element} The rendered component.
 */
export function BannerImage({backgroundImage=''}) {
    return (
        <div style={{containerType: 'inline-size'}} data-testid="outer-div">
            <div
                className={classes.banner}
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                }}
                data-testid="banner-div"
            />
        </div>
    );
}

BannerImage.propTypes = {
    backgroundImage: PropTypes.string,
};
