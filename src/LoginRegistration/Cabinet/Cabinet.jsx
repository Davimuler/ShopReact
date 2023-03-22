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
                    <WishList isAuth={props.isAuth} wishList={props.wishList}/>
                </ExpandableComponent>

                <Button>Exit</Button>
            </>}


        </div>
    );
};

export default Cabinet;