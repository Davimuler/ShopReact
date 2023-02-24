import React from 'react';
import S from "./Basket.module.css"

const Basket = (props) => {
    console.log(props.itemsToBuy)
    return (
        <div className={S.modal} onClick={()=>{props.setActive(false)}} >

            <div onClick={e=>e.stopPropagation()} className={S.modal__content}>
                <input/>
                <img  onClick={()=>{props.setActive(false)}} className={S.closeCross} src="https://emojis.wiki/thumbs/emojis/cross-mark.webp"/>

                {props.itemsToBuy.map((i)=><div>{i._id}</div>)}
            </div>
        </div>

    );
};

export default Basket;