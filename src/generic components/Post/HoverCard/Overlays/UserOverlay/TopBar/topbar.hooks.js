import {getIconComponent} from '../../../../../iconsmap';

export const useTopBar = ({created}) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const creationDate = new Date(created * 1000);
    const displayDate = months[creationDate.getMonth()] + ' ' + creationDate.getDate() + ', ' +
                        creationDate.getFullYear();
    return {
        CakeIcon: getIconComponent('cake', false),
        displayDate,
    };
};
