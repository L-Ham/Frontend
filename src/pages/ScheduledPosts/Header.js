import React from 'react';

/**
 * Renders the SheduledPosts component.
 * @return {JSX.Element} The rendered component.
 */
export function Header() {
    return (
        <div className="_2YY5qLRbI5q6_0JQVKiGt_ zm-d6hGDaBlN7C9OEx3rJ
        hhh-bg-neutral-background hhh-mb-xs hhh-pr-0 mx-[24px]
        mt-5" data-testid="header-div">
            <a href="/submit" data-testid="header-link">
                <button role="button" tabIndex="0"
                    className="_2iuoyPiKHN3kfOoeIQalDT _10BQ7pjWbeYP63SAPNS8Ts HNozj_dKjQZ59ZsfEegz8"
                    onClick={() => {
                        window.open('/submit', '_blank');
                    }}
                    data-testid="header-button"
                >
                    Schedule Post
                </button>
            </a>
        </div>
    );
}
