import React from 'react';
import PropTypes from 'prop-types';
import {getIconComponent} from '../../../../../../../../../generic components/iconsmap';
import './formatoption.css';


/**
 * Renders a single option in the text editor options list.
 * @param {Object} props The props for the component.
 * @param {Object} props.option The option to render.
 * @param {string} props.option.icon The icon to render.
 * @param {string} props.option.name The name of the option.
 * @return {JSX.Element} The rendered component.
 */
export function FormatOption({option: {icon, name}}) {
    const Icon = getIconComponent(icon);
    return (
        <span>
            <button
                role="button"
                tabIndex={-1}
                aria-label="Bold"
                aria-selected="false"
                className="font button-with-tooltip active:text-[color:var(--newRedditTheme-navIcon]
                active:fill-[color:var(--newRedditTheme-navIcon] relative
                box-border flex min-h-[32px] w-auto min-w-[32px] items-center justify-center
                rounded-[4px]
                border-none
                fill-[var(--newCommunityTheme-button)] p-[4px]
                text-center text-[14px] font-[700]
                leading-[0]
                text-[var(--newCommunityTheme-actionIcon)] outline-none transition-[background-color]
                duration-[0.1s]
                hover:bg-[var(--newRedditTheme-navIconFaded10)]"
            >
                <Icon className="icon inline-block size-[20px] p-0 align-middle text-[20px]/[20px]
                font-[400]" />
                <div className="absolute inset-0">
                    <div className="options-list-item-tooltip
                    pointer-events-none
                    absolute bottom-full left-1/2 z-[100] mb-[5px]
                    hidden -translate-x-1/2 whitespace-pre
                    rounded-[5px] p-[5px_16px]
                    text-center
                    text-[12px]/[16px] font-[500]
                    text-[var(--newCommunityTheme-lightText)]
                    text-black
                    transition-opacity
                    delay-[0.5s] duration-0">
                        {name}
                    </div>
                </div>
            </button>
        </span>
    );
}


FormatOption.propTypes = {
    option: PropTypes.object.isRequired,
};
