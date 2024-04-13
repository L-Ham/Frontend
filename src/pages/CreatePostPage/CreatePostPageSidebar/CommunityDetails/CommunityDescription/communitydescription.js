import React from 'react';

/**
 * Renders the community description.
 * @return {JSX.Element} The rendered component.
 */
export function CommunityDescription() {
    const description = `Welcome to r/OnePiece, 
    the community for Eiichiro Oda's manga and anime series One Piece.
     From the East Blue to the New World,
     anything related to the world of One Piece belongs here! 
     If you've just set sail with the Straw Hat Pirates, be wary of spoilers on this subreddit!`;

    return (
        <div className="relative mb-[8px] break-words fill-[var(--newRedditTheme-bodyText)]
         text-[var(--newRedditTheme-bodyText)]">
            <div className="font break-words text-[14px]/[21px] font-[400]">
                {description}
            </div>
        </div>
    );
}
