import React from 'react';
import {Info} from './Info/info.js';
import {postInfoClasses} from './postinfo.styles.js';
/**
 * PostInfo component
 * @return {React.Component}
 */
export function PostInfo() {
    const info=[
        {info: '0', title: 'Post Karma'},
        {info: '0', title: 'Comment Karma'},
        {info: 'March 23, 2024', title: 'Cake Day'},
        {info: '0', title: 'Coins'},
    ];
    return (
        <div className={postInfoClasses.root}
            style={{unicodeBidi: 'isolate'}}>
            {info.map((item, index) => (
                <Info key={index} info={item.info} title={item.title}/>
            ))}
        </div>
    );
}
