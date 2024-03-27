import React from 'react';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import {FaGoogle} from 'react-icons/fa';

export const SignUpWithGoogleButton = () => {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace this with your Google Client ID

    const handleSuccess = (response) => {
        console.log('Authentication successful:', response);
    };

    const handleError = (error) => {
        console.error('Authentication error:', error);
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                text="continue_with" // Set the text prop to 'continue_with'
                shape="circle" // Set the shape prop to 'circle'
                width="280px" // Set the width prop to '100%'

                buttonText={
                    <>
                        <span style={{marginRight: '8px'}}>Continue with Google</span>
                        <FaGoogle size={18} style={{verticalAlign: 'middle'}} /> {/* Google logo */}
                    </>
                }
            />
        </GoogleOAuthProvider>
    );
};
