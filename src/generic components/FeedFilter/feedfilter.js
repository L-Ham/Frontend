import React from 'react';
import {getIconComponent} from '../iconsmap.js';
import {useState} from 'react';
/**
 *
 * @return {JSX.Element} The rendered FeedFilter component.
 */
export function FeedFilter() {
    const CaretDownIcon = getIconComponent('caret-down', false);
    const ViewCardIconOutline = getIconComponent('view-card', false);
    const ViewCardIconFill = getIconComponent('view-card', true);
    const ViewClassicIcon = getIconComponent('view-classic', false);
    const [isSortByOpen, setIsSortByOpen] = useState(false);
    const [isViewOptionsOpen, setIsViewOptionsOpen] = useState(false);
    return (
        <>
            <div className='mx-1 my-2' data-testid="feed-#$$satdasdy235">
                <div className='flex h-[32px]'>
                    <div className='flex items-center'>
                        <div className='nd:h-[32px] nd:max-h-[32px] nd:w-[54px]'>
                            <div className='' aria-label='Sort By'
                                style={{font: 'var(--font-12-16-semibold)'}}>
                                <button className='box-border inline-flex h-8
                                    cursor-pointer items-center justify-center
                                    overflow-hidden whitespace-nowrap rounded-full
                                    bg-transparent pl-2.5 pr-1.5
                                    text-[var(--color-neutral-content-weak)]
                                    hover:bg-[var(--color-secondary-background-hover)]
                                    active:bg-[var(--color-interactive-pressed)]'
                                onClick={() => setIsSortByOpen(!isSortByOpen)}>
                                    <span className='flex items-center justify-center'>
                                        <span className='flex items-center gap-2'>
                                                Best
                                        </span>
                                    </span>
                                    <span className='ml-1 inline-flex rotate-0 transition duration-200 ease-in-out'>
                                        <CaretDownIcon className="size-[16px]"/>
                                    </span>
                                </button>
                            </div>
                            {isSortByOpen &&
                            <div
                                className='absolute z-[2] inline-flex max-h-[50vh] w-max
                                    justify-center overflow-hidden overflow-y-auto
                                    rounded-lg bg-[var(--color-neutral-background-strong)]
                                    shadow-[rgba(0,0,0,0.1)_0px_4px_8px_0px,rgba(0,0,0,0.25)_0px_6px_12px_0px]
                                    -outline-offset-1'
                                aria-label='menu'
                            >
                                <ul>
                                    <div className='m-4 mb-2 text-sm font-semibold text-[var(--color-tone-1)]'>
                                            Sort by
                                    </div>
                                    <li className='relative mt-0 list-none'>
                                        <a className="relative flex cursor-pointer justify-between gap-2 px-4 py-2
                                            pr-[16px] text-[var(--color-secondary-onBackground)] no-underline
                                            -outline-offset-1 hover:bg-[var(--color-neutral-background-selected)]
                                            hover:no-underline"
                                        href="/best/?feed=home">
                                            <span className="flex min-w-0 shrink items-center gap-2">
                                                <span className="flex min-w-0 shrink flex-col
                                                    justify-center py-[var(--rem6)]">
                                                    <span className="text-sm">Best</span>
                                                    <span className="text-xs text-[var(--color-secondary-weak)]" />
                                                </span>
                                            </span>
                                            <span className="flex shrink-0 items-center">
                                                <span className="flex h-6 items-center justify-center" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className='relative mt-0 list-none'>
                                        <a className="relative flex cursor-pointer justify-between gap-2 px-4 py-2
                                            pr-[16px] text-[var(--color-secondary-onBackground)] no-underline
                                            -outline-offset-1 hover:bg-[var(--color-neutral-background-selected)]
                                            hover:no-underline"
                                        href="/best/?feed=home">
                                            <span className="flex min-w-0 shrink items-center gap-2">
                                                <span className="flex min-w-0 shrink flex-col
                                                    justify-center py-[var(--rem6)]">
                                                    <span className="text-sm">Hot</span>
                                                    <span className="text-xs text-[var(--color-secondary-weak)]" />
                                                </span>
                                            </span>
                                            <span className="flex shrink-0 items-center">
                                                <span className="flex h-6 items-center justify-center" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className='relative mt-0 list-none'>
                                        <a className="relative flex cursor-pointer justify-between gap-2 px-4 py-2
                                            pr-[16px] text-[var(--color-secondary-onBackground)] no-underline
                                            -outline-offset-1 hover:bg-[var(--color-neutral-background-selected)]
                                            hover:no-underline"
                                        href="/best/?feed=home">
                                            <span className="flex min-w-0 shrink items-center gap-2">
                                                <span className="flex min-w-0 shrink flex-col
                                                    justify-center py-[var(--rem6)]">
                                                    <span className="text-sm">New</span>
                                                    <span className="text-xs text-[var(--color-secondary-weak)]" />
                                                </span>
                                            </span>
                                            <span className="flex shrink-0 items-center">
                                                <span className="flex h-6 items-center justify-center" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className='relative mt-0 list-none'>
                                        <a className="relative flex cursor-pointer justify-between gap-2 px-4 py-2
                                            pr-[16px] text-[var(--color-secondary-onBackground)] no-underline
                                            -outline-offset-1 hover:bg-[var(--color-neutral-background-selected)]
                                            hover:no-underline"
                                        href="/best/?feed=home">
                                            <span className="flex min-w-0 shrink items-center gap-2">
                                                <span className="flex min-w-0 shrink flex-col
                                                    justify-center py-[var(--rem6)]">
                                                    <span className="text-sm">Top</span>
                                                    <span className="text-xs text-[var(--color-secondary-weak)]" />
                                                </span>
                                            </span>
                                            <span className="flex shrink-0 items-center">
                                                <span className="flex h-6 items-center justify-center" />
                                            </span>
                                        </a>
                                    </li>
                                    <li className='relative mt-0 list-none'>
                                        <a className="relative flex cursor-pointer justify-between gap-2 px-4 py-2
                                            pr-[16px] text-[var(--color-secondary-onBackground)] no-underline
                                            -outline-offset-1 hover:bg-[var(--color-neutral-background-selected)]
                                            hover:no-underline"
                                        href="/best/?feed=home">
                                            <span className="flex min-w-0 shrink items-center gap-2">
                                                <span className="flex min-w-0 shrink flex-col
                                                    justify-center py-[var(--rem6)]">
                                                    <span className="text-sm">Rising</span>
                                                    <span className="text-xs text-[var(--color-secondary-weak)]" />
                                                </span>
                                            </span>
                                            <span className="flex shrink-0 items-center">
                                                <span className="flex h-6 items-center justify-center" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                    <div className='flex items-center pl-2'>
                        <div className='nd:block nd:h-[32px] nd:max-h-[32px]
                        nd:w-[54px]'>
                            <div aria-label="View Options">
                                <button className='box-border inline-flex h-8
                                    cursor-pointer items-center justify-center
                                    overflow-hidden whitespace-nowrap rounded-full
                                    bg-transparent pl-2.5 pr-1.5
                                    text-[var(--color-neutral-content-weak)]
                                    hover:bg-[var(--color-secondary-background-hover)]
                                    active:bg-[var(--color-interactive-pressed)]'
                                onClick={() => setIsViewOptionsOpen(!isViewOptionsOpen)}>
                                    <span className='flex items-center justify-center'>
                                        <span className='flex items-center gap-2'>
                                            <ViewCardIconOutline />
                                        </span>
                                    </span>
                                    <span className='ml-1 inline-flex rotate-0 transition duration-200 ease-in-out'>
                                        <CaretDownIcon className="size-[16px]"/>
                                    </span>
                                </button>
                            </div>
                            {isViewOptionsOpen &&
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
                                                <a
                                                    className="relative flex
                                                    cursor-pointer justify-between
                                                    gap-2 bg-[var(--color-neutral-background-selected)] px-4
                                                    py-2 pr-[16px] text-[var(--color-secondary-onBackground)]
                                                    no-underline -outline-offset-1
                                                    hover:bg-[var(--color-neutral-background-selected)]
                                                    hover:no-underline"
                                                    href="?feed=home&feedViewType=cardView"
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
                                                </a>
                                            </li>
                                        </data>
                                        <data value="compactView">
                                            <li className="relative mt-0 list-none " role="presentation">
                                                <a className="relative flex cursor-pointer justify-between
                                                gap-2 px-4 py-2  pr-[16px] text-[var(--color-secondary)] no-underline
                                                -outline-offset-1 hover:text-[var(--color-secondary-hover)]
                                                hover:no-underline  active:bg-[var(--color-interactive-pressed)]"
                                                href="?feed=home&feedViewType=compactView"
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
                                                </a>
                                            </li>
                                        </data>
                                    </div>
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-b-[0.0625rem] border-t-0 border-solid
            border-b-[var(--color-neutral-border-weak)] bg-transparent p-0' />
        </>
    );
}
