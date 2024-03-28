import React from 'react';
import {Feed} from '../../generic components/feed.js';
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
            </div>
        </div>
    );
}

export {HomePage};
