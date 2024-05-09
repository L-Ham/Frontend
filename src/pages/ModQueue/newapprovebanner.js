import React from 'react';
import {Newactionentry} from './actionentry';
import PropTypes from 'prop-types';
/**
 *
 * @return {JSX.Element} Reportbanner
 */
function Newapprovebanner({approvedByUserame, disapprovedByUserame
    , approvedByAvatarImageUrl, disapprovedByAvatarImageUrl}) {
    const [toggledropdown, settoggledropdown] = React.useState(false);
    const handletoggledropdown = () => {
        settoggledropdown(!toggledropdown);
    };
    let imageurltoputapproved='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png';
    if (approvedByAvatarImageUrl) {
        imageurltoputapproved = approvedByAvatarImageUrl;
    }
    let imageurltoputdisapproved='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png';
    if (disapprovedByAvatarImageUrl) {
        imageurltoputdisapproved = disapprovedByAvatarImageUrl;
    }
    console.log('disapprovedByUserame', disapprovedByUserame);
    console.log(disapprovedByAvatarImageUrl);


    return (
        <div className='ml-2 flex w-[calc(100%_-_8px)] flex-col'>
            <div className="mr-4 flex cursor-pointer items-start
         rounded bg-[#daf6df] px-3 py-2">
                <div className="mr-2 size-7 flex-[0_0_28px]">
                    <div className="relative h-full">
                        <img alt="User avatar" className="box-border size-full
                    rounded-[50%] border
                     border-solid border-[color:var(--newCommunityTheme-line)] object-cover
                    object-center indent-[-9999px] text-[color:var(--newCommunityTheme-body)]"
                        src={imageurltoputapproved}/>
                    </div></div><div className="w-full self-center">
                    <p className="text-xs font-bold  text-[color:var(--newRedditTheme-bodyText)]">Approved</p>
                    <p><a className="no-underline"
                        href="https://www.reddit.com/user/3abwareth"
                        target="_blank" rel="noopener noreferrer">u/{approvedByUserame}
                    </a> 1 month ago</p></div>

                <button className="m-0 flex flex-[0_0_auto] items-center rounded-sm
                                     border-[none] p-1 text-xs capitalize no-underline" onClick={handletoggledropdown}>

                    <svg className="size-5 align-middle text-xl font-normal leading-5"
                        fill="currentColor" height="16" viewBox="0 0 20 20" width="16
                                            " xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5
 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0
 0 1-.442.183Z"></path></svg>
                </button>
            </div>
            {toggledropdown &&
            <div className=" mr-4 rounded-[0_0_4px_4px] border border-solid border-[#edeff1]">


                <h2 className="px-3
                 pb-1 pt-2 text-xs font-normal leading-4
                 text-[#1c1c1c]">Recent actions</h2>


                { approvedByUserame!=null && <Newactionentry label="Approved post" username={approvedByUserame}
                    imageurl={imageurltoputapproved}/>
                }
                { disapprovedByUserame!=null &&
                <Newactionentry label="Removed post" username={disapprovedByUserame}
                    imageurl={imageurltoputdisapproved}/>
                }

            </div>
            }

        </div>
    );
}
Newapprovebanner.propTypes = {
    approvedByUserame: PropTypes.string,
    disapprovedByUserame: PropTypes.string,
    approvedByAvatarImageUrl: PropTypes.string,
    disapprovedByAvatarImageUrl: PropTypes.string,
};
export {Newapprovebanner};
