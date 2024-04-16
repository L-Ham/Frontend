import {http, HttpResponse} from 'msw';
import {API_ROUTES} from '../requests/routes.js';
import {url} from './setup.mock.js';
import {COMMUNITIES_DETAILS} from './Data/subreddit.data.js';
import {WIDGETS} from './Data/subreddit.data.js';
import {SUBREDDIT_RULES} from './Data/subreddit.data.js';

const communityDetails = async ({request, params, cookies}) => {
    if (params.name !== 'DragonOath') {
        return HttpResponse.json({message: 'Community not found'}, {status: 404});
    }
    return HttpResponse.json(COMMUNITIES_DETAILS, {status: 200});
};
const subredditRules = async ({request, params, cookies}) => {
    if (params.id !== '661afc3579200d572b16e244') {
        return HttpResponse.json({message: 'Subreddit not found'}, {status: 404});
    }
    return HttpResponse.json(SUBREDDIT_RULES, {status: 200});
};

const widgets = async ({request, params, cookies}) => {
    if (params.id !== '661afc3579200d572b16e244') {
        return HttpResponse.json({message: 'Error getting subreddit widgets'}, {status: 404});
    }
    return HttpResponse.json(WIDGETS, {status: 200});
};

export const subredditHandlers = [
    http.get(API_ROUTES.communityDetails(':name'), communityDetails),
    http.get(url(API_ROUTES.subredditRules(':id')), subredditRules),
    http.post(url(API_ROUTES.widgets(':id')), widgets),
];

