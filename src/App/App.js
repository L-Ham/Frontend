import React from 'react';
import {Login} from '../pages/registration_pages/login.js';
import {SignUp} from '../pages/registration_pages/signup.js';
import {ForgotPassword} from '../pages/registration_pages/forgotpassword.js';
import {ForgotUsername} from '../pages/registration_pages/forgotusername.js';
import {BasicTabs} from '../pages/Settings/main components/styledtabs.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/homepage.js';
import {LayoutWithNavigation} from '../generic components/layoutwithnavigation.js';
import {CommentsRoute, SubredditRoute, ProfilePageRoute} from './pageRoutes.js';
import {ForgotPassword2} from '../pages/registration_pages/passwordcontinued2.js';
import {ErrorPage} from '../pages/ErrorPage/errorpage.js';
import {PopularPage} from '../pages/PopularPage/popularpage.js';
import {CreatePostRoute} from './pageRoutes.js';
import {MessagesRoute} from './pageRoutes.js';
import {NotificationProvider} from '../generic components/Notifications/notificationsContext.js';
import {Notifications} from '../generic components/Notifications/notifications.js';
import {NotificationsPage} from '../pages/NotificationsPage/notificationspage.js';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
function App() {
    const renderWithLayout = (component) => {
        return (
            <NotificationProvider>
                <LayoutWithNavigation>
                    {component}
                </LayoutWithNavigation>
                <Notifications />
            </NotificationProvider>
        );
    };
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
                <Route path="/message/:name/:section?" element={
                    <LayoutWithNavigation>
                        <MessagesRoute />
                    </LayoutWithNavigation>
                } />
                <Route path="/settings/:tab?" element={renderWithLayout(<BasicTabs />)} />
                <Route path="/r/:name/comments/:postId" element={renderWithLayout(<CommentsRoute />)} />
                <Route path="/r/:name" element={renderWithLayout(<SubredditRoute />)} />
                <Route path="/r/:name?/submit" element={renderWithLayout(<CreatePostRoute />)} />
                <Route path="/" element={renderWithLayout(<HomePage />)} />
                <Route path="/user/:name/:section?" element={renderWithLayout(<ProfilePageRoute />)} />
                <Route path="/popular" element={renderWithLayout(<PopularPage />)} />
                <Route path="/all" element={renderWithLayout(<HomePage />)} />
                <Route path="/notifications" element={renderWithLayout(<NotificationsPage />)} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
