import React from 'react';
import {Login} from '../pages/registration_pages/login.js';
import {SignUp} from '../pages/registration_pages/signup.js';
import {ForgotPassword} from '../pages/registration_pages/forgotpassword.js';
import {ForgotUsername} from '../pages/registration_pages/forgotusername.js';
import {BasicTabs} from '../pages/Settings/main components/customtabpanel.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/homepage.js';
import {LayoutWithNavigation} from '../generic components/layoutwithnavigation.js';
import {PostRoute, SubredditRoute} from './pageRoutes.js';
import {SignUpContinued} from '../pages/registration_pages/signupcontinued.js';
import {PasswordContinued} from '../pages/registration_pages/passwordcontinued.js';
import {ForgotPassword2} from '../pages/registration_pages/passwordcontinued2.js';
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
                <Route path="/register/continue" element={<SignUpContinued />} />
                <Route path="/password" element={<ForgotPassword />} />
                <Route path="/username" element={<ForgotUsername />} />
                <Route path="/resetpasswordold" element={<PasswordContinued />} />
                <Route path="/resetpassword" element={<ForgotPassword2/>} />
                <Route path="/settings" element={
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
                <Route path="/" element={
                    <LayoutWithNavigation>
                        <HomePage />
                    </LayoutWithNavigation>
                } />
            </Routes>
        </Router>
    );
}

export default App;
