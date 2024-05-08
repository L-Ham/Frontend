import React, {useState} from 'react';
import {AdvertiseButton} from './Buttons/advertisebutton.js';
import {ActionButton} from './Buttons/actionbutton.js';
import {CreatePost} from './Buttons/createpost.js';
import {ProfileMenu} from './ProfileMenu/profilemenu.js';
import {rightItemsClasses as styles} from './rightitems.styles.js';
import {ChatsFull} from '../../Chats/ChatsFull.js';
/**
 * The right items of the header
 * @component
 * @example
 * // Render the right items of the header
 * <RightItems />
 * @return {JSX.Element} The right items of the header
 */
function RightItems() {
    const [showChats, setShowChats] = useState(false);
    return (
        <div className={styles.root} data-testid='right-items'>
            <div className={styles.buttonsContainer}>
                <AdvertiseButton />
                <ActionButton icon='chat' onClick={() => setShowChats(!showChats)}/>
                <CreatePost />
                <ActionButton icon='low' onClick={() => alert('Low button clicked')}/>
            </div>
            <ProfileMenu />
            {showChats && <ChatsFull show = {setShowChats} />}
        </div>
    );
}

export {RightItems};
