import React from 'react';
import S from './CouponCodeBar.module.css'

const CouponCodeBar = (props) => {
    return (
        <div className={S.CouponCodeBox}>
           <input placeholder={'Input your coupon code here'}/>
        </div>
    );
};

export default CouponCodeBar;