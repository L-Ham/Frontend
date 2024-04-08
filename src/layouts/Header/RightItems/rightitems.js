import React from 'react';
import {AdvertiseButton} from './Buttons/advertisebutton';
import {ActionButton} from './Buttons/actionbutton';
import {CreatePost} from './Buttons/createpost';
import {ProfileMenu} from './ProfileMenu/profilemenu';
import {rightItemsClasses as styles} from './rightitems.styles';
/**
 * The right items of the header
 * @component
 * @example
 * // Render the right items of the header
 * <RightItems />
 * @return {JSX.Element} The right items of the header
 */
function RightItems() {
    return (
        <div className={styles.root}>
            <div className={styles.buttonsContainer}>
                <AdvertiseButton />
                <ActionButton icon='chat'/>
                <CreatePost />
                <ActionButton icon='low'/>
            </div>
            <ProfileMenu />
        </div>
    );
}

export {RightItems};
