import {useState} from 'react';
import parse from 'html-react-parser';
import {getIconComponent} from '../../../../../../generic components/iconsmap';
import {replaceHtmlEntities} from '../../../../../../generic components/utils';

export const useRule = (data, display) => {
    const isCompact = display === 'compact';
    const [isDescriptionHidden, setIsDescriptionHidden] = useState(isCompact);
    const {descriptionHtml, priority, shortName} = data;

    if (!data) return null;

    const description = parse(replaceHtmlEntities(descriptionHtml).replace(/class="md"/g, 'class="md px-4"'));
    const CaretDownIconOutline = getIconComponent('caret-down', false);

    const toggleDescriptionVisibility = () => {
        setIsDescriptionHidden((PrevState) => !PrevState);
    };

    return {
        isCompact,
        isDescriptionHidden,
        description,
        priority,
        shortName,
        CaretDownIconOutline,
        toggleDescriptionVisibility,
    };
};
