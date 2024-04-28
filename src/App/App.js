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
import {NotificationProvider} from '../generic components/Notifications/notificationsContext.js';
import {Notifications} from '../generic components/Notifications/notifications.js';

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
                    <NotificationProvider>
                        <LayoutWithNavigation>
                            <BasicTabs />
                        </LayoutWithNavigation>
                        <Notifications />
                    </NotificationProvider>
                } />

                <Route path="/post/:id" element={
                    <NotificationProvider>
                        <LayoutWithNavigation>
                            <PostRoute />
                        </LayoutWithNavigation>
                        <Notifications />
                    </NotificationProvider>
                } />
                <Route path="/r/:name" element={
                    <NotificationProvider>
                        <LayoutWithNavigation>
                            <SubredditRoute />
                        </LayoutWithNavigation>
                        <Notifications />
                    </NotificationProvider>
                } />
                <Route path="/r/:name?/submit" element={
                    <NotificationProvider>
                        <LayoutWithNavigation>
                            <CreatePostRoute />
                        </LayoutWithNavigation>
                        <Notifications />
                    </NotificationProvider>
                } />
                <Route path="/" element={
                    <NotificationProvider>
                        <LayoutWithNavigation>
                            <HomePage />
                        </LayoutWithNavigation>
                        <Notifications />
                    </NotificationProvider>
                } />
                <Route path="/user/:name/:section?" element={
                    <NotificationProvider>
                        <LayoutWithNavigation>
                            <ProfilePageRoute />
                        </LayoutWithNavigation>
                        <Notifications />
                    </NotificationProvider>
                } />
                <Route path="/popular" element={
                    <NotificationProvider>
                        <LayoutWithNavigation>
                            <PopularPage />
                        </LayoutWithNavigation>
                        <Notifications />
                    </NotificationProvider>
                } />
                <Route path="/all" element={
                    <NotificationProvider>
                        <LayoutWithNavigation>
                            <HomePage />
                        </LayoutWithNavigation>
                        <Notifications />
                    </NotificationProvider>
                } />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
