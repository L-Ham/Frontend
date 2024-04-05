import React from 'react';
import {Login} from './pages/registration_pages/login.js';
import {SignUp} from './pages/registration_pages/signup.js';
import {ForgotPassword} from './pages/registration_pages/forgotpassword.js';
import {ForgotUsername} from './pages/registration_pages/forgotusername.js';
import {Post} from './generic components/Post/post.js';
import {BasicTabs} from './pages/Settings/main components/customtabpanel.js';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import {Subreddit} from './pages/subreddit/subreddit.js';
import {SubredditProvider} from './pages/subreddit/subredditcontext.js';
import {HomePage} from './pages/HomePage/homepage.js';
import {LayoutWithNavigation} from './generic components/layoutwithnavigation.js';

/**
 * Renders a route for displaying a post based on the provided ID.
 * @return {JSX.Element} The rendered Post component.
 */
function PostRoute() {
    const {id} = useParams();
    return <Post postId={id} viewContext='AggregateFeed' />;
}

/**
 * Renders a route for a specific subreddit.
 * @return {JSX.Element} The rendered SubredditRoute component.
 */
function SubredditRoute() {
    const {name} = useParams();
    return (
        <SubredditProvider name={name}>
            <Subreddit />
        </SubredditProvider>
    );
}

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
                <Route path="/popular" element={
                    <LayoutWithNavigation>
                        <HomePage />
                    </LayoutWithNavigation>
                } />
                <Route path="/all" element={
                    <LayoutWithNavigation>
                        <HomePage />
                    </LayoutWithNavigation>
                } />
            </Routes>
        </Router>
    );
}

export default App;
