import {http, HttpResponse} from 'msw';
import {API_ROUTES} from '../requests/routes.js';
import {url} from './setup.mock.js';

const notificationSettings = async ({request, params, cookies}) => {
    return new HttpResponse(200, {}, JSON.stringify({
        'notificationSettings': {
            'inboxMessage': false,
            'chatMessages': true,
            'chatRequest': false,
            'mentions': false,
            'comments': true,
            'upvotesToPosts': true,
            'upvotesToComments': true,
            'repliesToComments': true,
            'newFollowers': true,
            'modNotifications': true,
        },
    }));
};

const emailSettings = async ({request, params, cookies}) => {
    return new HttpResponse(200, {}, JSON.stringify({
        'emailSettings': {
            'privateMessages': true,
            'chatRequests': true,
            'newUserWelcome': true,
            'commentOnPost': true,
            'repliesToComments': true,
            'upvotesOnPosts': true,
            'upvotesOnComments': true,
            'usernameMentions': true,
            'newFollowers': true,
            'unsubscribeFromEmail': false,
        },
    }));
};

export const settingsHandlers = [
    http.get(url(API_ROUTES.notificationSettings), notificationSettings),
    http.get(url(API_ROUTES.emailSettings), emailSettings),
];
