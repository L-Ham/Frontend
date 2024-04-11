import {getIconComponent} from '../../../../generic components/iconsmap.js';

export const useCommunityIcon = ({icon, primaryColor}) => {
    const Icon = getIconComponent('default-subreddit');
    const Tag = icon ? 'img' : Icon;
    const tagProps = icon ?
        {style: {color: primaryColor, backgroundColor: primaryColor}} :
        {fill: primaryColor};

    return {
        Tag,
        tagProps,
    };
};
