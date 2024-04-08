import React from 'react';
import {getIconComponent} from '../../../generic components/iconsmap';

/**
 * The Reddit logo component
 * @component
 * @example
 * // Render the Reddit logo
 * <RedditLogo />
 * @return {JSX.Element} The Reddit logo component
 */
function Logo() {
    const RedditLogo = getIconComponent('reddit-logo', false);
    const RedditName = getIconComponent('reddit-name', false);
    return (
        <div className='flex items-center'>
            <a href='/' className='flex items-center'>
                <span className='flex items-center pr-0 s:pr-2'>
                    <RedditLogo/>
                </span>
                <span className='hidden s:flex' >
                    <RedditName className='h-[22px]' style={{color: '#ff4500'}} />
                </span>
            </a>
        </div>
    );
}

export {Logo};
