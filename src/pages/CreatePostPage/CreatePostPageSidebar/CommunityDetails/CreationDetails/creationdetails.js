import React from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import {classes} from './creationdetails.styles';
import {useCreationDate} from './creationdetails.hooks.js';

/**
 * Renders the creation details.
 * @return {JSX.Element} The rendered component.
 */
export function CreationDetails() {
    const {formattedDate} = useCreationDate();
    const CakeIcon = getIconComponent('cake', false);

    return (
        <div className={classes.creationDetailsDiv}>
            <div className={classes.creationDetailsInnerDiv}>
                <CakeIcon className={classes.creationDetailsIcon}/>
                <span className={classes.creationDetailsSpan}>
                Created {/* */}{formattedDate}
                </span>
            </div>
        </div>
    );
}
