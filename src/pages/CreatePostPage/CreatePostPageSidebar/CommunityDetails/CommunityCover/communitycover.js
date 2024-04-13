import React from 'react';

/**
 * Renders the community cover.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityCover() {
    return (
        <div className="m-[-12px_-12px_10px] h-[34px]
        rounded-[3px_3px_0_0] bg-[color:var(--newCommunityTheme-active)]
        bg-[image:var(--newCommunityTheme-banner-backgroundImage)]
        bg-cover bg-no-repeat"
        style={{backgroundPositionY: 'center', backgroundPositionX: 'center'}}/>
    );
}
