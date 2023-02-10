import React from 'react';
import S from "./Basket.module.css"

const Basket = (props) => {
    console.log("from basket" + props.isBasketActive)
    return (
        <div className={S.modal} onClick={()=>{props.setActive(false)}} >

            <div onClick={e=>e.stopPropagation()} className={S.modal__content}>

                <input/>
                <img  onClick={()=>{props.setActive(false)}} className={S.closeCross} src="https://emojis.wiki/thumbs/emojis/cross-mark.webp"/>
            </div>
        </div>

    );
};

export default Basket;