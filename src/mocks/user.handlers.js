import {http, HttpResponse} from 'msw';
import {API_ROUTES} from '../requests/routes.js';
import {USER_INFO} from './Data/user.data.js';
import {LOGIN} from './Data/user.data.js';
import {url} from './setup.mock.js';
import {FORGOTUSERNAME} from './Data/user.data.js';
import {FORGOTPASSWORD} from './Data/user.data.js';
import {SIGNUP} from './Data/user.data.js';


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

const signup = async ({request, params, cookies}) => {
    try {
        const body = await request.json();
        const {userName, email, password} = body;
        let responseBody; let status;
        if (userName == SIGNUP.userName || email == SIGNUP.email) {
            responseBody = {message: 'user already exists'};
            status = {status: 400};
        } else if (password.length < 8) {
            responseBody = {message: 'Password must be at least 8 characters'};
            status = {status: 400};
        } else {
            responseBody = {message: 'user registered succesfully'};
            status = {status: 200};
        }
        return HttpResponse.json(responseBody, status);
    } catch (error) {
        console.error('Error processing login:', error);
        return HttpResponse.json({error: 'Internal server error'}, {status: 500});
    }
};


const forgotusername = async ({request, params, cookies}) => {
    try {
        const body = await request.json();

        const {email} = body;
        console.log(email);
        let responseBody; let status;
        console.log(FORGOTUSERNAME[email]);
        if (email !== FORGOTUSERNAME.email) {
            responseBody = {message: 'Invalid email'};
            status = {status: 400};
        } else {
            responseBody = FORGOTUSERNAME[email];
            status = {status: 200};
        }
        return HttpResponse.json(responseBody, status);
    } catch (error) {
        console.error('Error processing forgot username:', error);
        return HttpResponse.json({error: 'Internal server error'}, {status: 500});
    }
};

const forgotpassword = async ({request, params, cookies}) => {
    try {
        const body = await request.json();

        const {email} = body;
        console.log(email);
        let responseBody; let status;
        console.log(FORGOTPASSWORD[email]);
        if (email !== FORGOTPASSWORD.email2) {
            responseBody = {message: 'Invalid email'};
            status = {status: 400};
        } else {
            responseBody = FORGOTUSERNAME[email];
            status = {status: 200};
        }
        return HttpResponse.json(responseBody, status);
    } catch (error) {
        console.error('Error processing forgot username:', error);
        return HttpResponse.json({error: 'Internal server error'}, {status: 500});
    }
};


export const userHandlers = [
    // here you use the mocks above with the route
    // these should have the same name after dot to avoid confusion later on
    http.get(url(API_ROUTES.banner), banner),
    http.get(url(API_ROUTES.userSelfInfo), userSelfInfo),
    http.post(url(API_ROUTES.login), login),
    http.post(url(API_ROUTES.forgotusername), forgotusername),
    http.post(url(API_ROUTES.forgotpassword), forgotpassword),
    http.post(url(API_ROUTES.signup), signup),

];
