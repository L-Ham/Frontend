import React from 'react';
import {ReactComponent as logo} from './logo.svg';


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
        </header>
    );
}

export default TestHeader;
