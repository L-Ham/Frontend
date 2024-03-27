import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
/**
 *
 * @return {JSX.Element} text fields for username and password
 */
export function BasicTextFields() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const dummyUsername = 'john'; // Dummy username
    const dummyPassword = '123'; // Dummy password

    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });

        // Validation for username
        if (id === 'username') {
            if (value.trim().length < 3 || value.trim().length > 20) {
                setErrors({
                    ...errors,
                    username: 'Username must be between 3 and 20 characters',
                });
            } else {
                setErrors({
                    ...errors,
                    username: '',
                });
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Check if entered username and password match the dummy values
        if (formData.username === dummyUsername && formData.password === dummyPassword) {
            // Credentials match, show successful login alert
            alert('Login successful');
        } else {
            // Credentials don't match, update errors state to indicate incorrect username or password
            setErrors({
                ...errors,
                username: 'Incorrect username or password',
                password: 'Incorrect username or password',
            });
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': {
                    m: 1, // Adjust margin to control vertical spacing between components
                    width: '100%', // Adjust default width for components
                    fontWeight: 'bold',
                    position: 'relative',
                },
                'display': 'flex',
                'flexDirection': 'column', // Set flex direction to column to stack components vertically
                'alignItems': 'flex-start',
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="username"
                label="USERNAME"
                variant="filled"
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
                InputProps={{
                    classes: {
                        root: 'input-root',
                    },
                }}
                sx={{
                    width: '100%', // Adjust width of username field
                    maxWidth: '275px', // Adjust maximum width of username field
                    height: '100%', // Adjust height of username field
                    maxHeight: '5px', // Adjust maximum height of username field
                    borderColor: errors.username ? 'red' : '',
                    mb: '15px', // Adjust margin-bottom to control vertical spacing
                }}
            />
            <div style={{marginBottom: '35px'}} /> {/* Spacer below Heading */}
            <TextField
                id="password"
                label="PASSWORD"
                variant="filled"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                    classes: {
                        root: 'input-root',
                    },
                }}
                sx={{
                    width: '100%', // Adjust width of password field
                    maxWidth: '275px', // Adjust maximum width of password field
                    height: '100%', // Adjust height of password field
                    maxHeight: '30px', // Adjust maximum height of password field
                    borderColor: errors.password ? 'red' : '',
                    mb: '15px', // Adjust margin-bottom to control vertical spacing
                }}
            />
            <div style={{marginBottom: '15px'}} /> {/* Spacer below Heading */}
            <Button
                type="submit"
                variant="contained"

                role="button"
                sx={{
                    'backgroundColor': '#1976d2',
                    'fontFamily': 'IBMPlexSans, sans-serif',
                    'fontSize': '14px',
                    'fontWeight': 600,
                    'width': '100%', // Adjust width of login button
                    'maxWidth': '275px', // Adjust maximum width of login button
                    'mb': '15px', // Adjust margin-bottom to control vertical spacing
                    '&:hover': {
                        backgroundColor: '#125699', // Change button color on hover
                    },
                }}
            >
                LOG IN
            </Button>
        </Box>
    );
}
