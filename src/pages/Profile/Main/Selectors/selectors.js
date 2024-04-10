import React from 'react';
import {History} from './History/history.js';
/**
 * Selectors component
 * @return {React.Component}
 */
export function Selectors() {
    const Topics = [
        {main: 'Overview', link: '/user/Fickle-Guava-3796/'},
        {main: 'Posts', link: '/user/Fickle-Guava-3796/posts'},
        {main: 'Comments', link: '/user/Fickle-Guava-3796/comments'},
        {main: 'Hidden', link: '/user/Fickle-Guava-3796/hidden'},
        {main: 'Saved', link: '/user/Fickle-Guava-3796/saved'},
        {main: 'Upvoted', link: '/user/Fickle-Guava-3796/upvoted'},
        {main: 'Downvoted', link: '/user/Fickle-Guava-3796/downvoted'},
    ];
    return (
        <div className="mx-1 my-4 block">
            <div className="relative flex w-fit max-w-full items-center justify-center overflow-hidden"
                style={{flexFlow: 'row'}}>
                <div className=" flex items-center gap-[var(--button-gap)] overflow-auto scroll-smooth"
                    style={{flexFlow: 'row', scrollbarWidth: 'none'}}>

                    {Topics.map((item, index) => (
                        <History key={index} Topics={item}/>
                    ))}
                </div>


            </div>

        </div>
    );
}
