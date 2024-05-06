
import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @return {JSX.Element} mod only
 */
function Modonly({name}) {
    Modonly.propTypes = {
        name: PropTypes.string,
    };
    return (
        <div className='mx-0 my-10'>
            <div className='box-border w-full'>
                <div className='flex h-[calc(100vh-48px)]  flex-col items-center justify-center
                    bg-[#dae0e6] text-xl font-medium leading-6
                    text-[#1c1c1c]'>
                    <img className="mx-auto mb-6 mt-0"
                        src="https://www.redditstatic.com/desktop2x/img/content-gate-icons/remember-the-human.png"/>

                        Sorry, this is a moderator-only page
                    <div className="mt-[30px] text-sm font-normal
                    leading-[18px] text-[#7c7c7c]">
                        You must be a moderator of r/{name} to view this page</div>

                </div>

            </div>


        </div>


    );
}
export {Modonly};
