import React, {useEffect, useState} from 'react';
import './seeallbutton.css';
import {API_ROUTES} from '../../../../../../requests/routes.js';
import {axiosInstance} from '../../../../../../../requests/axios';

/**
 * See All Button
 * @return {JSX.Element} See All Button
 * @constructor
 * */
export function SuggestButton() {
    const [community, setCommunity] = useState('');
    const suggestCommunity = async () => {
        const response = await axiosInstance.get(API_ROUTES.SUGGEST_COMMUNITY);
        const data = response.data;
        return data;
    };

    useEffect(() => {
        suggestCommunity().then((data) => {
            setCommunity(data);
        });
    }, []);

    return (
        <div className="relative
        box-border border-x-0
        border-b-0 border-t-[0.0625rem] border-solid border-[var(--color-neutral-border-weak)] p-4"
        data-testid="outer-div-#*&DGHA)(!@*()E@KOP"
        >
            <div data-testid="inner-div-#IUSADGH*!&GDBJH">
                <a
                    className="seeall-button-secondary seeall-button-medium
            seeall-button inline-flex
            w-full items-center
            justify-center whitespace-nowrap px-[var(--rem14)] hover:underline"
                    href={`/r/${community}`}
                    type="button"
                    data-testid="see-all-button-asidFASSFS5%%$_)(&^YUHJI<L<X"
                >
                    <span className="flex items-center justify-center" data-testid="button-span-JKG*&I#!@(_AZSC">
                        <span className="flex items-center gap-2" data-testid="inner-span-##!@#^&*()_PMKCZXCJB">
                            {' '}
                            <span className="!hover:no-underline
                    !focus:no-underline !active:no-underline text-[14px] !no-underline"
                            data-testid="see-all-text-#$#~kjszdbhso"
                            >
                                {community}
                            </span>
                        </span>
                    </span>
                </a>
                {/**/}
            </div>
        </div>
    );
}


