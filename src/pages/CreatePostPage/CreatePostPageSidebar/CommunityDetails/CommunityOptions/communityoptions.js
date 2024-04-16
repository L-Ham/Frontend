
import React, {useState} from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import './communityoptions.css';
import {useCreatePostPage} from '../../../createpostpage.context.js';
import {classes} from './communityoptions.styles.js';

/**
 * Renders the community options.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityOptions() {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const CaretDownIcon = getIconComponent('caret-down', false);
    const {isCommunityTheme, setIsCommunityTheme} = useCreatePostPage();
    const EyeIcon = isCommunityTheme ? getIconComponent('eye', false) : getIconComponent('eye-slash', false);

    return (
        <div className={classes.communityOptionsDiv}
            style={{borderColor: 'var(--newCommunityTheme-widgetColors-lineColor)', borderTopWidth: '1px'}}>
            <button
                className={classes.communityOptionsButton}
                onClick={() => setIsOptionsOpen(!isOptionsOpen)}
            >
        Community options
                <CaretDownIcon className="icon" />
            </button>
            { isOptionsOpen && <div className="m-0 p-0">
                <div className={classes.communityOptionsInnerDiv}>
                    <label className={classes.communityOptionsLabel}>
                        <EyeIcon className={classes.communityOptionsEyeIcon}
                            stroke='var(--newRedditTheme-widgetColors-sidebarWidgetTextColor)'/>
                Community theme
                    </label>
                    <button
                        aria-checked={isCommunityTheme}
                        className={`${classes.communityOptionsSwitchButton} ${isCommunityTheme ?
                            'justify-end bg-[var(--newCommunityTheme-active)]' :
                            'justify-start bg-[var(--newCommunityTheme-navIconFaded10)]'}`}
                        role="switch"
                        type="button"
                        onClick={() => {
                            setIsCommunityTheme(!isCommunityTheme);
                        }}
                    >
                        <div className={classes.communityOptionsSwitchDiv} />
                    </button>
                </div>
            </div>}
        </div>
    );
}
