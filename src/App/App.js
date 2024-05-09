/*eslint-disable*/
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
import {ScheduledPostsRoute} from './pageRoutes.js';
import {Modlayout} from '../generic components/modlayout.js';
import { ModerationSettings } from '../pages/Settings/main components/tabs/moderation.js';


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
        <ModerationSettings />
    );
}

export default App;
