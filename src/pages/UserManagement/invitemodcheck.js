
import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function Invitemodcheck({labeltext1, labeltext2}) {
    return (
        <div className="mt-4 block px-4">
            <button aria-checked="true" aria-disabled="false"
                className="box-border inline-flex fill-[#0079d3]
                            text-xs font-bold leading-4 text-[var(--newCommunityTheme-bodyText)]"
                type="button" role="checkbox"><span tabIndex="-1"
                    className="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg"
                        width="20" height="20" viewBox="0 0 20 20" className=" mr-2 size-4">
                        <path fill="inherit" d="M0,3.34755033 C0,1.49874933 1.5032506,0
                            3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033
                            L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20
                            L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z
                            M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325
                            15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825
                            L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125
                            3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075
                            L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075
                            C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375
                            8.287,15.41825 8.50575,15.1995 Z"></path></svg>{labeltext1}</span></button>
            <p className="mb-0 ml-6 mr-0
                         mt-0.5 text-xs font-normal leading-4 text-[#7c7c7c]">{labeltext2}</p>
        </div>


    );
}
Invitemodcheck.propTypes = {
    labeltext1: PropTypes.string,
    labeltext2: PropTypes.string,
};

export {Invitemodcheck};
