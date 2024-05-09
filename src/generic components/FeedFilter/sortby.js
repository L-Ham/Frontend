import React from 'react';
import PropTypes from 'prop-types';

/**
 * SortBy component
 * @param {string} sortBy
 * @param {function} setSortBy
 * @return {React.Component}
 */
export function SortBy({sortBy, setSortBy}) {
    return (
        <li className='relative mt-0 list-none'>
            <div className="relative flex cursor-pointer justify-between gap-2 px-4 py-2
            pr-[16px] text-[var(--color-secondary-onBackground)] no-underline
            -outline-offset-1 hover:bg-[var(--color-neutral-background-selected)]
            hover:no-underline" onClick={setSortBy}>
                <span className="flex min-w-0 shrink items-center gap-2">
                    <span className="flex min-w-0 shrink flex-col
                                                    justify-center py-[var(--rem6)]">
                        <span className="text-sm">{sortBy}</span>
                        <span className="text-xs text-[var(--color-secondary-weak)]" />
                    </span>
                </span>
                <span className="flex shrink-0 items-center">
                    <span className="flex h-6 items-center justify-center" />
                </span>
            </div>
        </li>
    );
}

SortBy.propTypes = {
    sortBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
};
