
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
            style={{borderColor: 'var(--newCommunityTheme-widgetColors-lineColor)', borderTopWidth: '1px'}}
            data-testid="community-options-div">
            <button
                className={classes.communityOptionsButton}
                onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                data-testid="community-options-button"
            >
        Community options
                <CaretDownIcon className="icon" data-testid="caret-down-icon" />
            </button>
            { isOptionsOpen && <div className="m-0 p-0" data-testid="options-open-div">
                <div className={classes.communityOptionsInnerDiv} data-testid="community-options-inner-div">
                    <label className={classes.communityOptionsLabel} data-testid="community-options-label">
                        <EyeIcon className={classes.communityOptionsEyeIcon}
                            stroke='var(--newRedditTheme-widgetColors-sidebarWidgetTextColor)'
                            data-testid="eye-icon"
                        />
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
                        data-testid="community-theme-switch-button"
                    >
                        <div className={classes.communityOptionsSwitchDiv} data-testid="community-options-switch-div" />
                    </button>
                </div>
            </div>}
        </div>
    );
}
