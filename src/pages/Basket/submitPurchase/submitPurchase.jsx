import React from 'react';
import {Button} from "@mui/material";
import S from './submitPurchase.module.css'

const SubmitPurchase = (props) => {
    return (
        <div className={S.submit}>
            <>Total:  {props.coupon!==1? <>{props.total*props.coupon} <span className={S.Discount}>Discount:{100-(props.coupon*100)}%</span></>:<>{props.total}</>}</>
            <Button onClick={props.pushOrder} >Submit purchase</Button>
        </div>
    );
};

export default SubmitPurchase;