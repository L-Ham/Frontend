export const useSidebody = () => {
    const links= [
        {
            title: 'Instagram',
            link: 'https://www.instagram.com/',
            addIcon: '0',
        },
        {
            title: 'Facebook',
            link: 'https://www.facebook.com/',
            addIcon: '0',
        },
        {
            title: 'Add social Links',
            link: '/settings/profile',
            addIcon: '1',
        },

    ];
    return {
        links,
    };
};
