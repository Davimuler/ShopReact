import React from "react";
import S from './Header.module.css'
import {NavLink} from "react-router-dom";
import Reg from "../../LoginRegistration/Registration/Registration";


const Header = (props) => {
    return <header className={S.MainHeader}>
        <NavLink to={'/'}>
            <img className={S.MainImg}
                 src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-a-design_460848-8717.jpg"/>
            <div className={S.HeaderElement}>Name of site</div>
        </NavLink>


        <div className={S.HeaderElement}>Catalog</div>
        <input className={S.Input}/>
        <div onClick={()=>{}}>
            <img className={S.MainImg}
                 src="https://w7.pngwing.com/pngs/766/198/png-transparent-shopping-cart-online-shopping-computer-icons-shopping-cart-face-service-trade.png"/>
        </div>

        <NavLink  className={S.RegLog} to={'/reg'}>regi</NavLink>

    </header>
}
export default Header;