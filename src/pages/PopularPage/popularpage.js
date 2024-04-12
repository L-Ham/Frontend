/* eslint-disable max-len */
import React from 'react';
import {GalleryCarousel} from './GalleryCarousel/gallerycarousel';
import {Feed} from '../../generic components/feed.js';
import {HoverCard} from '../../generic components/Post/HoverCard/hovercard.js';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';


/**
 * Renders the popular page component.
 * @return {JSX.Element} The rendered popular page component.
 */
function PopularPage() {
    return (
        <div className='order-2
         mx-auto box-border flex w-full flex-col md:px-4
          nd:col-start-2 nd:w-[1120px] nd:max-w-[calc(100vw-272px)]'>
            <div className='w-full'>
                <div className='mt-4'>
                    <GalleryCarousel/>
                </div>
            </div>
            <div className='flex w-full gap-4 pb-8'>
                {/* Content */}
                <main className=' w-full scroll-mt-[56px] nd:max-h-[calc(100%-(16px+316px))]'>
                    {/* posts */}
                    <Feed/>
                </main>
                <div className='hidden h-[500px] w-[316px]
                 min-w-[316px] md:sticky md:top-[56px] md:max-h-[calc(100vh-56-1px)]
                 md:overflow-y-auto
                 md:overflow-x-hidden s:block'>
                    {/* right side bar */}
                    <aside className='box-border flex flex-col py-4'>

                        <aside className='flex flex-col
                         rounded-[16px] bg-[#f9fafa] md:my-4'>

                            <div className='flex items-center justify-between'>
                                <h3 className='my-[18px] flex items-center px-4
                                        text-xs font-semibold uppercase text-[#576f76]'>
                                    Recent Posts
                                </h3>
                                <button className='my-[16px] cursor-pointer border-none
                                 bg-transparent px-4 text-sm text-[#0045ac]'>
                                    Clear
                                </button>
                            </div>

                            <div className='flex'>
                                <div className='mb-4 w-full'>
                                    <div className='mx-4'>
                                        <div>


                                            <div className='flex text-xs text-[#2a3c42]'>
                                                <div className='flex grow flex-col'>
                                                    <HoverCard
                                                        postId='t3_1bmnuhw'
                                                        fullName='t5_33vsv'
                                                        viewContext={VIEW_CONTEXTS.AGGREGATE_FEED}
                                                    />

                                                    <div className='flex'>
                                                        <a className="group flex
                                                                 flex-wrap text-[#576f76] no-underline
                                                                hover:no-underline dark:text-[#82959b]"
                                                        href="/r/Tiktokhelp/comments/1b2bdql/formula_to_calculate_whether_a_post_goes_viral_or/">

                                                            <div className="my-1 flex min-w-0 grow">
                                                                <div className="mt-1 flex grow flex-col gap-1">

                                                                    <h3 className="m-0 line-clamp-2 overflow-hidden
                                                                    text-sm font-semibold group-hover:underline"
                                                                    title="Formula to calculate whether a post goes viral or is good"
                                                                    aria-label="List item post - Formula to calculate whether a post goes viral or is good">
                                                                        Formula to calculate whether a post goes viral or is good
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="mt-1 min-w-full truncate">
                                                <div className="text-xs text-[#576f76]">
                                                    <span>1</span>
                                                    {' upvote '}
                                                    <span className="mx-1">·</span>
                                                    <span>1</span>
                                                    <span>{' comment'}</span>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export {PopularPage};
