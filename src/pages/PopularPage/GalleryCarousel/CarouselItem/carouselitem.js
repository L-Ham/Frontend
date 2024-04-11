import React from 'react';
import '../../popularpage.css';

/**
 * Renders the carousel item component.
 * @return {JSX.Element} The rendered carousel item component.
 */
function CarouselItem() {
    return (
        <div className='mr-4 inline-flex shrink-0 snap-mandatory snap-start list-none
        overflow-hidden rounded-[16px]'>
            <li className='m-0'>
                <a href='#' className='relative block w-[280px] hover:no-underline'>
                    <img loading='lazy'
                    //  eslint-disable-next-line max-len
                        src='https://external-preview.redd.it/monopoly-movie-in-the-works-from-margot-robbie-and-lionsgate-v0-hP5n-D5ZYqJhyEfEXq71jX7nig8nFGZEu9VIZI4nYts.jpg?width=320&crop=smart&auto=webp&s=dbadeabd3dd4c4a4f3a7334d0ad1d81a91d011c0'
                        className='pointer-events-none absolute m-0 size-full object-cover'/>
                    <div className='relative flex h-[210px] flex-col
                                    justify-end overflow-hidden rounded-[16px]'>
                        <div className='flex h-[185px] flex-col justify-end px-3 pb-2'
                            // eslint-disable-next-line max-len
                            style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.54) 60%, rgba(0, 0, 0, 0.6) 100%)`}}
                        >
                            <h2 className="m-0 truncate text-2xl font-bold leading-7 text-white">
                                Margot &amp; Monopoly movie
                            </h2>
                            <p className="mb-2 mt-1 truncate text-sm text-white">
                                ‘Monopoly’ Movie in the Works From Margot Robbie and Lionsgate
                            </p>
                            <div className='flex items-center text-xs text-white'>
                                <span className="size-[24px] leading-none">
                                    {/* eslint-disable-next-line max-len */}
                                    <img src="https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_ctrxr9h6lmbb1.jpg?format=pjpg&amp;s=befebdbe73a748b99db059393aea26383ab53673"
                                        alt="r/movies icon"
                                        className="overflow-hidden rounded-full nd:visible "
                                        width="24" height="24" loading="lazy"
                                        style={{color: '#FFB000', backgroundColor: '#FFB000'}}/>
                                </span>
                                <span className="ml-2 mr-1 font-bold">r/sports</span>
                                <span className="text-coolgray-350">and more</span>
                            </div>
                        </div>
                    </div>
                </a>

            </li>
        </div>
    );
}

export {CarouselItem};
