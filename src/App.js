import React from 'react';
import './App.css';
import TestHeader from './TestHeader';
import {ChakraProvider} from '@chakra-ui/react';

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
        <ChakraProvider>
            <div className="App">
                <TestHeader />
            </div>
        </ChakraProvider>
    );
}

export default App;
