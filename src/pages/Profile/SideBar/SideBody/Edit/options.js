import React from 'react';
import {settingClasses} from './setting.styles.js';
import {settingStyles} from './setting.styles.js';
/**
 * Represents the Options component
 * @return {React.Component}
 */
export function Options() {
    return (
        <li className={settingClasses.li}
            style={settingStyles.li}>
            <div className={settingClasses.divA}>
                <span className={settingClasses.spanA}>
                    <span className={settingClasses.spanB}>
                        <span className={settingClasses.spanC}>
                            <span className={settingClasses.spanD}>
                                <span className={settingClasses.spanE}>
                                    <span className={settingClasses.spanF}>
                                        <div className={settingClasses.divB}
                                            style={settingStyles.div}>
                                            <img className={settingClasses.img}
                                                style={settingStyles.img}
                                                src={require('../../../../../assets/images/avatar_default_1.png')}
                                                alt='Profile Picture'
                                            />
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
                            style={settingStyles.button}>
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

