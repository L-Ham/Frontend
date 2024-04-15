import {getIconComponent} from '../../../../../iconsmap';

export const useTopBar = ({createdAt}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const creationDate = new Date(createdAt);
    const displayDate = months[creationDate.getMonth()] + ' ' + creationDate.getDate() + ', ' +
                        creationDate.getFullYear();
    return {
        CakeIcon: getIconComponent('cake', false),
        displayDate,
    };
};
