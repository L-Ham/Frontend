import React from 'react';
/**
 * Footer component
 * @return {React.Component}
 */
export function Footer() {
    return (
        <div className='clear-both m-0 block p-0 pt-10 text-center text-[larger]'>
            <div className='mx-auto my-[15px] max-w-[600px] rounded-[7px] border border-solid border-[#F0F0F0] p-[5px]
            text-[gray]'
            style={{display: '-webkit-flex'}}>
                <div className='mx-0 my-2.5 box-border inline-block flex-[0_0_25%]
                px-[15px] py-0 align-top'>
                    <ul className='m-0 block list-none p-0 text-left'
                    >
                        <li className='m-0 mb-[5px] list-item p-0 font-[normal] text-lg text-[#777]'
                            style={{fontFamily: 'verdana, arial, helvetica, sans-serif',
                                textAlign: '-webkit-match-parent'}}>
                            about

                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>blog</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>about</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>advertising</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>careers</a>
                        </li>
                    </ul>

                </div>
                <div className='mx-0 my-2.5 box-border inline-block flex-[0_0_25%]
                border-l border-solid border-l-[#E0E0E0] px-[15px] py-0 align-top'>
                    <ul className='m-0 block list-none p-0 text-left'
                    >
                        <li className='m-0 mb-[5px] list-item p-0 font-[normal] text-lg text-[#777]'
                            style={{fontFamily: 'verdana, arial, helvetica, sans-serif',
                                textAlign: '-webkit-match-parent'}}>
                            help

                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>site rules</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>Reddit Help center</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>reddiquette</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>mod guidelines</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>contact us</a>
                        </li>
                    </ul>

                </div>
                <div className='mx-0 my-2.5 box-border inline-block flex-[0_0_25%]
                border-l border-solid border-l-[#E0E0E0] px-[15px] py-0 align-top'>
                    <ul className='m-0 block list-none p-0 text-left'
                    >
                        <li className='m-0 mb-[5px] list-item p-0 font-[normal] text-lg text-[#777]'
                            style={{fontFamily: 'verdana, arial, helvetica, sans-serif',
                                textAlign: '-webkit-match-parent'}}>
                            app & tools

                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>Reddit for iPhone</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>Reddit for Android</a>
                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>mobile website</a>
                        </li>

                    </ul>

                </div>
                <div className='mx-0 my-2.5 box-border inline-block flex-[0_0_25%]
                border-l border-solid border-l-[#E0E0E0] px-[15px] py-0 align-top'>
                    <ul className='m-0 block list-none p-0 text-left'
                    >
                        <li className='m-0 mb-[5px] list-item p-0 font-[normal] text-lg text-[#777]'
                            style={{fontFamily: 'verdana, arial, helvetica, sans-serif',
                                textAlign: '-webkit-match-parent'}}>
                            heart

                        </li>
                        <li>
                            <a className='text-[#4fbcff]'>reddit premium</a>
                        </li>

                    </ul>

                </div>
            </div>
            <p className='clear-both m-0 p-0 text-[smaller] text-[gray]'>
            Use of this site constitutes acceptance of our User Agreement and Privacy Policy.
            © 2024 reddit inc. All rights reserved.
            </p>
            <p className='clear-both m-0 p-0 text-[smaller] text-[gray]'>
            REDDIT and the ALIEN Logo are registered trademarks of reddit inc.
            </p>
        </div>
    );
}
