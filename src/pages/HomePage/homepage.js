import React from 'react';
import {Feed} from '../../generic components/feed.js';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';
import {RightSidebar} from '../PopularPage/RightSideBar/rightsidebar.js';
/**
 * Renders the homepage component.
 * @return {JSX.Element} The rendered homepage component.
 */
function HomePage() {
    return (
        <div className='order-2 mx-auto box-border flex
            w-full flex-col md:px-4 nd:col-start-2 nd:w-[1120px] nd:max-w-[calc(100vw-272px)]'>
            <div className='flex w-full gap-4 pb-8'>
                <div className='min-h-screen w-full scroll-mt-[48px]
                md:scroll-mt-[56px] s:max-w-[calc(100%_-(16px_+_316px))] lxl:max-w-[756px]'>
                    <Feed viewContext={VIEW_CONTEXTS.AGGREGATE_FEED} postList={['t3_1bmnuhw',
                        't3_1bvwbgd', 't3_1c2k4vg']} type='ids'/>
                </div>
                <div className='!-top-8 hidden
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
