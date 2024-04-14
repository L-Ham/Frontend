// carousel item classes
export const carouselItemClasses = {
    container: 'mr-4 inline-flex shrink-0 snap-mandatory snap-start list-none overflow-hidden rounded-[16px]',
    listItem: 'm-0',
    anchor: 'relative block w-[280px] hover:no-underline',
    img: 'pointer-events-none absolute m-0 size-full object-cover',
    content: 'relative flex h-[210px] flex-col justify-end overflow-hidden rounded-[16px]',
};

// carousel item content classes
export const carouselItemContentClasses = {
    container: 'flex h-[185px] flex-col justify-end px-3 pb-2',
    title: 'm-0 truncate text-2xl font-bold leading-7 text-[var(--color-primary-onBackground)]',
    description: 'mb-2 mt-1 truncate text-sm text-[var(--color-primary-onBackground)]',
};

// carousel item content styles
export const carouselItemContentStyles = {
    container: {
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.54) 60%, rgba(0, 0, 0, 0.6) 100%)`,
    },
};

// community info classes
export const communityInfoClasses = {
    container: 'flex items-center text-xs text-[var(--color-primary-onBackground)]',
    iconContainer: 'size-[24px] leading-none',
    icon: 'overflow-hidden rounded-full',
    name: 'ml-2 mr-1 font-bold',
    more: 'text-coolgray-350',
};
