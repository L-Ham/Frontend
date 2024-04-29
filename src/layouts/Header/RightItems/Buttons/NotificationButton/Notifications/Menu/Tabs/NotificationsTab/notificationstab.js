import React from 'react';
import './notificationstab.css';

/**
 * Notifications Tab
 * @return {JSX.Element} Notifications Tab
 * @constructor
 * */
export function NotificationsTab() {
    return (
        <div className="p-2">
            <div className="flex items-center justify-center py-2">
                <span className="apple-font text-[0.875rem]/[1.25rem] font-semibold">Notifications</span>
            </div>
        </div>
    );
}
