import React, {useRef, useEffect} from 'react';

const ImageItem = props => {

    const imgRef = useRef();

    useEffect(() => {
        console.log(imgRef);
    }, []);

    return <img ref={imgRef} src={props.src} alt={props.alt} />;
};

export default ImageItem;
