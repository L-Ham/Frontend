
import React from 'react';
import PropTypes from 'prop-types';


/**
 *
 * @return {JSX.Element} UserHelp
 */
function Moderatorentry({username, imageurl}) {
    Moderatorentry.propTypes = {
        username: PropTypes.string,
        imageurl: PropTypes.string,

    };

    return (

        <div className='box-border flex h-[60px] w-full flex-row
                                     items-center border-b border-solid
                                      border-b-[#EDEFF1] bg-[var(--newCommunityTheme-body)]
                                     px-4 py-2 text-xs font-normal leading-4 text-[#878A8C] '>
            <div className="min-w-[220px] rounded-lg text-sm font-medium
                                         leading-[18px] text-[var(--newCommunityTheme-bodyText)] hover:bg-[#edeff1]">
                <a className="inline-block rounded py-1
                                                 pl-1 pr-2" href="/user/mohamed">
                    <span className="mr-1.5 inline-block align-middle"
                        style={{height: '32px', width: '32px'}}>
                        <div className=" relative h-full ">
                            <img
                                alt="User avatar"
                                className="box-border size-full rounded border border-solid
                                border-[#EDEFF1] object-cover object-center indent-[-9999px] text-white"
                                src={imageurl ? imageurl :
                                    'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png'}
                            />

                        </div></span>
                    <span className=" inline-block flex-col"><span>{username}</span>
                        <span className="block text-sm
                                                    font-normal text-[#576f76]">just now
                        </span></span></a></div>

            <div className="ml-auto flex min-w-0 flex-row items-center">
                <div className="truncate p-1">
                                                                Everything</div></div>


        </div>


    );
}

export {Moderatorentry};
