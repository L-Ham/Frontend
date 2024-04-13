
import React, {useState} from 'react';
import {getIconComponent} from '../../../../../generic components/iconsmap';
import './communityoptions.css';

/**
 * Renders the community options.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityOptions() {
    const [isChecked, setIsChecked] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const CaretDownIcon = getIconComponent('caret-down', false);
    const EyeIcon = isChecked ? getIconComponent('eye', false) : getIconComponent('eye-slash', false);

    const handleSwitch = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="community-options mt-[16px] border-solid
        border-[var(--newCommunityTheme-widgetColors-lineColor)]
        pt-[16px]"
        style={{borderTopWidth: '1px'}}>
            <button
                className={`focus:active btn font relative
                box-border flex min-h-[32px] w-full min-w-[32px]
                cursor-pointer items-center justify-between break-words rounded-full border-DEFAULT
                border-solid border-transparent fill-[var(--textColor)]
                px-[12px] py-0 text-center text-[10px]/[12px]
                font-[700] uppercase tracking-[0.5px] text-[var(--newRedditTheme-widgetColors-sidebarWidgetTextColor)]
                opacity-100 hover:text-[var(--newRedditTheme-widgetColors-sidebarWidgetTextColor)]`}
                onClick={() => setIsOptionsOpen(!isOptionsOpen)}
            >
             Community options
                <CaretDownIcon className="icon" />
            </button>
            { isOptionsOpen && <div className="m-0 p-0">
                <div className="font mx-0 my-[8px] flex items-center
                justify-between break-words text-[14px]/[21px] font-[400]">
                    <label className='flex cursor-default items-center
                    fill-[var(--newRedditTheme-bodyText)] text-[12px]/[16px] font-[500]
                    text-[var(--newRedditTheme-bodyText)]'>
                        <EyeIcon className="icon mr-[8px] size-[20px]
                        border-0 fill-[var(--newRedditTheme-widgetColors-sidebarWidgetTextColor)] align-middle
                         text-[20px]/[20px] font-[400]
                         "
                        stroke='var(--newRedditTheme-widgetColors-sidebarWidgetTextColor)'/>
                        Community theme
                    </label>
                    <button
                        aria-checked={isChecked}
                        className={`switch-btn relative flex h-[24px] w-[37.5px] flex-[0_0_auto]
                        cursor-pointer items-center
                        rounded-full border-2 border-solid
                        border-transparent
                         ${isChecked ?
            'justify-end bg-[var(--newCommunityTheme-active)]' :
            'justify-start bg-[var(--newCommunityTheme-navIconFaded10)]' } `}
                        role="switch"
                        type="button"
                        onClick={() => handleSwitch()}
                    >
                        <div className="size-[19.5px] cursor-pointer rounded-[57%] bg-white
                        shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_2px_3px_0_rgba(0,0,0,0.2)]
                        transition-[left] duration-[0.15s] ease-linear" />
                    </button>
                </div>
            </div>}
        </div>
    );
}
