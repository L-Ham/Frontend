
export const useEmpty = (section) => {
    const verb = ()=>{
        if (section === 'comments') {
            return 'commented';
        } else if (section === 'posts') {
            return 'posted';
        } else if (section === 'upvoted') {
            return 'upvoted';
        } else if (section === 'downvoted') {
            return 'downvoted';
        } else if (section === 'hidden') {
            return 'hidden';
        } else if (section === 'saved') {
            return 'saved';
        } else {
            return 'posted';
        }
    };
    return {
        verb,
    };
};
