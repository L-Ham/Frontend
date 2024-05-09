import React from 'react';
import {getIconComponent} from '../iconsmap';


/**
 * ViewOptions component
 * @return {React.Component}
 */
export function ViewOptions() {
    const ViewCardIconFill = getIconComponent('view-card', true);
    const ViewClassicIcon = getIconComponent('view-classic', false);
    return (
        <div
            className='absolute z-[2] inline-flex max-h-[50vh]
                            w-max justify-center overflow-hidden overflow-y-auto
                            rounded-lg bg-[var(--color-neutral-background-strong)]
                            shadow-[rgba(0,0,0,0.1)_0px_4px_8px_0px,rgba(0,0,0,0.25)_0px_6px_12px_0px]
                            -outline-offset-1'
            aria-label='menu'
        >
            <ul>
                <div className='m-4 mb-2 text-base font-semibold text-[var(--color-tone-1)]'
                    style={{font: 'var(--font-12-16-semibold)'}}>
                                        View
                </div>
                <div slot="dropdown-items">
                    <data value="cardView">
                        <li
                            className="relative mt-0 list-none "
                            role="presentation"
                        >
                            <div
                                className="relative flex
                                                    cursor-pointer justify-between
                                                    gap-2 bg-[var(--color-neutral-background-selected)] px-4
                                                    py-2 pr-[16px] text-[var(--color-secondary-onBackground)]
                                                    no-underline -outline-offset-1
                                                    hover:bg-[var(--color-neutral-background-selected)]
                                                    hover:no-underline"
                            >
                                <span className="flex min-w-0 shrink items-center gap-2">
                                    <span
                                        className="flex size-8 shrink-0 items-center
                                                            justify-center text-xl leading-4"
                                    >
                                        <ViewCardIconFill />
                                    </span>
                                    <span
                                        className="flex min-w-0 shrink flex-col justify-center
                                                            py-1.5"
                                    >
                                        <span className="text-sm">Card</span>
                                        <span className="text-xs
                                                            text-[var(--color-secondary-weak)]"/>
                                    </span>
                                </span>
                                <span className="flex shrink-0 items-center">
                                    <span className="flex h-6 items-center justify-center" />
                                </span>
                            </div>
                        </li>
                    </data>
                    <data value="compactView">
                        <li className="relative mt-0 list-none " role="presentation">
                            <div className="relative flex cursor-pointer justify-between
                                                gap-2 px-4 py-2  pr-[16px] text-[var(--color-secondary)] no-underline
                                                -outline-offset-1 hover:text-[var(--color-secondary-hover)]
                                                hover:no-underline  active:bg-[var(--color-interactive-pressed)]"
                            >
                                <span className="flex min-w-0 shrink items-center gap-2">
                                    <span className="flex size-8 shrink-0 items-center
                                                        justify-center text-xl leading-4">
                                        <ViewClassicIcon />
                                    </span>
                                    <span className="flex min-w-0 shrink flex-col justify-center
                                                        py-1.5">
                                        <span className="text-sm">Compact</span>
                                        <span className="text-xs
                                                            text-[var(--color-secondary-weak)]"/>
                                    </span>
                                </span>
                                <span className="flex shrink-0 items-center">
                                    <span className="flex h-6 items-center justify-center"></span>
                                </span>
                            </div>
                        </li>
                    </data>
                </div>
            </ul>
        </div>
    );
}
