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
        <div className={classes.actionButtonsDiv} data-testid="action-buttons-div">
            <div className={classes.actionButtonsInnerDiv} data-testid="action-buttons-inner-div">
                <div className={classes.actionButtonsFlexDiv} data-testid="action-buttons-flex-div">
                    <div className={classes.actionButtonsBoxDiv} data-testid="action-buttons-box-div-1">
                        <button className={classes.actionButtonsPrimaryBtn}
                            onClick={handlePost}
                            disabled={!canPost}
                            data-testid="action-buttons-primary-btn"
                        >
                Post
                        </button>
                    </div>
                    <div className={classes.actionButtonsBoxDiv} data-testid="action-buttons-box-div-2">
                        <button className={classes.actionButtonsBorderedBtn}
                            style={{borderWidth: '1px'}}
                            onClick={handleClick}
                            data-testid="action-buttons-bordered-btn"
                        >
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
            {errorMessage && <ErrorMessage errorMessage={errorMessage}
                setErrorMessage={setErrorMessage} position='end' data-testid="error-message"/> }
        </div>
    );
}


