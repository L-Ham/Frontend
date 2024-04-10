import React from 'react';
import {personalInfoClasses} from './personalinfo.styles';
import {personalInfoStyles} from './personalinfo.styles.js';
/**
 * PersonalInfo component
 *  @return {React.Component}`
 */
export function PersonalInfo() {
    return (
        <div className={personalInfoClasses.root}>
            <h2 className={personalInfoClasses.h2}
                style={personalInfoStyles.h2}>
                Fickle-Guava-3796
            </h2>

        </div>

    );
}
