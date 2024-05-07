/*eslint-disable*/
import React from 'react';
import propTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../../generic components/iconsmap';
import {DropdownMenu} from '../../../../../../../../../../pages/subreddit/General/Components/DropdownMenu/dropdownmenu.js';
import './options.css';

/**
 * Options
 * @param {object} props - props
 * @param {string} props.type - type
 * @return {JSX.Element} Options
 * @constructor
 * */
export function Options({type}) {
    const [showOptions, setShowOptions] = React.useState(false);
    const OverflowHorizontalIcon = getIconComponent('overflow-horizontal', false);

    const menuItems = [
        {
            content: {
                text: 'Don\'t get updates on this',
            },
            onClick: () => {
                alert('Don\'t get updates on this');
            },
        },
        {
            content: {
                text: 'Hide notification',
            },
            onClick: () => {
                alert('hide');
            },
        }
    ];

    return (
      <div className="flex flex-col items-center justify-start z-[10]" data-testid="main-div-&(^KMSAJHVBUbkjl">
    <div data-testid="inner-div-^&*@XZMKLDSAsssss">
        <div className='relative' data-testid="button-container-#%^$#jnz<anSNJSA">
            <button
                className="
                nav-bar-noti-menu__list-button-small nav-bar-noti-menu__list-button-plain
                icon
                nav-bar-noti-menu__list-button
                inline-flex items-center
                justify-center px-[var(--rem6)]"
                onClick={(e) => {
                    setShowOptions(!showOptions);
                    e.stopPropagation();
                }}
                data-testid="options-button-~!@#@#~!@sdJ"
            >
                <span className="flex items-center justify-center" data-testid="button-span">
                    <span className="flex" data-testid="icon-span">
                        <OverflowHorizontalIcon
                            className="box-content size-[16] overflow-hidden fill-current"
                            data-testid="overflow-icon-=LSADZxxss"
                        />
                    </span>
                </span>
            </button>
            <DropdownMenu
                position="top-[48px] right-0"
                items={menuItems}
                isHidden={!showOptions}
                data-testid="dropdown-menu-0(^&*./'s"
            />
        </div>
    </div>
</div>
    );
}

Options.propTypes = {
    type: propTypes.string.isRequired,
};
