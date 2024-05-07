import React from 'react';
import PropTypes from 'prop-types';
import {SvgIcon} from './svgicon';

/**
 * Renders a list item for the community appearance settings.
 * @param {Object} props The component props.
 * @param {string} props.title The title of the list item.
 * @param {Function} props.onClick The click handler for the list item.
 * @return {JSX.Element} The rendered component.
 * */
export function ListItem({title, onClick}) {
    return (
        <li className="relative mt-0 list-none" role="presentation" data-testid="list-item">
            <div tabIndex="0" className="active:bg-interactive-pressed relative flex
    cursor-pointer justify-between gap-2 px-4 py-2 text-[color:var(--color-secondary)]
    -outline-offset-1 hover:bg-[var(--color-neutral-background-hover)]
    hover:text-[color:var(--color-secondary)] hover:no-underline"
            onClick={onClick} data-testid="list-item-div">
                <span className="flex min-w-0 shrink items-center gap-2" data-testid="list-item-span-1">
                    <span className="flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]"
                        data-testid="list-item-inner-span-1">
                        <span className="text-[1.25rem]/[0.875rem]" data-testid="list-item-title">{title}</span>
                        <span className="text-[0.75rem]/[1rem] text-[color:var(--color-secondary-weak)]"
                            data-testid="list-item-subtitle"></span>
                    </span>
                </span>
                <span className="flex shrink-0 items-center" data-testid="list-item-span-2">
                    <SvgIcon data-testid="list-item-svgicon">
                        <path d="m7.942 15.442-.884-.884L11.616
                 10 7.058 5.442l.884-.884 5 5a.624.624
                 0 0 1 0 .884l-5 5Z" data-testid="list-item-path"></path>
                    </SvgIcon>
                </span>
            </div>
        </li>
    );
}
// propTypes
ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
