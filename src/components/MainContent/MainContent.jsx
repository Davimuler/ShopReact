import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router";
import FirstPage from "./FirstPage/FirstPage";
import Login from "../../LoginRegistration/Login/Login";
import Reg from "../../LoginRegistration/Registration/Registration";
import Basket from "../../pages/Basket/Basket";
import Users from "./auth/Users/Users";
import Items from "./auth/Items/Items";
import axios from "../../api/api.js";
import CompareWindow from "../../pages/Compare/CompareWindow";
import ViewProduct from "./viewProduct/ViewProduct";
import Cabinet from "../../LoginRegistration/Cabinet/Cabinet";



const MainContent = (props) => {
const [itemsToBuy,setItemsToBuy]=useState(props.itemsToBuy)
    useEffect(() => {
        setItemsToBuy(props.itemsToBuy)
    }, [props.itemsToBuy]);
    useEffect(() => {
        axios.get('/items').then((res)=>{
            props.setItems(res.data)
        })
    }, []);
    return <div>
        {props.isBasketActive&&<Basket couponCode={props.couponCode} UserData={props.UserData} deleteItemToBuy={props.deleteItemToBuy} itemsToBuy={itemsToBuy} setActive={props.UpdateBasketVision} isBasketActive={props.isBasketActive}/>}
        {props.isCompareWindowActive&&<CompareWindow  addItemToView={props.addItemToView} deleteItemToCompare={props.deleteItemToCompare} itemsToCompare={props.itemsToCompare} UpdateCompareWindowVision={props.UpdateCompareWindowVision}/>}
        <Routes>
            <Route path="/*" element={<FirstPage isAuth={props.isAuth} wishList={props.wishList} addItemToWishList={props.addItemToWishList} addItemToCompare={props.addItemToCompare} setSection={props.setSection} data={props.itemsData} notificationCount={props.notificationCount}  incrementNotificationCount={props.incrementNotificationCount} />}/>
            <Route path="/auth/items" element={<Items setItems={props.setItems} itemsData={props.itemsData}/>}/>
            <Route path="/users" element={<Users data={props.data} setUsers={props.setUsers}/>}/>
            <Route path="/login/*" element={<Login logUser={props.logUser}/>}/>
            <Route path="/registration/*" element={<Reg/>}/>
            <Route path="/view-product" element={<ViewProduct  itemToView={props.itemToView}/>}/>
            <Route path="/cabinet" element={<Cabinet couponCode={props.couponCode}  addItemToView={props.addItemToView} UserData={props.UserData} isAuth={props.isAuth} wishList={props.wishList}/>}/>
        </Routes>
    </div>
}

export default MainContent;