import React from 'react';

import {getIconComponent} from '../../generic components/iconsmap';

/**
 * SideInfo component
 * @return {React.Component}
 */
export function SideInfo() {
    const CaretDown = getIconComponent('caret-down', false);
    const CaretRight = getIconComponent('caret-right', false);
    return (
        <div className='ml-[24px] mt-[24px] hidden h-fit w-[312px] border border-solid
                        border-[var(--newCommunityTheme-widgetColors-sidebarWidgetBorderColor)]
                        bg-[var(--newRedditTheme-body)] s:block'>
            <div className='flex h-fit rounded-[4px] bg-[var(--newRedditTheme-body)]
                            fill-[var(--newRedditTheme-bodyText)] pl-[8px] text-[var(--newRedditTheme-bodyText)]'>
                <div className='flex cursor-pointer text-[10px] uppercase leading-3'>
                    <div className='pt-[12px]'>
                        <div className='px-[4px] py-[10px] text-[10px] font-bold text-[#818384]'
                            style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>LAST 7 DAYS INSIGHTS</div>
                    </div>
                </div>
                <div className='ml-auto flex justify-end px-[4px] pb-[10px] pr-[15px] pt-[20px]'>
                    <CaretDown className="size-4" />
                </div>
            </div>
            <div className='max-h-none border-0 pl-[8px]'>
                <div>
                    <div className='p-0'>
                        <div className='flex rounded-[8px] p-[8px]'>
                            <img src="https://www.redditstatic.com/desktop2x/img/snoovatars/snoovatar_1.png"
                                className='ml-[2px] mr-[10px] size-[22px] rounded-[50%] bg-[rgb(218,_224,_230)]
                                            p-0' />
                            <div>
                                <div className='flex items-center text-[14px] font-semibold leading-5
                                text-[var(--color-neutral-content-strong)]'>
                                                    0 mods took actions
                                </div>
                                <div className='text-[12px] font-normal leading-4
                                text-[var(--color-neutral-content-weak)]'>
                                                    Your team made 0 mod actions this week.
                                </div>
                            </div>
                        </div>
                        <div className='flex rounded-[8px] p-[8px]'>
                            <img src={require('../../assets/images/lightning.png')}
                                className='ml-[2px] mr-[10px] size-[22px] rounded-[50%] bg-[rgb(218,_224,_230)]
                                            p-0' />
                            <div>
                                <div className='flex items-center text-[14px] font-semibold leading-5
                                text-[var(--color-neutral-content-strong)]'>
                                                    0 published posts
                                </div>
                                <div className='text-[12px] font-normal leading-4
                                text-[var(--color-neutral-content-weak)]'>
                                                    It&apos;s the same as the previous 7 days.
                                </div>
                            </div>
                        </div>
                        <div className='flex rounded-[8px] p-[8px]'>
                            <img src={require('../../assets/images/finger.png')}
                                className='ml-[2px] mr-[10px] size-[22px] rounded-[50%] bg-[rgb(218,_224,_230)]
                                            p-0' />
                            <div>
                                <div className='flex items-center text-[14px] font-semibold leading-5
                                text-[var(--color-neutral-content-strong)]'>
                                                    0 published comments
                                </div>
                                <div className='text-[12px] font-normal leading-4
                                text-[var(--color-neutral-content-weak)]'>
                                                    It&apos;s the same as the previous 7 days.
                                </div>
                            </div>
                        </div>
                        <div className='flex rounded-[8px] p-[8px]'>
                            <img src={require('../../assets/images/lightbulb.png')}
                                className='ml-[2px] mr-[10px] size-[22px] rounded-[50%] bg-[rgb(218,_224,_230)]
                                            p-0' />
                            <div>
                                <div className='flex items-center text-[14px] font-semibold leading-5
                                 text-[var(--color-neutral-content-strong)]'>
                                                0 reports on posts and comments
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className='flex items-center fill-[var(--newCommunityTheme-linkText)] py-4
                                    pl-3 text-sm font-bold leading-4 text-[var(--newCommunityTheme-linkText)]'>
                                        More Insights
                        <CaretRight className="ml-2 size-2 -rotate-90"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
