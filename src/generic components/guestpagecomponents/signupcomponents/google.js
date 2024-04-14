import React from 'react';
import {useGoogleLogin} from '@react-oauth/google';
import {getIconComponent} from '../../iconsmap';
import PropTypes from 'prop-types';

/**
 * Takes in a callback function to pass the access token to the parent component
 * @param {func} onAccessToken
 * @return {JSX.Element} GoogleButton
 */
export function GoogleButton({onAccessToken}) {
    const GoogleIcon = getIconComponent('google');

    const onSuccess = async (response) => {
        const accessToken = response.access_token;
        console.log('accessToken', accessToken);
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
            data-testid="google-button"
        >
            <GoogleIcon className="block size-[30px] pl-2" />
            <div className='flex grow justify-center text-sm font-medium'
                style={{fontFamily: '"Google Sans", arial, sans-serif'}}>
                Continue with Google
            </div>
        </button>
    );
}

GoogleButton.propTypes = {
    onAccessToken: PropTypes.func.isRequired,
};
