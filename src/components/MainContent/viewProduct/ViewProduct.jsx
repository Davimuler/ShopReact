import React from 'react';
import ShowImage from "../auth/Items/CreateItem/ShowImage/ShowImage";
import S from './ViewProduct.module.css'
import ViewItem from "../viewItem/viewItem";

const ViewProduct = (props) => {
console.log(props.itemToView)
    return (
        <div className={S.ViewProduct}>
            {!props.itemToView ? <>No element to view ,first pick item from list</> : <div>
                <ViewItem data={props.itemToView}/>
            </div>}
        </div>
    );
};

export default ViewProduct;