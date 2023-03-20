import React from 'react';
import ShowImage from "../auth/Items/CreateItem/ShowImage/ShowImage";
import S from './ViewProduct.module.css'

const ViewProduct = (props) => {

    return (
        <div className={S.ViewProduct}>
            {!props.itemToView ? <>No element to view ,first pick item from list</> : <div>
                <ShowImage image={props.itemToView.image}/>
                <div>{props.itemToView.fullName}</div>
                <div>{props.itemToView.price}</div>
                <div>{props.itemToView.description}</div>
                {props.itemToView.characteristics.map(i=><div>{i.featureName}:{i.featureDescription}</div>)}
            </div>}

        </div>
    );
};

export default ViewProduct;