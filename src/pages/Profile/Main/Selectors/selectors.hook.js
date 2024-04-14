import {getIconComponent} from '../../../../generic components/iconsmap.js';
import {selectorsClasses} from './selectors.styles.js';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
export const useSelectors = ({username}) => {
    const topics = [
        {main: 'Overview', link: `/user/${username}/`},
        {main: 'Posts', link: `/user/${username}/posts`},
        {main: 'Comments', link: `/user/${username}/comments`},
        {main: 'Hidden', link: `/user/${username}/hidden`},
        {main: 'Saved', link: `/user/${username}/saved`},
        {main: 'Upvoted', link: `/user/${username}/upvoted`},
        {main: 'Downvoted', link: `/user/${username}/downvoted`},
    ];
    // ////////////////////////////////////////////////////////////////////////////////////////////////
    const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);
    const [isScrolledToRight, setIsScrolledToRight] = useState(true);
    const ulRef = useRef();
    const rightButton =isScrolledToRight ?`${selectorsClasses.rightButton} hidden` : selectorsClasses.rightButton;
    const leftButton =isScrolledToLeft ?`${selectorsClasses.leftButton} hidden` : selectorsClasses.leftButton;

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
    return {
        RightIcon: getIconComponent('right-direction', true),
        LeftIcon: getIconComponent('left-direction', true),
        topics,
        rightButton,
        leftButton,
        scrollRight,
        scrollLeft,
        ulRef,
    };
};
