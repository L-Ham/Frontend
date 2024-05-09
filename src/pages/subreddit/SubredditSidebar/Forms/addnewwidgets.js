import React from 'react';
import {useSubreddit} from '../../subredditcontext.js';

// /////////////////////////////////////////////////////////////////////////////
// contains three buttons that open forms for adding new widgets
// each one have label and onclick function
export const AddNewWidgets = () => {
    const {setIsBookmarksFormVisible, setIsTextWidgetFormVisible, setIsAddNewWidgetsVisible, about} = useSubreddit();

    const classes = {
        addNewWidgetsContainer: 'flex flex-col gap-4 bg-[var(--background)]',
        addNewWidgetsBtn: `bg-[var(--newCommunityTheme-button)] 
        text-[color:var(--newCommunityTheme-body)] text-[14px]/[17px] 
        font-[700] tracking-[unset] text-center align-middle cursor-pointer px-[16px] py-[4px] rounded-full`,
        closeButton: `absolute top-0 right-0 p-2 cursor-pointer`,
    };

    const formStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        zIndex: '1000',
    };

    return (
        <div className={classes.addNewWidgetsContainer}
            style={formStyle} data-testid="add-new-widgets-container"
        >
            <div className={classes.closeButton} onClick={() => setIsAddNewWidgetsVisible(false)}>
                X
            </div>
            <button
                className={classes.addNewWidgetsBtn}
                onClick={() => {
                    window.open(`${about.communityDetails.name}/about/rules`, '_self');
                }}
            >
                Add Rules
            </button>
            <button
                className={classes.addNewWidgetsBtn}
                onClick={() => {
                    setIsBookmarksFormVisible(true);
                    setIsAddNewWidgetsVisible(false);
                }}
            >
                Add Bookmarks
            </button>
            <button
                className={classes.addNewWidgetsBtn}
                onClick={() => {
                    setIsTextWidgetFormVisible(true);
                    setIsAddNewWidgetsVisible(false);
                }}
            >
                Add Text Widget
            </button>
        </div>
    );
};
