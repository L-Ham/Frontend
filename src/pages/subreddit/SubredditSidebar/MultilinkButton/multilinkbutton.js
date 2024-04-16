import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../General/Components/DropdownMenu/dropdownmenu.js';
import {getIconComponent} from '../../../../generic components/iconsmap.js';
import {useMultiLinkButton} from './multilinkbutton.hooks.js';
import {multiLinkButtonClasses} from './multilinkbutton.styles.js';


/**
 * Renders a MultiLinkButton.
 * @param {Object} data - The data for the MultiLinkButton.
 * @return {JSX.Element} The rendered component.
 */
export function MultiLinkButton({data: {text, url, children, icon: Icon}}) {
    const CaretDownIcon = getIconComponent('caret-down', false);
    const {handleClick, isOptionsVisible, menuItems, isSingleOption} = useMultiLinkButton({url, children});

    const Tag = isSingleOption ? 'a' : 'button';
    return (
        <div className={multiLinkButtonClasses.relativeContainer} data-testid="relative-container">
            <Tag
                className={isSingleOption ? multiLinkButtonClasses.singleOption : multiLinkButtonClasses.multiOption}
                onClick={handleClick}
                data-testid="tag"
            >
                <span className={multiLinkButtonClasses.flexContainer} data-testid="flex-container">
                    {Icon && <span className="mr-2 flex" data-testid="icon-span">{Icon}</span>}
                    <span className={multiLinkButtonClasses.textContainer} data-testid="text-container">
                        <span data-testid="text-span">{text}</span>
                    </span>
                </span>
                {!isSingleOption && <span className={multiLinkButtonClasses.caretIcon} data-testid="caret-icon">
                    <CaretDownIcon height='16' width='16' data-testid="caret-down-icon"/>
                </span>
                }
            </Tag>
            <DropdownMenu
                position={multiLinkButtonClasses.dropdownMenuPosition}
                items={menuItems} isHidden={!isOptionsVisible} data-testid="dropdown-menu"
            />
        </div>
    );
}

MultiLinkButton.propTypes = {
    data: PropTypes.object.isRequired,
};
