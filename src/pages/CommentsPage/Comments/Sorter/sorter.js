import React from 'react';
import {getIconComponent} from '../../../../generic components/iconsmap';


/**
 * Sorts Comments
 * @return {JSX.Element} The rendered Sorter component.
 */
export function Sorter() {
    const CaretDownIcon = getIconComponent('caret-down', false);
    return (
        <div className='box-border flex items-center py-3' style={{font: 'var(--font-12-16-semibold'}}>
            <div className='flex items-center '>
                <span className='whitespace-nowrap text-[0.75rem] leading-4 text-[var(--color-neutral-content-weak)]
                 lg:mr-1'>
                    Sort by:
                </span>
                <button className='box-border inline-flex h-8
                                    cursor-pointer items-center justify-center
                                    overflow-hidden whitespace-nowrap rounded-full
                                    bg-transparent pl-2.5 pr-1.5
                                    text-[var(--color-neutral-content-weak)]
                                    hover:bg-[var(--color-secondary-background-hover)]
                                    active:bg-[var(--color-interactive-pressed)]'
                >
                    <span className='flex items-center justify-center'>
                        <span className='flex items-center gap-2'>
                            New
                        </span>
                    </span>
                    <span className='ml-1 inline-flex rotate-0 transition duration-200 ease-in-out'>
                        <CaretDownIcon className="size-[16px]"/>
                    </span>
                </button>
            </div>
        </div>
    );
}
