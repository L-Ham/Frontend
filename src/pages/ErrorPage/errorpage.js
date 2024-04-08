import React from 'react';
import {getIconComponent} from '../../generic components/iconsmap';
import {NavLink} from 'react-router-dom';
/**
 * The error page component.
 * @return {React.Component} The error page component.
 */
export function ErrorPage() {
    const DizzySnooIconOutline = getIconComponent('dizzy-snoo', false);
    return (
        <div
            className='flex h-screen flex-col items-center justify-center'
            style={{fontFamily: 'Arial, sans-serif'}}
            data-testid='error-page'
        >
            <DizzySnooIconOutline data-testid='dizzy-snoo-icon' />
            <h3 className='my-4 text-[1.17em] font-bold' data-testid='error-message'>
                Something went wrong
            </h3>
            <NavLink to='/' className='cursor-pointer text-blue-500 underline' data-testid='go-home-link'>
                Go home
            </NavLink>
        </div>
    );
}
