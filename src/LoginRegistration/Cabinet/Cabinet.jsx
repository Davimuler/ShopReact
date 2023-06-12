import React from 'react';
import Orders from "./Orders/Orders";
import WishList from "./WishList/WishList";
import AuthUserData from "./AuthUserData/AuthUserData";
import {Button} from "@mui/material";
import ExpandableComponent from "./expandableComponent/ExpandableComponent";
import CouponCodeBar from "./CouponCode/CouponCodeBar";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logUser} from "../../redux/UserReducer";


const Cabinet = (props) => {
const dispatch=useDispatch()
    return (

        <div>
            {!props.UserData?<>
            You should authorize first to enter you account cabinet
            </>:<>
                <ExpandableComponent title={"Orders"}>
                    <Orders orders={props.UserData.orders}/>
                </ExpandableComponent>

                <ExpandableComponent title={"User Data"}>
                    <AuthUserData User={props.UserData}/>
                </ExpandableComponent>

                <ExpandableComponent title={"WishList"}>
                    <WishList addItemToView={props.addItemToView} isAuth={props.isAuth} wishList={props.wishList}/>
                </ExpandableComponent>
                <CouponCodeBar couponCode={props.couponCode}/>
                <NavLink to={'/auth/items'}>
                    <Button>Admin panel</Button>
                </NavLink>

                <div>
                    <Button onClick={()=>{dispatch(logUser(null))}}>Exit</Button>
                </div>
            </>}


        </div>
    );
};

export default Cabinet;