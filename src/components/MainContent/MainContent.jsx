import React, {useEffect} from "react";
import S from './MainContent.module.css'
import Keramika from "./ProductionSection/Keramika/Keramika";
import Smesitili from "./ProductionSection/Smesitili/Smesitili";
import Moyki from "./ProductionSection/Moyki/Moyki";
import Sifony from "./ProductionSection/Sifony/Sifony";
import DushGarnitura from "./ProductionSection/DushGarnitura/DushGarnitura";
import Santechnika from "./ProductionSection/Santechnika/Santechnika";
import {Route, Routes} from "react-router";
import FirstPage from "./FirstPage/FirstPage";
import Login from "../../LoginRegistration/Login/Login";
import Reg from "../../LoginRegistration/Registration/Registration";
import Basket from "../../pages/Basket/Basket";
import Users from "./auth/Users/Users";
import Test from "./test/test";
import Items from "./auth/Items/Items";
import axios from "../../api/api.js";





const MainContent = (props) => {


    useEffect(() => {
        axios.get('/items').then((res)=>{
            props.setItems(res.data)
        })
    }, []);
    return <div>
        {props.isBasketActive&&<Basket itemsToBuy={props.itemsToBuy} setActive={props.UpdateBasketVision} isBasketActive={props.isBasketActive}/>}

        <Routes>

            <Route path="/" element={<FirstPage data={props.itemsData} notificationCount={props.notificationCount}  incrementNotificationCount={props.incrementNotificationCount} />}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/auth/items" element={<Items setItems={props.setItems} itemsData={props.itemsData}/>}/>
            <Route path="/users" element={<Users data={props.data} setUsers={props.setUsers}/>}/>
            <Route path="/keramika" element={<Keramika/>}/>
            <Route path="/smesitili" element={<Smesitili/>}/>*/}
            <Route path="/moyki" element={<Moyki/>}/>
            <Route path="/sifony" element={<Sifony/>}/>
            <Route path="/dushGarnitura" element={<DushGarnitura/>}/>
            <Route path="/santechnika" element={<Santechnika/>}/>
            <Route path="/login/*" element={<Login/>}/>
            <Route path="/registration/*" element={<Reg/>}/>
        </Routes>
    </div>
}

export default MainContent;