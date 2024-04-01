import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap';
import PropTypes from 'prop-types';

/**
 * Search history item component
 * @component
 * @param {string} subredditIconURL - The URL of the subreddit icon
 * @param {string} label - The label of the search history item
 * @param {string} link - The link to be redirected to
 * @example
 * // Render the search history item
 * <SearchHistoryItem />
 * @return {JSX.Element} The search history item component
 */
function SearchHistoryItem({subredditIconURL = '', label = 'test', link = '/test'}) {
    return (
        <a className="relative flex cursor-pointer justify-between gap-2
         px-4 py-1 text-[#0f1a1c] no-underline -outline-offset-1
          hover:bg-[#f2f4f5]  hover:text-black  hover:no-underline
             active:bg-[#00000029]" href="#"
        style={{paddingRight: '16px'}} tabIndex="-1">

            <span className="flex min-w-0 shrink items-center gap-2">
                <span className="flex size-8 shrink-0 items-center justify-center">
                    <span className="text-xl leading-4">
                        {
                            subredditIconURL ?
                                <img src={subredditIconURL} alt="Icon for r/" className="size-4 rounded-full" /> :
                                getIconComponent('search', false)
                        }
                    </span>
                </span>
                <span className="flex min-w-0 shrink flex-col justify-center ">
                    <span className="text-sm">
                        <div className="flex items-center gap-1 py-2 align-baseline">
                            {label}
                        </div>
                    </span>
                </span>
            </span>
            <span className="flex shrink-0 items-center">
                <span className="flex h-6 items-center justify-center">
                    <button className="inline-flex size-8
                            items-center
                            justify-center rounded-full
                            bg-transparent p-1 px-1.5
                            hover:bg-[#e2e7e9] active:bg-[#d2dadd] " tabIndex="-1"
                    onClick={(e) => e.stopPropagation()} >
                        <span className="flex items-center justify-center">
                            <span className="flex">
                                {getIconComponent('remove', false)}
                            </span>
                        </span>
                    </button>
                </span>
            </span>
        </a>
    );
}

SearchHistoryItem.propTypes = {
    subredditIconURL: PropTypes.string,
    label: PropTypes.string,
    link: PropTypes.string,
};

export {SearchHistoryItem};
