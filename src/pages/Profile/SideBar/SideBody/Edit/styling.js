import React from 'react';
import {useOptions} from './option.hook.js';
import {settingClasses} from './setting.styles.js';
/**
 * Represents the Options component
 * @return {React.Component}
 */
export function Styling() {
    const {ClothesIcon}=useOptions();
    return (
        <li className={settingClasses.li}
            style={{textAlign: '-webkit-match-parent',
                unicodeBidi: 'isolate'}}>
            <div className={settingClasses.divA}
                style={{unicodeBidi: 'isolate'}}>
                <span className={settingClasses.spanA}>
                    <span className={settingClasses.spanB}>
                        <span className={settingClasses.spanC}>
                            <span className={settingClasses.spanD}>
                                <span className={settingClasses.spanE}>
                                    <span className={settingClasses.spanF}>
                                        <div className={settingClasses.divB}
                                            style={{unicodeBidi: 'isolate',
                                                objectFit: 'inherit'}}>
                                            <ClothesIcon/>
                                        </div>
                                    </span>
                                </span>

                            </span>
                        </span>
                    </span>
                    <span className={settingClasses.spanG}
                    >
                        <span className={settingClasses.spanH}>
                            Profile
                        </span>
                        <span className={settingClasses.spanI}>
                            Customize your profile
                        </span>
                    </span>
                </span>
                <span className={settingClasses.spanJ}>
                    <span className={settingClasses.spanK}>
                        <button className={settingClasses.button}
                            style={{
                                border: `var(0.0625rem, 0) solid var(transparent, transparent)`,
                                font: 'var(--font-12-16-semibold)'}}>
                            <span className={settingClasses.spanL}>
                                <span className={settingClasses.spanM}>
                                    Add Profile
                                </span>
                            </span>
                        </button>
                    </span>

                </span>

            </div>
        </li>
    );
}

