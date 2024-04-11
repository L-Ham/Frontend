import React, {useState, useEffect, useRef} from 'react';
import {CarouselItem} from './CarouselItem/carouselitem';

/**
 * GalleryCarousel component
 * @return {JSX.Element} GalleryCarousel component
*/
function GalleryCarousel() {
    const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);
    const [isScrolledToRight, setIsScrolledToRight] = useState(false);
    const ulRef = useRef();

    const checkScrollPosition = () => {
        const {scrollLeft, clientWidth, scrollWidth} = ulRef.current;
        setIsScrolledToLeft(scrollLeft === 0);
        setIsScrolledToRight(scrollLeft + clientWidth >= scrollWidth);
    };

    const handleScroll = () => {
        checkScrollPosition();
    };

    const handleResize = () => {
        checkScrollPosition();
    };

    const scrollLeft = () => {
        ulRef.current.scrollLeft -= ulRef.current.clientWidth;
    };

    const scrollRight = () => {
        ulRef.current.scrollLeft += ulRef.current.clientWidth;
    };

    useEffect(() => {
        const ul = ulRef.current;
        ul.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            ul.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='mt-4'>
            <div className='block h-[210px] nd:visible nd:overflow-hidden'>
                <div className='relative'>
                    <ul id='list' ref={ulRef} className='m-0 flex w-full snap-x snap-mandatory
                     list-none flex-row overflow-x-scroll scroll-smooth p-0'
                    style={{
                        scrollbarWidth: 'none',
                        WebkitScrollbar: {
                            display: 'none',
                            width: '0 !important',
                        },
                    }}
                    >
                        <CarouselItem/>
                        <CarouselItem/>
                        <CarouselItem/>
                        <CarouselItem/>
                        <CarouselItem/>
                        <CarouselItem/>
                    </ul>

                    <span className={`absolute left-[8px] top-[85px] md:inline
                                ${isScrolledToLeft ? 'invisible' : 'visible'}`}>
                        <button className='inline-flex size-8 items-center
                                        justify-center rounded-full
                                        bg-[#00000099] px-1.5
                                        text-white hover:bg-[#000000cc]
                                        active:bg-black'
                        onClick={scrollLeft} aria-label='Scroll Left'>

                            <span className="flex items-center justify-center">
                                <span className="flex">
                                    <svg fill="currentColor"
                                        height="16"
                                        viewBox="0 0 20 20" width="16"
                                        xmlns="http://www.w3.org/2000/svg">
                                        {/* eslint-disable-next-line max-len */}
                                        <path d="m12.793 19.707-9-9a1 1 0 0 1 0-1.414l9-9 1.414 1.414L5.914 10l8.293 8.293-1.414 1.414Z">

                                        </path>
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </span>

                    <span className={`absolute right-[8px] top-[85px] md:inline
                                ${isScrolledToRight ? 'invisible' : 'visible'}`}>
                        <button className='inline-flex size-8 items-center
                                        justify-center rounded-full
                                        bg-[#00000099] px-1.5
                                        text-white hover:bg-[#000000cc]
                                        active:bg-black'
                        onClick={scrollRight} aria-label='Scroll Right'>

                            <span className="flex items-center justify-center">
                                <span className="flex">
                                    <svg fill="currentColor"
                                        height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
                                        {/* eslint-disable-next-line max-len */}
                                        <path d="m7.207 19.707-1.414-1.414L14.086 10 5.793 1.707 7.207.293l9 9a1 1 0 0 1 0 1.414l-9 9Z">
                                        </path>
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export {GalleryCarousel};
