import React from 'react';
import {Login} from '../pages/registration_pages/login.js';
import {SignUp} from '../pages/registration_pages/signup.js';
import {ForgotPassword} from '../pages/registration_pages/forgotpassword.js';
import {ForgotUsername} from '../pages/registration_pages/forgotusername.js';
import {BasicTabs} from '../pages/Settings/main components/styledtabs.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/homepage.js';
import {LayoutWithNavigation} from '../generic components/layoutwithnavigation.js';
import {PostRoute, SubredditRoute, ProfilePageRoute} from './pageRoutes.js';
import {ForgotPassword2} from '../pages/registration_pages/passwordcontinued2.js';
import {ErrorPage} from '../pages/ErrorPage/errorpage.js';
import {PopularPage} from '../pages/PopularPage/popularpage.js';
import {CreatePostRoute} from './pageRoutes.js';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/password" element={<ForgotPassword />} />
                <Route path="/username" element={<ForgotUsername />} />
                <Route path="/resetpassword" element={<ForgotPassword2/>} />
                <Route path="/settings/:tab?" element={
                    <LayoutWithNavigation>
                        <BasicTabs />
                    </LayoutWithNavigation>
                } />

                <Route path="/post/:id" element={
                    <LayoutWithNavigation>
                        <PostRoute />
                    </LayoutWithNavigation>
                } />
                <Route path="/r/:name" element={
                    <LayoutWithNavigation>
                        <SubredditRoute />
                    </LayoutWithNavigation>
                } />
                <Route path="/r/:name?/submit" element={
                    <LayoutWithNavigation>
                        <CreatePostRoute />
                    </LayoutWithNavigation>
                } />
                <Route path="/" element={
                    <LayoutWithNavigation>
                        <HomePage />
                    </LayoutWithNavigation>
                } />
                <Route path="/user/:name/:section?" element={
                    <LayoutWithNavigation>
                        <ProfilePageRoute />
                    </LayoutWithNavigation>
                } />
                <Route path="/popular" element={
                    <LayoutWithNavigation>
                        <PopularPage />
                    </LayoutWithNavigation>
                } />
                <Route path="/all" element={
                    <LayoutWithNavigation>
                        <HomePage />
                    </LayoutWithNavigation>
                } />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
