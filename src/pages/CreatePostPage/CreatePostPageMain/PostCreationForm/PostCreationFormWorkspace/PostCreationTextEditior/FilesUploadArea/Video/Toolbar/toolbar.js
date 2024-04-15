import React from 'react';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';
import './toolbar.css';


/**
 * Renders the toolbar.
 * @return {JSX.Element} The rendered component.
 */
export function Toolbar() {
    const PlayIcon = getIconComponent('play-v2', true);
    const FullScreenIcon = getIconComponent('fullscreen');

    return (
        <div className="absolute inset-x-0 bottom-0
        box-content flex h-[36px] select-none items-end justify-between p-[8px]">
            <div className="video-toolbar__item
            absolute inset-x-0
             bottom-0
        h-full transition-opacity duration-[0.2s] ease-[cubic-bezier(.4,0,0.2,1)] "
            style={{background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5))'}}
            />
            <div className="video-toolbar__item   relative z-[4] m-0 flex h-full items-center
                    outline-none transition-opacity duration-[0.2s]
                  ease-[cubic-bezier(.4,0,0.2,1)]">
                <span className="invisible
                    absolute bottom-2/4 mb-5 size-auto
                    whitespace-nowrap rounded bg-black
                     p-2 text-xs
                     font-medium leading-4 text-white">
                      Play
                </span>
                <button aria-label="Play" className="flex size-[36px]
                    items-center justify-center border-none bg-transparent outline-none">
                    <PlayIcon className='block
                    size-[18px] cursor-pointer text-white
                     opacity-95 transition-all duration-[0.2s] ease-linear'/>
                </button>
            </div>
            {/**/}
            <div className="video-toolbar__item relative
            z-[4]
             mx-[1em]
            my-0
             flex h-full items-center whitespace-nowrap
            text-[12px] tabular-nums text-white outline-none transition-opacity duration-[0.2s]
            ease-[cubic-bezier(.4,0,0.2,1)]" style={{fontFamily: 'verdana'}}>0:00</div>
            {/**/}
            <div className="video-toolbar__item  relative
             z-[4] m-auto
            flex h-auto w-full grow items-center outline-none
            transition-opacity duration-[0.2s] ease-[cubic-bezier(.4,0,0.2,1)]">
                <div className="relative mx-[8px] my-auto h-[16px]
                grow cursor-pointer">
                    <div
                        aria-label="Seek Slider"
                        aria-valuemax={3}
                        aria-valuemin={0}
                        aria-valuenow={0}
                        className="h-full outline-none"
                        role="slider"
                        tabIndex={0}
                    >
                        <div className="absolute top-[6px]
                        h-[4px] rounded-[2px] bg-white
                        opacity-20" />
                        <div className="absolute top-[6px]
                        h-[4px] w-full rounded-[2px] bg-white
                        opacity-50" />
                        <div
                            className="absolute top-[6px]
                             h-[4px] rounded-[2px] bg-white opacity-70"
                            style={{width: '0%'}}
                        />
                        <div className="absolute top-[6px]
                         h-[4px] rounded-[2px] bg-[#0079d3]" style={{width: '0%'}} />
                    </div>
                    <div
                        className="absolute
                        inset-y-0 size-[16px]
                        rounded-[50%] bg-[#0079d3]
                        transition-opacity duration-[0.2s]
                        ease-[ease-out]
                        "
                        style={{marginLeft: 'calc(0% - 8px)', opacity: 0}}
                    />
                </div>
            </div>
            {/**/}
            <div className="video-toolbar__item  relative
            z-[4] m-0
            mx-[1em] flex h-full
             items-center whitespace-nowrap text-xs
            tabular-nums text-white outline-none transition-opacity
            duration-[0.2s] ease-[cubic-bezier(.4,0,0.2,1)]
            "
            style={{fontFamily: 'verdana'}}>0:02</div>
            {/**/}
            <div className="video-toolbar__item
            relative z-[4] m-0
            flex h-full items-center transition-opacity duration-[0.2s] ease-[cubic-bezier(.4,0,0.2,1)]
            ">
                <span className="invisible
                absolute bottom-2/4 mb-5
                size-auto whitespace-nowrap rounded bg-black p-2
                text-xs font-medium leading-4 text-white">
                 Fullscreen
                </span>
                <button aria-label="Fullscreen"
                    className="m-0 flex size-[36px] cursor-pointer items-center justify-center
                border-none bg-transparent outline-none
                ">
                    <FullScreenIcon className= 'block
                    size-[18px] cursor-pointer text-white
                    opacity-95 transition-all duration-[0.2s] ease-linear'
                    />
                </button>
            </div>
        </div>

    );
}
