import {getIconComponent} from '../../../../../iconsmap.js';
import {useState} from 'react';

export const useTopBar = () => {
    const [isJoined, setIsJoined] = useState(false);
    return {
        DefaultIcon: getIconComponent('default-subreddit'),
        isJoined,
        setIsJoined,
    };
};
