import React, {useEffect, useState} from 'react';
import ShowImage from "../../components/MainContent/auth/Items/CreateItem/ShowImage/ShowImage";
import {Button} from "@mui/material";
import S from './basketItem.module.css'

const BasketItem = (props) => {
    const [count,setCount]=useState(1)
    const [minusAble,setMinusAble]=useState(true)
    const [plusAble,setPlusAble]=useState(false)

    useEffect(()=>{
        if(count>1){
            setMinusAble(false)
        }else {
            setMinusAble(true)
        }
        if(count>998){
            setPlusAble(true)
        }
        else{
            setPlusAble(false)
        }
        if(!count){
            setCount(1)
        }
    },[count])

    const minusHandler=()=>{
        setCount(count-1)
    }
    const plusHandler=()=>{
        setCount(count+1)
    }

    const handleInput = (event) => {
        if (!/[0-9\.]/.test(event.key)) {
            event.preventDefault();
        }
        if (event.target.value.length >= 3) {
            event.preventDefault();
        }
    };
    const deleteHandle=()=>{

    }
    return (
        <div className={S.item}>
            <ShowImage image={props.data.image}/>
            <Button onClick={()=>{props.deleteItemToPurchase(props.data._id)}}>Delete</Button>
            <div>
                <Button onClick={minusHandler} disabled={minusAble}>-</Button>
                <input onKeyPress={handleInput} onChange={(e)=>{setCount(e.target.value)}}  value={count}/>
                <Button disabled={plusAble} onClick={plusHandler}>+</Button>
            </div>
            <div> {props.data.fullName}
            </div>
        </div>
    );
};

export default BasketItem;