import React from 'react';
import {Feed} from '../../generic components/feed.js';
import {VIEW_CONTEXTS} from '../../generic components/Post/data.js';
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
            </div>
        </div>
    );
}

export {HomePage};
