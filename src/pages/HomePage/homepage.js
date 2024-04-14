import React from 'react';
import {Feed} from '../../generic components/feed.js';
import {RightSidebar} from '../PopularPage/RightSideBar/rightsidebar.js';
/**
 * Renders the homepage component.
 * @return {JSX.Element} The rendered homepage component.
 */
function HomePage() {
    return (
        <div className='m:col-start-2 m:w-[1120px] m:max-w-[calc(100vw-272px)]
            order-2 mx-auto box-border flex w-full flex-col md:px-4'>
            <div className='flex w-full gap-4 pb-8'>
                <div className='w-full scroll-mt-[56px] lg:max-w-[calc(100%_-(16px_+_316px))]
                         xl:max-w-[calc(100%_-(16px_+_316px))]'>
                    <Feed />
                </div>
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

export {HomePage};
