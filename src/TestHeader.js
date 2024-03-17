import React from 'react';
import logo from './logo.svg';

/**
 * TestHeader component.
 * @return {JSX.Element} The TestHeader component.
 */
function TestHeader() {
    return (
        <header className="App-header" data-testid="header-1">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
        Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
        Learn React
            </a>
            <h1
                className="mt-4 text-3xl font-bold text-blue-500 underline"
            >
                    If I&apos;m blue, bold & underlined, then tailwindcss is working!
            </h1>
        </header>
    );
}

export default TestHeader;
