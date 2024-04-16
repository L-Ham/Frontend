import {useState, useEffect} from 'react';

export const useCommunityCover = (bannerImage, maxWidth = 320) => {
    const [dimensions, setDimensions] = useState({newWidth: 0, newHeight: 0});

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            // const originalWidth = img.naturalWidth;
            // const originalHeight = img.naturalHeight;

            // const ratio = maxWidth / originalWidth;
            const newWidth = maxWidth;
            const newHeight = 34;

            setDimensions({newWidth, newHeight});
        };
        img.src = bannerImage;
    }, [bannerImage, maxWidth]);

    return dimensions;
};
