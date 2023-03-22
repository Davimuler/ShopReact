import React, {useEffect, useState} from 'react';
import S from "./Basket.module.css"
import BasketItem from "../../ShopElement/basketItem/basketItem";
import {Button} from "@mui/material";
import SubmitPurchase from "./submitPurchase/submitPurchase";
import axios from "../../api/api.js";


const Basket = (props) => {
    const [data, setData] = useState(props.itemsToBuy);
    useEffect(() => {
        setData(props.itemsToBuy);
    }, [props.itemsToBuy]);

    const deleteItemToPurchase = (id) => {
        props.deleteItemToBuy(id)
    }
    const pushOrder = () => {
        props.itemsToBuy.forEach(i=>{
            axios.put('/order',{
                id:props.UserData._id,
                newOrder:{
                    id:i._id,
                    fullName:i.fullName,
                    price:i.price,
                    DateOfPurchase:new Date()
                }
            }).then((res) => {
                console.log(res)
            })
        })
    }

    const total = props.itemsToBuy.reduce((acc, cur) => acc + cur.price, 0);
    // console.log(props.itemsToBuy)
    return (
        <div className={S.modal} onClick={() => {
            props.setActive(false)
        }}>

            <div onClick={e => e.stopPropagation()} className={S.modal__content}>
                <img onClick={() => {
                    props.setActive(false)
                }} className={S.closeCross} src="https://emojis.wiki/thumbs/emojis/cross-mark.webp"/>

                {data.map((i) => <BasketItem deleteItemToPurchase={deleteItemToPurchase} data={i}/>)}
                <SubmitPurchase pushOrder={pushOrder} total={total}/>

            </div>
        </div>

    );
};

export default Basket;