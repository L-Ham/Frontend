
import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @return {JSX.Element} Modtopbar

 */
function Modtopbar({name}) {
    return (

        <div className='fixed z-30  flex h-10 w-full flex-row items-center
        border-b border-solid border-neutral-200
         bg-white pl-6  text-xs font-bold uppercase leading-6 tracking-[0.5px]'>
            <a className=' mr-3 inline-block text-[#0079d3]' href='/r/'>r/{name}
            </a>
            /MODERATORS

        </div>


    );
}
Modtopbar.propTypes = {
    name: PropTypes.string,
};

export {Modtopbar};
