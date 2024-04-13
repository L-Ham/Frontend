import React from 'react';
import {Options} from './options.js';
import {Styling} from './styling.js';
import {Mod} from './mod.js';
import {settingClasses} from './setting.styles';
import {settingStyles} from './setting.styles';
/**
 * Represents the Settings component
 * @return {React.Component}
 */
export function Settings() {
    return (
        <ul className={settingClasses.root}
            style={settingStyles.ul} data-testid={`profile-settings`}>
            <Options/>
            <Styling/>
            <Mod/>

        </ul>
    );
}
