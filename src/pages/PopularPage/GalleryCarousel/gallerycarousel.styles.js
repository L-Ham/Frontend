// gallery carousel classes
export const galleryCarouselClasses = {
    container: 'mt-4',
    contentWrapper: 'block h-[210px] nd:visible nd:overflow-hidden',
    content: 'relative',
    list: 'm-0 flex w-full list-none flex-row overflow-x-scroll scroll-smooth p-0',
    leftButton: 'absolute left-[8px] top-[85px] md:inline',
    rightButton: 'absolute right-[8px] top-[85px] md:inline',
    buttonVisible: 'visible',
    buttonInvisible: 'invisible',
};

// gallery carousel styles
export const galleryCarouselStyles = {
    list: {
        scrollbarWidth: 'none',
        WebkitScrollbar: {
            display: 'none',
            width: '0 !important',
        },
    },
};

// scroll button classes
export const scrollButtonClasses = {
    button: `inline-flex size-8 items-center justify-center rounded-full
     bg-[var(--color-media-background)] px-1.5 text-white 
     hover:bg-[var(--color-media-background-hover)] active:opacity-60
     active:bg-[var(--color-media-background-hover)]`,
    iconWrapper: 'flex items-center justify-center',
    icon: 'flex',
};


