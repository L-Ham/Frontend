import React from 'react';
import {useContent} from './content.hook.js';
import {contentClasses} from './content.styles.js';
/**
 * Content component
 * @return {React.Component}
 */
export function Content() {
    const {AddIcon} = useContent();
    return (
        <div className={contentClasses.root}>
            <div className={contentClasses.rootC}>
                <div className={contentClasses.rootCC}>
                    <a className={contentClasses.a}
                        href='/submit'>
                        <span className={contentClasses.span}
                        >
                            <span className={contentClasses.spanA}>
                                <AddIcon/>
                            </span>
                            <span className={contentClasses.spanB}>
                                Create Post
                            </span>
                        </span>
                    </a>
                </div>

            </div>

        </div>
    );
}
