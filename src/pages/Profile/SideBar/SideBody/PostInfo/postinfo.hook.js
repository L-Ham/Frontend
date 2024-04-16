import {useSelector} from 'react-redux';
export const usePostInfo = () => {
    const user = useSelector((state) => state.user);
    const userCreatedDate = new Date((user.created)*1000); // assuming user.created is a valid date string or timestamp
    const formattedDate = userCreatedDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const info=[
        {info: user.postKarma, title: 'Post Karma'},
        {info: user.commentKarma, title: 'Comment Karma'},
        {info: formattedDate, title: 'Cake Day'},
        {info: '0', title: 'Coins'},
    ];
    return {
        info,
    };
};
