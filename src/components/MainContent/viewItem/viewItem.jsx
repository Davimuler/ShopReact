import React from 'react';
import ShowImage from "../auth/Items/CreateItem/ShowImage/ShowImage";

const ViewItem = (props) => {
    return (
        <div>
            <ShowImage image={props.data.image}/>
            <div>{props.data.fullName}</div>
            <div>{props.data.price}</div>
            <div>{props.data.description}</div>
            {props.data.characteristics.map(i=><div>{i.featureName}:{i.featureDescription}</div>)}
        </div>
    );
};

export default ViewItem;