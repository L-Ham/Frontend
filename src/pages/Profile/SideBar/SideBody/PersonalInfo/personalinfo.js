import React from 'react';
import {personalInfoClasses} from './personalinfo.styles';
import {personalInfoStyles} from './personalinfo.styles.js';
import PropTypes from 'prop-types';
/**
 * PersonalInfo component
 *  @return {React.Component}`
 * @param {string} username
 */
export function PersonalInfo({username}) {
    return (
        <div className={personalInfoClasses.root}>
            <h2 className={personalInfoClasses.h2}
                style={personalInfoStyles.h2}>
                {username}
            </h2>

        </div>

    );
}
PersonalInfo.propTypes = {
    username: PropTypes.string,
};
