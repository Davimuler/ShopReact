import React from "react";
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
import Users from "./Users/Users";
import Test from "./test/test";



const MainContent = (props) => {
    return <div>
        {props.isBasketActive&&<Basket setActive={props.UpdateBasketVision} isBasketActive={props.isBasketActive}/>}
        <Routes>

            <Route path="/" element={<FirstPage/>}/>
            <Route path="/test" element={<Test/>}/>
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