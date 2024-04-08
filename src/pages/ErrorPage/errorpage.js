import React from 'react';
import {getIconComponent} from '../../generic components/iconsmap';
/**
 * The error page component.
 * @return {React.Component} The error page component.
 */
export function ErrorPage() {
    const DizzySnooIconOutline = getIconComponent('dizzy-snoo', false);
    return (
        <div className='flex h-screen flex-col items-center justify-center' style={{fontFamily: 'Arial, sans-serif'}}>
            <DizzySnooIconOutline />
            <h3 className='my-4 text-[1.17em] font-bold'>
                Something went wrong
            </h3>
            <a href='/' className='cursor-pointer underline'>Go home</a>
        </div>
    );
}
