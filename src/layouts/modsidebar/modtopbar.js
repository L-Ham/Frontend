
import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../generic components/iconsmap';
/**
 *
 * @return {JSX.Element} Modtopbar

 */
function Modtopbar({name}) {
    const DefaultSubredditIcon = getIconComponent('default-subreddit');
    return (

        <div className='fixed z-30  flex h-10 w-full flex-row items-center
        border-b border-solid border-[var(--color-neutral-border)] bg-[var(--color-neutral-background)]
         pl-6 text-xs  font-bold uppercase leading-6 tracking-[0.5px] text-[var(--color-neutral-content-strong)]'>
            <DefaultSubredditIcon className='fixed size-[20px] text-[#0079d3]'/>
            <a className=' ml-6 mr-1 inline-block text-[#0079d3]' href='/r/'>r/{name}
            </a>
            / MODERATORS

        </div>


    );
}
Modtopbar.propTypes = {
    name: PropTypes.string,
};

export {Modtopbar};
