import React from "react";
import S from "./ContentNav.module.css"
import {NavLink} from "react-router-dom";

const ContentNav = (props) => {
    return <div className={S.Nav}>
       <div>Розділи</div>
        <div>
            <div>
                <NavLink to={'/keramika'}>Керамика</NavLink>
            </div>
            <div>
                <NavLink to={'/smesitili'}>Смесители</NavLink>
            </div>
            <div>
                <NavLink to={'/moyki'}>Кухонные мойки</NavLink>
            </div>
            <div>
                <NavLink to={'/sifony'}>Сифоны</NavLink>
            </div>
            <div>
                <NavLink to={'/dushGarnitura'}>Душевая гарнитура</NavLink>
            </div>
            <div>
                <NavLink to={'/santechnika'}>Сантехника</NavLink>
            </div>


        </div>
    </div>
}

export default ContentNav;