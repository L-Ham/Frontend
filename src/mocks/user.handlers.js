import {http, HttpResponse} from 'msw';
import {API_ROUTES} from '../requests/routes.js';
import {USER_INFO} from './Data/user.data.js';
import {LOGIN} from './Data/user.data.js';
import {url} from './setup.mock.js';


const banner = async ({request, params, cookies}) => {
    const response = {
        _id: '66195f995f9d6032ae3ebd6e',
        url: 'https://res.cloudinary.com/dfb8f6xbh/image/upload/v1712938904/glhz7yipxedh3hqnpqim.jpg',
        originalname: 'bannerImagejpg.jpg',
    };
    return HttpResponse.json(response, {status: 200});
};

const userSelfInfo = async ({request, params, cookies}) => {
    const token = request.headers.get('Authorization');
    if (token) return HttpResponse.json(USER_INFO);
    else {
        return HttpResponse.json({
            message: 'Forbidden: Invalid token',
        }, {status: 403});
    }
};

const login = async ({request, params, cookies}) => {
    try {
        const body = await request.json();
        const {userName, password} = body;
        let responseBody; let status;
        if (!LOGIN[userName] || !LOGIN[userName][password]) {
            responseBody = {message: 'Invalid username/email or password'};
            status = {status: 400};
        } else {
            responseBody = LOGIN[userName][password];
            status = {status: 200};
        }
        return HttpResponse.json(responseBody, status);
    } catch (error) {
        console.error('Error processing login:', error);
        return HttpResponse.json({error: 'Internal server error'}, {status: 500});
    }
};

const avatar = async ({request, params, cookies}) => {
    const response = {
        _id: '66195f995f9d6032ae3ebd6e',
        url: 'https://res.cloudinary.com/dfb8f6xbh/image/upload/v1712938904/glhz7yipxedh3hqnpqim.jpg',
        originalname: 'avatarImagejpg.jpg',
    };
    return HttpResponse.json(response, {status: 200});
};


export const userHandlers = [
    // here you use the mocks above with the route
    // these should have the same name after dot to avoid confusion later on
    http.get(url(API_ROUTES.banner), banner),
    http.get(url(API_ROUTES.userSelfInfo), userSelfInfo),
    http.post(url(API_ROUTES.login), login),
    http.get(url(API_ROUTES.avatar), avatar),
];
