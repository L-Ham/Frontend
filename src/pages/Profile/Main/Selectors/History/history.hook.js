import {historyClasses} from './history.styles.js';
export const useHistory=()=> {
    return {
        style: ({isActive}) => {
            return isActive?`${historyClasses.NavLink} 
            bg-[color:var(--color-secondary-background-selected)]`:historyClasses.NavLink;
        },
    };
};
