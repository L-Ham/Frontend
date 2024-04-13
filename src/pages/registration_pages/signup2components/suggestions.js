/*eslint-disable*/
// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Suggestions() {
    return (
        <>
            <p className="mb-2.5 mt-0 block text-sm font-normal
        leading-[21px]" style={{fontFamily: '"Noto Sans", sans-serif'}}
            data-testid="suggestions"
        >
            Here are some username suggestions
                <a href="#" className="">
                    <img src={refreshImage} alt="Image" style={refreshImageStyle} />
                </a>
            </p>
            <div className="usernames">
                <div className="Onboarding_usernameWrapper"
                    data-testid="usernameWrapper"
                >
                    <a className="block bg-transparent pb-2
                text-[#0079d3] no-underline" data-username="Sad_Tonight_2694"
                    href="#" onClick={handleUsernameSuggestionClick}>
                    Sad_Tonight_2694
                    </a>
                    <a className="block bg-transparent pb-2 text-[#0079d3] no-underline"
                        data-username="Sad_Most1525" href="#" onClick={handleUsernameSuggestionClick}>
                    Sad_Most1525
                    </a>
                    <a className="block bg-transparent pb-2 text-[#0079d3] no-underline"
                        data-username="Fit_Can_7218" href="#" onClick={handleUsernameSuggestionClick}>
                    Fit_Can_7218
                    </a>
                    <a className="block bg-transparent pb-2 text-[#0079d3] no-underline"
                        data-username="Popular-Tale2861"
                        href="#" onClick={handleUsernameSuggestionClick}>
                    Popular-Tale2861
                    </a>
                    <a className="block bg-transparent pb-2 text-[#0079d3] no-underline"
                        data-username="Grand_Wind4829" href="#" onClick={handleUsernameSuggestionClick}>
                    Grand_Wind4829
                    </a>
                </div>
            </div>
        </>
    );
}
export {Suggestions};
