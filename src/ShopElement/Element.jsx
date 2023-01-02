import React from "react";
import S from './Element.module.css'

const Element = (props) => {
    return <div className={S.element}>
        <img className={S.Image} src="https://content2.rozetka.com.ua/goods/images/big/224779940.jpg"/>
        <div>Some Element</div>
    </div>
}

export default Element;