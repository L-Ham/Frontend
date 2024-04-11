import {useSearchParams} from 'react-router-dom';

export const useMain = () => {
    const [setSearchParams] = useSearchParams();

    const sortBy = [
        {
            content: {
                text: 'Hot',
            },
            onClick: () => {
                setSearchParams({sort: 'hot'});
            },
        },
        {
            content: {
                text: 'New',
            },
            onClick: () => {
                setSearchParams({sort: 'new'});
            },
        },
        {
            content: {
                text: 'Top',
            },
            onClick: () => {
                setSearchParams({sort: 'top'});
            },
        },
    ];

    return {
        sortBy,
    };
};
