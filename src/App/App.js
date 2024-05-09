
import React from 'react';
import {Login} from '../pages/registration_pages/login.js';
import {SignUp} from '../pages/registration_pages/signup.js';
import {ForgotPassword} from '../pages/registration_pages/forgotpassword.js';
import {ForgotUsername} from '../pages/registration_pages/forgotusername.js';
import {BasicTabs} from '../pages/Settings/main components/styledtabs.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/homepage.js';
import {LayoutWithNavigation} from '../generic components/layoutwithnavigation.js';
import {ForgotPassword2} from '../pages/registration_pages/passwordcontinued2.js';
import {ErrorPage} from '../pages/ErrorPage/errorpage.js';
import {PopularPage} from '../pages/PopularPage/popularpage.js';
import {NotificationProvider} from '../generic components/Notifications/notificationsContext.js';
import {Notifications} from '../generic components/Notifications/notifications.js';
import {NotificationsPage} from '../pages/NotificationsPage/notificationspage.js';
import {Usermanagementroute, MessagesRoute, ModqueueRoute, RemovalPageRoute, RulesPageRoute,
    CreatePostRoute, CommentsRoute, SubredditRoute, ProfilePageRoute} from './pageRoutes.js';
import {AboutSettings} from '../pages/AboutSettings/aboutsettings.js';
// import {ScheduledPosts} from '../pages/ScheduledPosts/scheduledposts.js';
import {SearchPage} from '../pages/SearchPage/searchpage.js';
import {ScheduledPostsRoute} from './pageRoutes.js';
import {Modlayout} from '../generic components/modlayout.js';


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
    const renderModPage = (component) => {
        return (
            <NotificationProvider>
                <Modlayout>
                    {component}
                </Modlayout>
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
                <Route path="/settings/:tab?" element={renderWithLayout(<BasicTabs />)} />
                <Route path="/:type/:name/comments/:postId" element={renderWithLayout(<CommentsRoute />)} />
                <Route path="/r/:name" element={renderWithLayout(<SubredditRoute />)} />
                <Route path="/r/:name?/submit" element={renderWithLayout(<CreatePostRoute />)} />
                <Route path="/submit" element={renderWithLayout(<CreatePostRoute />)} />
                <Route path="/" element={renderWithLayout(<HomePage />)} />
                <Route path="/user/:name/:section?" element={renderWithLayout(<ProfilePageRoute />)} />
                <Route path="/popular" element={renderWithLayout(<PopularPage />)} />
                <Route path="/all" element={renderWithLayout(<HomePage />)} />
                <Route path="/notifications" element={renderWithLayout(<NotificationsPage />)} />
                <Route path="/r/:name/about/rules" element={renderModPage( <RulesPageRoute/>)} />
                <Route path="/r/:name/about/removal" element={renderModPage(<RemovalPageRoute/>)} />
                <Route path='/r/:name/about/settings' element={renderModPage(<AboutSettings />)} />
                <Route path='/r/:name/about/scheduledposts' element={renderModPage(<ScheduledPostsRoute />)} />
                <Route path="/message/:name/:section?" element={renderWithLayout(<MessagesRoute />)} />
                <Route path="/search" element={renderWithLayout(<SearchPage />)} />
                <Route path="/r/:name/about/modqueue/:tab?" element={renderModPage(<ModqueueRoute />)} />
                <Route path="/r/:name/about/usermanagement" element={renderModPage(<Usermanagementroute />)} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
