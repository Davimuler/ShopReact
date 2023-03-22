import React from 'react';
import ViewItem from "../../components/MainContent/viewItem/viewItem";
import Orders from "./Orders/Orders";
import WishList from "./WishList/WishList";
import AuthUserData from "./AuthUserData/AuthUserData";
import {Button} from "@mui/material";
import ExpandableComponent from "./expandableComponent/ExpandableComponent";

const Cabinet = (props) => {
    return (
        <div>
            <ExpandableComponent title={"AuthUserData"}>
                <AuthUserData/>
            </ExpandableComponent>

            <ExpandableComponent title={"Orders"}>
                <Orders/>
            </ExpandableComponent>

            <ExpandableComponent title={"WishList"}>
                <WishList isAuth={props.isAuth} wishList={props.wishList}/>
            </ExpandableComponent>

            <Button>Exit</Button>

        </div>
    );
};

export default Cabinet;