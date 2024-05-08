import React from 'react';
import {sectionItemsClasses as styles} from '../sidebarsection.styles.js';
import {useCreateCommunityItem} from './community.hooks.js';
import {CreateCommunity} from './CreateCommunity/createcommunity.js';

/**
 * The Create Community Item in the sidebar section
 * consists of an icon and a label with a onClick event
 * @component
 * @example
 * // Render the generic sidebar section item
 * <SectionItem />
 * @return {JSX.Element} The generic sidebar section item component
 */
function CreateCommunityItem() {
    const {Icon, onClick, isclicked, setisclicked} = useCreateCommunityItem();
    return (
        <>
            {isclicked &&
            <div className=" fixed inset-0 z-[1000] flex items-center justify-center">
                <div className="fixed inset-0 bg-[rgba(0,_0,_0,_0.5)]"/>
                <CreateCommunity setisclicked={setisclicked} />
            </div>
            }
            <div className={styles.root} onClick={onClick} data-testid={`create-community-item`}>
                <span className={styles.leftItemsWrapper}>
                    <span className={styles.leftIconContainer}>
                        <Icon />
                    </span>
                    <span className={styles.label}>Create Community</span>
                </span>
            </div>
        </>
    );
}


export {CreateCommunityItem};
