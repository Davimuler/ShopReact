import React from "react";
import S from './Header.module.css'
import {NavLink} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import UserIcon from '../../Images/Header/User.png'


const Header = (props) => {
    const updateBasketVision = () => {
        props.UpdateBasketVision(!props.isBasketActive ? true : false)
        if (!props.isBasketActive) props.incrementNotificationCount(0)
    }
    const updateCompareWindowVision = () => {
        props.UpdateCompareWindowVision(!props.isCompareWindowActive ? true : false)

    }
    return <AppBar position="static" style={{backgroundColor: 'black', height: 70}}>
        <Toolbar>
            <NavLink className={S.navLink} to={'/'}>
                <Typography variant="h6" style={{flexGrow: 1}}>
                    Webstore
                </Typography>
            </NavLink>

            <SearchBar setSearchBar={props.setSearchBar}/>


            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon className={S.ShoppingCart} onClick={updateBasketVision}/>
            </IconButton>
            <Button onClick={updateCompareWindowVision}>Compare</Button>
            <div style={{marginLeft: 'auto'}} className={S.RegLogContainer}>
                {props.UserData ? <>
                    <NavLink to='/cabinet'>
                        <img className={S.userImage} src={UserIcon}/>
                    </NavLink>
                    <Button onClick={() => {
                        props.logUser(null)
                    }} className={S.exitUser}>Exit</Button>
                </> : <>
                    <NavLink to={'/registration'}><Button>Sign up</Button></NavLink>
                    <NavLink to={'/login'}><Button>Log in</Button></NavLink>
                </>}
            </div>

        </Toolbar>

    </AppBar>

}
export default Header;