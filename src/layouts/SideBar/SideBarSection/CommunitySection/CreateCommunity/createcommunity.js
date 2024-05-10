
import React from 'react';
import {useState} from 'react';
import {Communityname} from './components/communityname';
import {Communityradio} from './components/communityradio';
import {Communitytoggle} from './components/communitytoggle';

import {axiosInstance as axios} from '../../../../../requests/axios';
import {API_ROUTES} from '../../../../../requests/routes';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 * @return {JSX.Element} UserHelp
 */
function CreateCommunity({setisclicked}) {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [cname, setcname] = useState('');

    const [communityType, setCommunityType] = useState('Public');
    const [istaken, setistaken] = useState(false);
    const [isempty, setisempty] = useState(false);
    const [mature, setMature] = useState(false);
    const handlecnamechange = (cname) => {
        setcname(cname);
        // console.log(cname);
        setistaken(false);
        // console.log(communityType);
        // console.log(mature);
        if (cname.length !== 0) {
            setisempty(false);
        }
    };
    const handletoggle = (mature) => {
        setMature(mature);
        // console.log(mature);
    };
    const handlexclick = () => {
        setisclicked(false);
    };
    const handleCommunityTypeChange = (communityType) => {
        setCommunityType(communityType);
        // console.log(communityType);
    };
    /**
     *
     * @return {void}
     */
    async function Create() {
        if (cname === '') {
            setisempty(true);
            return;
        }
        try {
            const response = await axios.post(API_ROUTES.createCommunity, {
                name: cname,
                privacy: communityType,
                ageRestriction: mature,
            });
            // console.log(response);
            setisclicked(false);
            navigate(`/r/${cname}`);
        } catch (e) {
            setistaken(true);
            // console.log(e);
        }
    }

    return (
        <div className=" pointer-events-auto flex max-h-[650px]
          max-w-[500px] basis-full
          flex-col scroll-auto
          rounded-xl bg-white font-sans
           shadow-none lg:shadow-sm" style={{

            width: '500px',
            //  height: '650px',
            // top: '40px',
            // left: '500px',
            paddingBottom: '0px',
            zIndex: '100',
            boxShadow: '0 0 #0000, 0 0 #0000, 0 0.0625rem 0.25rem #00000026, 0 0.25rem 0.25rem #00000026',
            // Enable vertical scrolling
        }} data-testid="wmerihetirobnieerbne">


            <div className='relative box-border flex h-full max-h-[inherit]
         min-h-[inherit] flex-col items-center overflow-hidden text-base'>
                <div className='relative box-border size-full max-h-full flex-1 overflow-auto p-4'>
                    <div className='box-border flex w-full flex-row items-center gap-3 py-0 pl-0 pr-12 text-center'>
                        <div className='flex size-12 items-center'>
                            <img src='https://www.redditstatic.com/shreddit/assets/snoomojis/care.png'
                                style={{paddingRight: '8px'}} data-testid="wkenveqrwjvnqirjn" />
                            <span className='text-lg font-semibold leading-6 '
                                style={{paddingRight: '300px', fontFamily:
                                 '"-apple-system, BlinkMacSystemFont"'}} data-testid="weigbvqeurbnwu">
                                    Create a Community</span>

                            <div className='flex items-center'>
                                <button className='inline-flex size-8 items-center justify-center
                                 rounded-full bg-[#eaedef] px-1.5'
                                data-testid="qowefnwqinfuy3bve" onClick={handlexclick}>
                                    <span className='flex items-center justify-center'>
                                        <svg fill="#000000"
                                            height="16"
                                            viewBox="0 0 20 20" width="16"
                                            xmlns="http://www.w3.org/2000/svg" data-testid="wkefneibntbknkvn">
                                            <path d="M18.442 2.442l-0.884-0.884L10 9.116 2.442
                                             1.558l-0.884 0.884L9.116 10l-7.558 7.558 0.884
                                              0.884L10 10.884l7.558 7.558 0.884-0.884L10.884 10l7.558-7.558Z">

                                            </path>
                                        </svg>


                                    </span>

                                </button>
                            </div>

                        </div>

                    </div>
                    <p className=" -mt-1 mb-3 text-[#2A3C42]" data-testid="oewinyrwuhjvcekw">
                            Build and grow a community about something you care about.
                             We&apos;ll help you set things up.</p>
                    <div style={{paddingTop: '0px', paddingBottom: '5px'}}/>


                    <Communityname oncnameChange={handlecnamechange} data-testid="qoewnvrinveriao"/>
                    {!istaken && !isempty &&(<p className='pl-4 text-xs text-[#576f76]'>
                                               Choose wisely. Once you pick a name, it can&apos;t be changed.
                    </p>)}
                    <div className="mt-1 max-h-[1000px] pl-4 text-xs font-medium
                        leading-4 text-[#ea0027] opacity-100 transition-all
                        duration-[0.2s] ease-[ease-in-out]" data-for="password"
                    data-testid="email-error"
                    >
                        {isempty&& (
                            <>Can&apos;t leave community name empty</>
                        )}
                        {istaken && (
                            <>This community name is already taken</>
                        )}

                    </div>
                    <div style={{paddingTop: '0px', paddingBottom: '15px'}}/>
                    <div className='mb-2'>
                        <h4 className="mb-2 text-sm font-semibold leading-5">
                        Type
                        </h4>
                        <Communityradio onSelect={handleCommunityTypeChange} data-testid="qiefwnoevniq3rw"/>
                    </div>


                    <hr className=" my-1 border-0 border-b border-solid border-[#0000001a]"></hr>


                    <div role="menuitemcheckbox" tabIndex="0"
                        className="
                        relative flex
                    cursor-pointer justify-between gap-2
                    rounded-[12px] px-4 py-2 text-[#0F1A1C] -outline-offset-1
                    hover:bg-[#eaedef] hover:no-underline" >
                        <span className="flex min-w-0 shrink items-center gap-2" data-testid="owengvietbnetwibn">
                            <span className="flex size-8 shrink-0 items-center justify-center text-xl leading-4">
                                <svg fill="currentColor" height="20"
                                    viewBox="0 0 20 20" width="20"
                                    xmlns="http://www.w3.org/2000/svg" data-testid="qiefhwufvhbq3rwh">
                                    <path d="m4.47 7.123 2.653-1.26h.47V14.5H6.15V7.668l-1.68.8V7.123Zm9.9
                     3.69a2.288 2.288 0 0 1-.02 2.54 2.7 2.7 0 0 1-1.085.91 3.699 3.699
                      0 0 1-3.068 0A2.774 2.774 0 0 1 9.1 13.35a2.253 2.253 0 0
                       1-.019-2.532c.257-.383.61-.69 1.025-.893A2.372 2.372 0 0 1 9.4
                       9.11a2.21 2.21 0 0 1-.257-1.048 2.1 2.1 0 0 1
                        .342-1.175c.233-.353.557-.637.938-.82.409-.202.86-.305
                         1.315-.3.451-.005.897.098 1.3.3.377.185.697.468.926.82.227.352.345.762.34
                          1.18a2.2 2.2 0 0 1-.255 1.05 2.3 2.3 0 0 1-.706.8c.415.202.77.512
                           1.026.896ZM12.54
                           13.2c.235-.11.437-.28.583-.495.142-.207.216-.454.214-.705a1.267
                            1.267 0 0 0-.205-.7 1.468 1.468 0 0 0-.57-.51 1.776 1.776 0
                             0 0-.83-.19c-.29-.004-.577.061-.836.19a1.5 1.5 0 0
                              0-.583.513 1.262 1.262 0 0 0 .003
                               1.4c.147.216.348.388.583.5.256.124.537.186.821.182a1.86 1.86 0
                               0 0 .82-.185Zm-1.474-6.083a1.194 1.194 0 0 0-.468.422 1.11 1.11
                                0 0 0-.173.615c-.002.224.058.444.173.636.113.192.275.35.468.46.201.114.429.173.66.17
                                .23.002.456-.055.656-.167a1.233 1.233 0 0 0 .638-1.099 1.132 1.132
                                0 0 0-.635-1.037 1.507 1.507 0 0 0-1.319 0ZM10 19.988a4.616
                                4.616 0 0 1-3.27-1.352l-5.366-5.365a4.627 4.627 0 0 1
                                0-6.542L6.73 1.364a4.634 4.634 0 0 1 6.542 0l5.366 5.365a4.634
                                 4.634 0 0 1 0 6.542l-5.366 5.365a4.615 4.615 0 0 1-3.27
                                  1.352Zm0-18.726a3.362 3.362 0 0 0-2.386.987L2.25 7.614a3.374
                                   3.374 0 0 0 0 4.772l5.366 5.365a3.38 3.38 0 0 0 4.773
                                    0l5.365-5.365a3.375 3.375 0 0 0 0-4.772L12.387 2.25A3.364
                                     3.364 0 0 0 10 1.262Z"></path> </svg>
                            </span>  <span className="flex min-w-0 shrink flex-col justify-center py-[var(--rem6)]">
                                <span className="text-sm leading-5">Mature (18+)
                                </span> <span className=" text-xs leading-4 text-[#576f76]">
                                        Must be over 18 to view and contribute</span> </span>
                        </span> <span className="flex shrink-0 items-center">
                            <span className="flex h-6 items-center justify-center">
                                <Communitytoggle ontoggle={handletoggle} data-testid="wlemvferokngvwkvnav"/>
                            </span> </span>  </div>
                    <div style={{paddingTop: '0px', paddingBottom: '20px'}}/>

                    <div className="flex justify-end">
                        <button className="
                              inline-flex h-12 items-center justify-center
                            rounded-full border border-gray-200 bg-[#eaedef]
                            px-3.5 py-2 text-lg" slot="secondaryButton"
                        title="Close Form and Cancel creating a community"
                        data-testid="oqwarebgtsireiure" onClick={handlexclick}>
                            <span className="flex items-center justify-center">
                                <span className="flex items-center gap-2">Cancel</span>
                            </span> </button>
                        <button className=" ml-3 inline-flex h-12 items-center
justify-center rounded-full
border border-gray-200


bg-[#0045ac] px-3.5
py-2 text-lg "
                        slot="primaryButton" type="submit" onClick={Create}
                        data-testid="wornebisrbkwnbnikb"> <span className="flex items-center justify-center">
                                <span className="flex items-center gap-2
                                text-[#ffffff]" data-testid="oqewqrnebwitnboewtibnetwb" >
                                    Create Community</span> </span> </button>
                    </div>


                </div>

            </div>


        </div>

    );
}

CreateCommunity.propTypes = {
    setisclicked: PropTypes.func.isRequired,
};
export {CreateCommunity};
