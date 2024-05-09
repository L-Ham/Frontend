import React from 'react';

import PropTypes from 'prop-types';
/* eslint-disable max-len */
/**
 * SettingsButton component.
 * @component
 * @example
 * // Render the SettingsButton.
 * <SettingsButton />
 * @return {JSX.Element} The SettingsButton component.
 */
function Avatar({link = 'https://play-lh.googleusercontent.com/FpCCoNLOt6LRIY_3NM5Rk_LDN-kFNz0yxdFjm-CYM4XavRQfoQlXxOtgC7abfexIDOE'}) {
    return (
        <div className="row-[1_/_span_3] h-[var(--size-xl)]">

            <span className="inline-flex items-center justify-center"
            >
                <span className="relative inline-block
             size-8 rounded-full [&>:first-child]:mb-0 [&>:first-child]:rounded-full">
                    <img className="pointer-events-none mb-0 size-full rounded-[624.938rem]"
                        src={link}
                        alt="User Avatar"/>
                </span></span></div>
    );
}
// add prop val

Avatar.propTypes = {
    link: PropTypes.string,
};
export {Avatar};


