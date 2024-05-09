/* eslint-disable max-len */
import React, {useState, useEffect, useRef} from 'react';
import {CarouselItem} from './CarouselItem/carouselitem.js';
import {ScrollButton} from './scrollbutton.js';
import {galleryCarouselClasses as styles, galleryCarouselStyles} from './gallerycarousel.styles.js';
import uuid from 'react-uuid';
// import PropTypes from 'prop-types';
import {API_ROUTES} from '../../../requests/routes.js';
import {axiosInstance as axios} from '../../../requests/axios.js';

/**
 * GalleryCarousel component
 * @return {JSX.Element} GalleryCarousel component
*/
function GalleryCarousel() {
    const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);
    const [isScrolledToRight, setIsScrolledToRight] = useState(false);
    const [trendingPosts, setTrendingPosts] = useState([]);
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
        ulRef.current.scrollLeft -= (ulRef.current.clientWidth);
    };

    const scrollRight = () => {
        ulRef.current.scrollLeft += (ulRef.current.clientWidth );
    };

    useEffect(() => {
        const ul = ulRef.current;
        ul.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        const fetchTrending = async () => {
            try {
                const response = await axios.get(API_ROUTES.getTrendingPosts);
                setTrendingPosts(response.data.trendingPosts);
                console.log(response.data.trendingPosts);
            } catch (error) {
            // console.error(error);
            }
        };
        fetchTrending();

        return () => {
            ul.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // eslint-disable-next-line no-unused-vars

    const leftButtonClasses = isScrolledToLeft? `${styles.leftButton} ${styles.buttonInvisible}`: `${styles.leftButton} ${styles.buttonVisible}`;
    const rightButtonClasses = isScrolledToRight? `${styles.rightButton} ${styles.buttonInvisible}`: `${styles.rightButton} ${styles.buttonVisible}`;
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <ul id='list' ref={ulRef} className={styles.list}
                        style={galleryCarouselStyles.list}>
                        {trendingPosts?.map((item) => (
                            <CarouselItem
                                key={uuid()}
                                imgSrc={item.image??'https://placehold.co/400'}
                                title={item.title}
                                description={item.text}
                                communityImgSrc={item.avatarImage??'https://placehold.co/400'}
                                communityName={`r/${item.subreddit}`}
                                href={`r/${item.subreddit}/comments/${item.postId}`}
                            />
                        ))}

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

// GalleryCarousel.propTypes = {
//     data: PropTypes.array.isRequired,
// };

export {GalleryCarousel};
