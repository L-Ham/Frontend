import React from 'react';
import {useAddBanner} from '../../SideBar/Banner/AddBannerButton/addbannerbutton.hook.js';
/**
 * Header component
 * @return {React.Component}
 */
export function Header() {
    const {AddBannerIcon} = useAddBanner();
    return (
        <div className="relative flex items-center p-4">
            <div className="relative flex shrink-0 items-center pr-4"
                style={{unicodeBidi: 'isolate'}}>
                <img className="m-0  block size-16 max-w-full overflow-hidden
                rounded-full border-solid border-[color:var(--color-neutral-border-weak)]"
                style={{overflowClipMarginBlock: 'content-box'}}
                src={require('../../../../assets/images/avatar_default_1.png')}
                alt="yessssss"
                />
                <div className="absolute bottom-0 right-2 block"
                    style={{unicodeBidi: 'isolate'}}>
                    <a
                        href="/settings"
                        aria-label="Edit profile picture"
                        className="box-border inline-flex  size-[var(--button-height)] w-8 items-center justify-center
                        rounded-[999px] bg-[color:var(--button-color-background)]
                        hover:bg-[color:var(--button-color-background-hover)]"
                        style={{position: 'absolute', bottom: '0', right: '0'}}>
                        <span className="  flex items-center justify-center">
                            <span className="flex">
                                <AddBannerIcon />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="mt-0 block w-full min-w-0"
                style={{unicodeBidi: 'isolate'}}>
                <div className="flex items-center justify-between">
                    <div className="w-full ">
                        <div className="flex w-full items-center justify-start">
                            <div className="flex items-baseline justify-start">
                                <h1 className="m-0 mt-[1em] text-2xl font-bold leading-7 "
                                    style={{
                                        marginInlineStart: '0px',
                                        marginInlineEnd: '0px',
                                        unicodeBidi: 'isolate',
                                    }}>
                                    Fickle-Guava-3796
                                </h1>
                            </div>
                        </div>
                        <p className="m-0 block text-sm font-semibold leading-5
                        text-[color:var(--color-neutral-content-weak)]"
                        style={{
                            marginInlineStart: '0px',
                            marginInlineEnd: '0px',
                            unicodeBidi: 'isolate'}}>u/Fickle-Guava-3796</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
