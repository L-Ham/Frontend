import React from 'react';
import {Options} from './options.js';
import {Styling} from './styling.js';
import {Mod} from './mod.js';
import {settingClasses} from './setting.styles';
/**
 * Represents the Settings component
 * @return {React.Component}
 */
export function Settings() {
    return (
        <ul className={settingClasses.root}
            style={{marginBlockStart: '1em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px',
                paddingInlineStart: '0px',
            }}>
            <Options/>
            <Styling/>
            <Mod/>

        </ul>
    );
}
