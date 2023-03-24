import React from 'react';
import ShowImage from "../auth/Items/CreateItem/ShowImage/ShowImage";
import S from  './viewItem.module.css'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
// >/.


const ViewItem = (props) => {
    console.log(props.data)
    return (
        <div className={S.ViewItemBox} >
            <ShowImage image={props.data.image}/>
            <div>{props.data.fullName}</div>
            <div>{props.data.price}</div>
            <div>{props.data.description}</div>
            {props.data.characteristics.map(i=><div>{i.featureName}:{i.featureDescription}</div>)}
            {/*<Link to='/view-product'>*/}
            {/*    <Button onClick={()=>{props.addItemToView({hello:"hello"})}}>View product</Button>*/}
            {/*</Link>*/}

        </div>
    );
};

export default ViewItem;