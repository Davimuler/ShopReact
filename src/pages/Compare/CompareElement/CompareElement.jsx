import React from 'react';
import ShowImage from "../../../components/MainContent/auth/Items/CreateItem/ShowImage/ShowImage";
import S from './CompareElement.module.css'
import {Button} from "@mui/material";
import { useDispatch } from 'react-redux';
import {deleteItemToCompare} from "../../../redux/UserReducer";
import { Link } from 'react-router-dom';

const CompareElement = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={S.Element}>
            <ShowImage image={props.data.image}/>
            <div>Name:{props.data.fullName}</div>
            <div>Price:{props.data.price}</div>
            <div>Description:{props.data.description}</div>

            {props.data.characteristics.map(i=><div >{i.featureName}:{i.featureDescription}</div>)}
            <Link to='/view-product'>
                <Button onClick={()=>{
                    props.addItemToView(props.data);
                    props.UpdateCompareWindowVision(false)
                }}>View product</Button>
            </Link>
            <Button onClick={()=>{ dispatch(deleteItemToCompare(props.data._id));}}>Delete</Button>

        </div>
    );
};

export default CompareElement;