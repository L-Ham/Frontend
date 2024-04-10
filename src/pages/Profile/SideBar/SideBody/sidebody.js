import React from 'react';
import {PersonalInfo} from './PersonalInfo/personalinfo.js';
import {ShareButton} from './PersonalInfo/ShareButton/sharebutton.js';
import {PostInfo} from './PostInfo/postinfo.js';
import {Settings} from './Edit/setting.js';
import {SocialLinks} from './SocialLinks/socialinks.js';
import {sideBodyClasses} from './sidebody.styles.js';
/**
 * SideBody component
 * @return {React.Component}
 */
export function SideBody() {
    return (
        <div className={sideBodyClasses.root}
            style={{unicodeBidi: 'isolate'}}>
            <PersonalInfo/>
            <ShareButton/>
            <PostInfo/>
            <hr className={sideBodyClasses.hr}
                style={{unicodeBidi: 'isolate',
                    marginBlockStart: '0.5em',
                    marginBlockEnd: '0.5em',
                    marginInlineStart: 'auto',
                    marginInlineEnd: 'auto',
                    borderStyle: 'inset'}}
            />
            <span className={sideBodyClasses.span}
                style={{
                    marginBlockStart: '0.83em',
                }}>
                Settings
            </span>
            <Settings/>
            <hr className={sideBodyClasses.hr}
                style={{unicodeBidi: 'isolate',
                    marginBlockStart: '0.5em',
                    marginBlockEnd: '0.5em',
                    marginInlineStart: 'auto',
                    marginInlineEnd: 'auto',
                    borderStyle: 'inset'}}
            />
            <span className={sideBodyClasses.span}
                style={{
                    marginBlockStart: '0.83em',
                }}>
                Links
            </span>
            <SocialLinks/>
        </div>
    );
}
