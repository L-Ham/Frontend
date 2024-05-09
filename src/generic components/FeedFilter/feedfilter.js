import React from 'react';
import {getIconComponent} from '../iconsmap.js';
import {useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {SortBy} from './sortby.js';
import {ViewOptions} from './viewoptions.js';
/**
 *
 * @return {JSX.Element} The rendered FeedFilter component.
 */
export function FeedFilter() {
    const CaretDownIcon = getIconComponent('caret-down', false);
    const ViewCardIconOutline = getIconComponent('view-card', false);
    const [isSortByOpen, setIsSortByOpen] = useState(false);
    const [isViewOptionsOpen, setIsViewOptionsOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const sortbys = ['Hot', 'New', 'Top', 'Rising'];
    const navigate = useNavigate();
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
                                            {searchParams.get('sort') || 'Hot'}
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
                                    {sortbys.map((sortBy) => (
                                        <SortBy
                                            key={sortBy}
                                            sortBy={sortBy}
                                            setSortBy={() => {
                                                searchParams.set('sort', sortBy);
                                                // go to the new url
                                                navigate(`?${searchParams.toString()}`);
                                                setIsSortByOpen(false);
                                            }}
                                        />
                                    ))}
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
                            {isViewOptionsOpen && <ViewOptions />}
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-b-[0.0625rem] border-t-0 border-solid
            border-b-[var(--color-neutral-border-weak)] bg-transparent p-0' />
        </>
    );
}
