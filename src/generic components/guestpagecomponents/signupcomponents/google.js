import React from 'react';
import {useGoogleLogin} from '@react-oauth/google';
import {getIconComponent} from '../../iconsmap';
import PropTypes from 'prop-types';

const SignUpWithGoogleButton = ({onAccessToken}) => {
    const GoogleIcon = getIconComponent('google');

    const onSuccess = async (response) => {
        const accessToken = response.access_token;
        // Log the access token for debugging

        // Pass the access token to the parent component using the callback function
        onAccessToken(accessToken);
    };

    return (
        <button
            onClick={useGoogleLogin({
                scope: 'profile email',
                onSuccess: onSuccess,
            })}
            className="flex h-[40px] w-[280px] items-center justify-center
                rounded-3xl border border-solid border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#4285f40a]"
        >
            <GoogleIcon className="block size-[30px] pl-2" />
            <div className='flex grow justify-center text-sm font-medium'
                style={{fontFamily: '"Google Sans", arial, sans-serif'}}>
                Continue with Google
            </div>
        </button>
    );
};

SignUpWithGoogleButton.propTypes = {
    onAccessToken: PropTypes.func.isRequired,
};

export {SignUpWithGoogleButton};
