import React from 'react';
import './App.css';
import TestHeader from './TestHeader';

/**
 * Main application component
 * @component
 * @param {Object} props - The component props
 * @example
 * // Render the application
 * <App />
 * @return {JSX.Element} The main application component
 */
function App() {
    return (
        <div className="App">
            <TestHeader />
        </div>
    );
}

export default App;
