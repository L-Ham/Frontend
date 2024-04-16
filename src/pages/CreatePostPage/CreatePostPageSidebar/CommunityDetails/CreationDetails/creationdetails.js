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
        <div className={classes.creationDetailsDiv} data-testid="creation-details-div">
            <div className={classes.creationDetailsInnerDiv} data-testid="creation-details-inner-div">
                <CakeIcon className={classes.creationDetailsIcon} data-testid="creation-details-icon"/>
                <span className={classes.creationDetailsSpan} data-testid="creation-details-span">
            Created {/* */}{formattedDate}
                </span>
            </div>
        </div>
    );
}
