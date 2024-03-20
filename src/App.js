/*eslint-disable*/
import React from 'react';
import './App.css';
// import TestHeader from './TestHeader';
import {axiosInstance as axios} from './requests/axios.js';
import {API_ROUTES} from './requests/routes.js';
import {login} from './store/userSlice.js';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

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
    // const [user, setUser] = React.useState(null);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    /**
     * Handles the click event
     */
    async function handleClick() {
        try {
            const response = await axios.get(API_ROUTES.getUser(1));
            dispatch(
                login({
                    username: response.data.name,
                    email: response.data.email,
                    age: response.data.age,
                    karma: response.data.karma,
                }),
            );
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="App" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <button
                onClick={handleClick}
                style={{
                    padding: '1rem',
                    fontSize: '1rem',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Test API
            </button>
            <div>
                {user ? (
                    <div>
                        <h1>{user.username}</h1>
                        <p>{user.email}</p>
                    </div>
                ) : null}
            </div>
            {/* <TestHeader /> */}
        </div>
    );
}

export default App;
