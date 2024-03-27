import React from 'react';

/**
 * Search trending item component
 * @component
 * @example
 * // Render the search trending item
 * <SearchTrendingItem />
 * @return {JSX.Element} The search trending item component
 */
function SearchTrendingItem() {
    return (
        <a className='relative flex cursor-pointer justify-between gap-2
         px-4 py-2 text-[#0f1a1c]
          no-underline -outline-offset-1 hover:bg-[#f2f4f5]  hover:text-black
            hover:no-underline  active:bg-[#00000029]' href='#' role='menuitem'
        // style='padding-right: 16px' tabIndex='-1'>
        style={{paddingRight: '16px'}} tabIndex='-1'>

            <span className='flex min-w-0 shrink items-center gap-2 text-left'>

                <span className='flex min-w-0 shrink flex-col justify-center py-1.5'>
                    <span className='text-sm'>
                        <span className='ml-1 inline-block h-5 leading-5'>
                            <span className='font-bold text-[#2a3c42]'>
                                US wins Nations League
                            </span>

                        </span>
                    </span>
                    <span className='text-xs text-[#576f76]'>
                        <span className='ml-1 inline-block min-h-[40px] pb-2 text-[#2a3c42]'>
                            <span className='mb-2 inline-block'>
                                [USMNT] AS IT SHOULD BE. DOS A CERO.
                                 The USMNT secures its third straight Nations League title!
                            </span>
                            <div className='flex text-[#576f76] '>

                                <img className='mr-1 size-4 rounded-full' loading='lazy'
                                    // eslint-disable-next-line max-len
                                    src='https://b.thumbs.redditmedia.com/nE2LD5gPj_nTva28AvGXvEMNkmd_QwxKSluXzXNcwHk.png'
                                    width='16' height='16' alt='Icon for r/'></img>

                                <span>r/MLS and more</span>
                            </div>
                        </span>
                    </span>
                </span>
            </span>

            <span className='hidden shrink-0 items-center md:flex'>
                <span className='flex h-6 items-center justify-center'>
                    <img className='mr-1 hidden  rounded-sm object-cover xs:block'
                        // eslint-disable-next-line max-len
                        loading='lazy' src='https://a.thumbs.redditmedia.com/Vty96PdG2cjNGu_1Q-elwMEZbn6SFo32xKPRRGk6ux4.jpg'
                        width='96' height='72' alt=''>

                    </img>
                </span>
            </span>
        </a>
    );
}

export {SearchTrendingItem};
