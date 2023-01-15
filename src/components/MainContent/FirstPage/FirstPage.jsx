import React from "react";
import S from "./FistPage.module.css"


import ContentNav from "../../../Navigation/ContentNav/ContentNav";
import Element from "../../../ShopElement/Element";

const FirstPage=(props)=>{
    return <div className={S.FirstPage}>
    <div className={S.navbar}>
        <ContentNav></ContentNav>
    </div>
        <div className={S.content}>
        <Element/>
            <Element/>
            <Element/>  <Element/>
            <Element/>  <Element/>
            <Element/>
            <Element/>  <Element/>
            <Element/>  <Element/>
            <Element/>  <Element/>  <Element/>
        </div>

    </div>
}

export default FirstPage;