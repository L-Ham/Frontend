import React from 'react';
import {GalleryCarousel} from './GalleryCarousel/gallerycarousel';

/**
 * Renders the popular page component.
 * @return {JSX.Element} The rendered popular page component.
 */
function PopularPage() {
    return (
        <div className='order-2
         mx-auto box-border flex w-full flex-col md:px-4
          nd:col-start-2 nd:w-[1120px] nd:max-w-[calc(100vw-272px)]'>
            PopularPage
            <div className='w-full'>
                Trending
                <div className='mt-4'>
                    <GalleryCarousel/>
                </div>
            </div>
            <div>
                {/* Content */}
                <main>
                    {/* posts */}
                </main>
                <div>
                    {/* right side bar */}
                    <aside>
                        <aside>

                        </aside>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export {PopularPage};
