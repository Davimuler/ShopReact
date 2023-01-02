import React from "react";
import S from './MainContent.module.css'
import Element from "../ShopElement/Element";
import Keramika from "./ProductionSection/Keramika/Keramika";
import Smesitili from "./ProductionSection/Smesitili/Smesitili";
import Moyki from "./ProductionSection/Moyki/Moyki";
import Sifony from "./ProductionSection/Sifony/Sifony";
import DushGarnitura from "./ProductionSection/DushGarnitura/DushGarnitura";
import Santechnika from "./ProductionSection/Santechnika/Santechnika";
import ContentNav from "../Navigation/ContentNav/ContentNav";

const MainContent = (props) => {
    return <div className={S.MainContent}>
        <div>

        </div>
        <Keramika/>
        <Smesitili/>
        <Moyki/>
        <Sifony/>
        <DushGarnitura/>
        <Santechnika/>
    </div>
}

export default MainContent;