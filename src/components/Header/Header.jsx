import React from "react";
import S from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    const updateBasketVision=()=>{
        props.UpdateBasketVision(!props.isBasketActive? true:false)
        if(!props.isBasketActive)props.incrementNotificationCount(0)
    }
    return <header className={S.MainHeader}>
        <NavLink to={'/'}>
            <img className={S.MainImg}
                 src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-a-design_460848-8717.jpg"/>
            <div className={S.HeaderElement}>Name of site</div>
        </NavLink>

        <div className={S.HeaderElement}>Catalog</div>
        <input className={S.Input}/>

        <div onClick={updateBasketVision}>
            <img className={S.basketImage}
                 src="https://w7.pngwing.com/pngs/766/198/png-transparent-shopping-cart-online-shopping-computer-icons-shopping-cart-face-service-trade.png"/>
        </div>
        {!props.notificationCount? <></>: <span className={S.notificationCount}>{props.notificationCount}</span>}
        <NavLink  className={S.RegLog} to={'/registration'}>Sign up</NavLink>
        <NavLink  className={S.RegLog} to={'/login'}>Log in</NavLink>
    </header>
}
export default Header;