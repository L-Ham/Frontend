import {useSelector} from 'react-redux';
export const usePostInfo = () => {
    const user = useSelector((state) => state.user);


    const info=[
        {info: user.postKarma, title: 'Post Karma'},
        {info: user.commentKarma, title: 'Comment Karma'},
        {info: `24 April 2024`, title: 'Cake Day'},
        {info: '0', title: 'Coins'},
    ];
    return {
        info,
    };
};
