import React, {useEffect, useState} from 'react';
import S from "./Basket.module.css"
import BasketItem from "../../ShopElement/basketItem/basketItem";
import SubmitPurchase from "./submitPurchase/submitPurchase";
import axios from "../../api/api.js";
import cross from '../../Images/Content/cross.webp'


const Basket = (props) => {
    const [data, setData] = useState(props.itemsToBuy);
    const[coupon,setCoupon]=useState(1);
    useEffect(()=>{
        setCoupon(props.couponCode)
    },[props.couponCode])

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
                }} className={S.closeCross} src={cross}/>

                {data.map((i) => <BasketItem deleteItemToPurchase={deleteItemToPurchase} data={i}/>)}
                <SubmitPurchase pushOrder={pushOrder} coupon={coupon} total={total}/>

            </div>
        </div>

    );
};

export default Basket;