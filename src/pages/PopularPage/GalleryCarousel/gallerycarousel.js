/* eslint-disable max-len */
import React, {useState, useEffect, useRef} from 'react';
import {CarouselItem} from './CarouselItem/carouselitem.js';
import {ScrollButton} from './scrollbutton.js';
import {galleryCarouselClasses as styles, galleryCarouselStyles} from './gallerycarousel.styles.js';

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
        setIsScrolledToRight(scrollLeft + clientWidth >= scrollWidth-1);
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

    // eslint-disable-next-line no-unused-vars
    const data = [];
    for (let i = 0; i < 6; i++) {
        data.push((
            <CarouselItem
                key={i}
                imgSrc='https://external-preview.redd.it/monopoly-movie-in-the-works-from-margot-robbie-and-lionsgate-v0-hP5n-D5ZYqJhyEfEXq71jX7nig8nFGZEu9VIZI4nYts.jpg?width=320&crop=smart&auto=webp&s=dbadeabd3dd4c4a4f3a7334d0ad1d81a91d011c0'
                title='Monopoly movie in the works from Margot Robbie and Lionsgate'
                description='The film will be directed by Tim Story, who is best known for his work on the Ride Along and Think'
                communityImgSrc='https://styles.redditmedia.com/t5_2r0ij/styles/communityIcon_yor9myhxz5x11.png'
                communityName='r/movies'
            />
        ));
    }
    const leftButtonClasses = isScrolledToLeft? `${styles.leftButton} ${styles.buttonInvisible}`: `${styles.leftButton} ${styles.buttonVisible}`;
    const rightButtonClasses = isScrolledToRight? `${styles.rightButton} ${styles.buttonInvisible}`: `${styles.rightButton} ${styles.buttonVisible}`;
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <ul id='list' ref={ulRef} className={styles.list}
                        style={galleryCarouselStyles.list}>
                        {data}

                    </ul>

                    <span className={leftButtonClasses}>
                        <ScrollButton onClick={scrollLeft} direction='left'/>
                    </span>

                    <span className={rightButtonClasses}>
                        <ScrollButton onClick={scrollRight} direction='right'/>
                    </span>

                </div>
            </div>
        </div>
    );
}

export {GalleryCarousel};
