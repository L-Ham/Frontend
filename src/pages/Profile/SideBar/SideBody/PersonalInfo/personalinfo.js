import React from 'react';
import {personalInfoClasses} from './personalinfo.styles';
/**
 * PersonalInfo component
 *  @return {React.Component}`
 */
export function PersonalInfo() {
    return (
        <div className={personalInfoClasses.root}
            style={{unicodeBidi: 'isolate'}}>
            <h2 className={personalInfoClasses.h2}
                style={{
                    marginBlockStart: '0.83em',
                    marginBlockEnd: '0.83em',
                    marginInlineStart: '0px',
                    marginInlineEnd: '0px',
                    unicodeBidi: 'isolate',
                    font: 'var(--font-24)',
                    fontWeight: 'bold',
                }}>
                Fickle-Guava-3796
            </h2>

        </div>

    );
}
