import React, {useState} from 'react';
import S from './CouponCodeBar.module.css'
import axios from "../../../api/api.js";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {setCoupon} from "../../../redux/UserReducer";

const CouponCodeBar = (props) => {
    const dispatch=useDispatch();
    const [code,setCode]=useState('')
    const [message,setMessage]=useState('')
    const codeActivatorHandler=()=>{
        axios.post('/couponGet',{Code:code}).then(res=>{
            {res.data[0]? (()=>{setMessage('Code activated');
            dispatch(setCoupon(res.data[0].Discount))
            })():setMessage('Wrong activation code or the code has expired')}
        })
setCode('')
    }
    return (
        <div className={S.CouponCodeBox}>
           <input onChange={(e)=>{setCode(e.target.value)}} value={code} placeholder={'Input your coupon code here'}/>
            <Button onClick={codeActivatorHandler}>Activate</Button>
            <div className={message==='Code activated'?S.Activated:S.NotActivated} >{message}</div>
        </div>
    );
};

export default CouponCodeBar;