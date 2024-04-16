import React from 'react';
import {ErrorMessage} from '../../PostCreationFormWorkspace/ErrorMessage/errormessage.js';
import './actionbuttons.css';
import {classes} from './actionbuttons.styles.js';
import {useActionButtons} from './actionbuttons.hooks.js';

/**
 * Renders the actions buttons.
 * @return {JSX.Element} The rendered component.
 */
export function ActionButtons() {
    const {handlePost, handleClick, btnText, canPost, errorMessage,
        setErrorMessage} = useActionButtons();

    return (
        <div className={classes.actionButtonsDiv}>
            <div className={classes.actionButtonsInnerDiv}>
                <div className={classes.actionButtonsFlexDiv}>
                    <div className={classes.actionButtonsBoxDiv}>
                        <button className={classes.actionButtonsPrimaryBtn}
                            onClick={handlePost}
                            disabled={!canPost}
                        >
                        Post
                        </button>
                    </div>
                    <div className={classes.actionButtonsBoxDiv}>
                        <button className={classes.actionButtonsBorderedBtn}
                            style={{borderWidth: '1px'}}
                            onClick={handleClick}
                        >
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
            {errorMessage && <ErrorMessage errorMessage={errorMessage}
                setErrorMessage={setErrorMessage} position='end'/> }
        </div>
    );
}


