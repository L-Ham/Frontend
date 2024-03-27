import React from 'react';
import PropTypes from 'prop-types';

/**
 * User drawer element component
 * This component is used to render an element in the user drawer
 * @component
 * @param {object} props - The component props
 * @param {element} props.icon - The icon element
 * @param {string} props.primaryText - The main text
 * @param {string} props.secondaryText - The weak text
 * @param {string} props.href - The href link. If the drawer element should redirect to a link (optional)
 * @example
 * // Render the user drawer element
 * <UserDrawerElement />
 * /
 * @return {JSX.Element} The user drawer element component
 */
function UserDrawerElement({icon = null, primaryText = '', secondaryText = '', href = '#'}) {
    return (
        <a
            href={href}
            className="flex items-center gap-2 px-4 py-2 text-[#0f1a1c]
                 no-underline -outline-offset-1 hover:bg-[#f2f4f5] hover:text-black
                  hover:no-underline active:bg-[#00000029]">

            <span className="flex items-center gap-2">
                <span className="flex items-center justify-center">

                    <span className="flex items-center justify-center pr-2">
                        {icon}
                    </span>
                    <span className="flex shrink-0 flex-col justify-center py-2">
                        <span className="text-sm">
                            <span className="ml-1 inline-block leading-5">
                                <span className="text-[#2a3c42]">
                                    {primaryText}
                                </span>
                            </span>
                        </span>

                        {secondaryText && (
                            <span className="text-xs text-[#576f76]">
                                <span className="ml-1 inline-block pb-0 text-[#2a3c42]">
                                    <span className="mb-0 inline-block">
                                        {secondaryText}
                                    </span>
                                </span>
                            </span>
                        )}

                    </span>


                </span>
            </span>
        </a>
    );
}

UserDrawerElement.propTypes = {
    icon: PropTypes.element,
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    href: PropTypes.string,
};

export {UserDrawerElement};
