import React, { useState, useEffect } from 'react';
import S from './ShowImage.module.css'

function ImageComponent(props) {
    const [imageData, setImageData] = useState('');

    useEffect(() => {
            // const image=props.data[0].image.data.data
        const image=props.image.data.data
            //     // Flatten the two-dimensional array into a one-dimensional array
            const flattenedArray = image.flat();
            //
            //     // Create a new Blob object from the flattened array
            const blob = new Blob([new Uint8Array(flattenedArray)], { type: 'image/jpeg' });

            // Convert the Blob object to a data URL
            const reader = new FileReader();
            reader.onload = () => {
                const dataUrl = reader.result;

                // Set the data URL as the image data
                setImageData(dataUrl);
            };
            reader.readAsDataURL(blob);

    }, [props.data]);

    return (
        <img className={S.Img} src={imageData}  />
    );
}

export default ImageComponent;