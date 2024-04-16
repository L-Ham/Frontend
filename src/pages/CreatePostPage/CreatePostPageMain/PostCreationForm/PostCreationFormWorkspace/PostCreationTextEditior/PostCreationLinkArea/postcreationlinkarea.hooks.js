import {useState} from 'react';
import {usePostCreation} from './path/to/usePostCreation';
import {validateLink} from '../../../../../../../generic components/utils.js';

export const usePostCreationLinkArea = () => {
    const {
        link,
        setLink,
        linkErrorMessage: errorMessage,
        setLinkErrorMessage: setErrorMessage,
    } = usePostCreation();

    const [borderColor, setBorderColor] = useState('border-[color:var(--newCommunityTheme-line)]');

    const handleFocus = () => {
        setBorderColor('border-[color:var(--newCommunityTheme-navIcon)]');
    };

    const handleBlur = () => {
        setBorderColor('border-[color:var(--newCommunityTheme-line)]');
    };

    const handleChange = (e) => {
        setLink(e.target.value);
    };

    const handleBlurTextarea = (e) => {
        const url = e.target.value;
        if (url.length === 0) {
            if (errorMessage) {
                setErrorMessage('');
            }
            return;
        }
        if (!validateLink(url)) {
            setErrorMessage('Link doesn\'t look right');
        } else {
            setErrorMessage('');
        }
    };

    return {
        link,
        errorMessage, setErrorMessage,
        borderColor,
        handleFocus,
        handleBlur,
        handleChange,
        handleBlurTextarea,
    };
};
