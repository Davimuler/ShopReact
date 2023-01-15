import React from 'react';
import S from "./Basket.module.css"

const Basket = ({active,setActive}) => {
    return (
        <div className={S.modal}>
            Basket
            <div className={S.modal__content}>


            </div>
        </div>
    );
};

export default Basket;