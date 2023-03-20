import React from "react";
import S from './Header.module.css'
import {NavLink} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import {setSearchBar} from "../../redux/ItemsReducer";
import {logUser} from "../../redux/UserReducer";


const Header = (props) => {
    const updateBasketVision=()=>{
        props.UpdateBasketVision(!props.isBasketActive? true:false)
        if(!props.isBasketActive)props.incrementNotificationCount(0)
    }
    const updateCompareWindowVision=()=>{
        props.UpdateCompareWindowVision(!props.isCompareWindowActive? true:false)

    }

console.log(props.UserData)
    return <header className={S.MainHeader}>
        <NavLink to={'/'}>
            <img className={S.MainImg}
                 src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-a-design_460848-8717.jpg"/>
            <div className={S.HeaderElement}>Name of site</div>
        </NavLink>

        <div className={S.HeaderElement}>Catalog</div>

        <SearchBar setSearchBar={props.setSearchBar}/>



        <div onClick={updateBasketVision}>
            <img className={S.basketImage}
                 src="https://w7.pngwing.com/pngs/766/198/png-transparent-shopping-cart-online-shopping-computer-icons-shopping-cart-face-service-trade.png"/>
        </div>
        {!props.notificationCount? <></>: <span className={S.notificationCount}>{props.notificationCount}</span>}

        <div onClick={updateCompareWindowVision}>
            <img className={S.basketImage} src={'https://i.etsystatic.com/22467704/r/il/ad03cc/2675884361/il_fullxfull.2675884361_jvnz.jpg'}/>
        </div>
        {props.UserData? <>
            <img className={S.userImage} src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'}/>
            <button onClick={()=>{props.logUser(null)}} className={S.exitUser}>Exit</button>
        </>:<>
            <NavLink  className={S.RegLog} to={'/registration'}>Sign up</NavLink>
            <NavLink  className={S.RegLog} to={'/login'}>Log in</NavLink>
        </>}

    </header>
}
export default Header;