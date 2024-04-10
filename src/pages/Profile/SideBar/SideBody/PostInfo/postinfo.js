import React from 'react';
import {Info} from './Info/info.js';
import {postInfoClasses} from './postinfo.styles.js';
import {usePostInfo} from './postinfo.hook.js';
/**
 * PostInfo component
 * @return {React.Component}
 */
export function PostInfo() {
    const {info} = usePostInfo();
    return (
        <div className={postInfoClasses.root}>
            {info.map((item, index) => (
                <Info key={index} info={item.info} title={item.title}/>
            ))}
        </div>
    );
}
