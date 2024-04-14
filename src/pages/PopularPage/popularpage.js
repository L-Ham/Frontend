/* eslint-disable max-len */
import React from 'react';
import {GalleryCarousel} from './GalleryCarousel/gallerycarousel.js';
import {Feed} from '../../generic components/feed.js';
import {RightSidebar} from './RightSideBar/rightsidebar.js';


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
                <GalleryCarousel/>
            </div>
            <div className='flex w-full gap-4 pb-8'>
                {/* Content */}
                <main className=' w-full scroll-mt-[56px] nd:max-h-[calc(100%-(16px+316px))]'>
                    {/* posts */}
                    <Feed/>
                </main>
                <div className='top-0 hidden
                 w-[316px] min-w-[316px] md:sticky md:top-[56px]
                 md:max-h-[calc(100vh-56px-1px)] md:overflow-y-auto
                 md:overflow-x-hidden s:block'>
                    {/* right side bar */}
                    <RightSidebar/>
                </div>
            </div>
        </div>
    );
}

export {PopularPage};
