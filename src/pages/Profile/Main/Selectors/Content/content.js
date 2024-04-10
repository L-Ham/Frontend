import React from 'react';
import {useContent} from './content.hook.js';
/**
 * Content component
 * @return {React.Component}
 */
export function Content() {
    const {AddIcon} = useContent();
    return (
        <div className="block">
            <div className="mx-1 my-2 block"
                style={{unicodeBidi: 'isolate'}}>
                <div className="flex h-[32px]">
                    <a className="inline-flex
                    items-center justify-center rounded-[999px] border-[0.0625rem] border-solid
                    border-[var(--button-border-color)] pb-0 pl-2.5 pr-3.5 no-underline
                    hover:border-[var(--button-border-color-hover)]"
                    href='/submit'>
                        <span className="flex items-center justify-center"
                        >
                            <span className="mr-2 flex">
                                <AddIcon/>
                            </span>
                            <span className="flex items-center gap-2">
                                Create Post
                            </span>
                        </span>
                    </a>
                </div>

            </div>

        </div>
    );
}
