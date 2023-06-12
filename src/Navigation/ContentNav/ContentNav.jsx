import React from "react";
import S from "./ContentNav.module.css"
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContentNav = (props) => {
    const location = useLocation();

    useEffect(() => {
       if(location.pathname==='/'){
           props.setSection("Santechnics")
       }
    }, [location]);

    return <div className={S.Nav}>
        <div>
            <div>
                <NavLink to={'/'}>
                    <Button onClick={()=>{props.setSection("Santechnics")}}>All sections</Button>
                </NavLink>

            </div>
            <div>
                <NavLink to={'/Ceramics'}>
                    <Button onClick={()=>{props.setSection("Ceramics")}}>Ceramics</Button>
                </NavLink>

            </div>
            <div>
                <NavLink to={'/Smesitili'}>
                    <Button onClick={()=>{props.setSection("Smesitili")}}>Smesitili</Button>
            </NavLink>

            </div>
            <div>
                <NavLink to={'/Moyki'}>
                    <Button onClick={()=>{props.setSection("Moyki")}}>Moyki</Button>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/Sifons'}>
                    <Button onClick={()=>{props.setSection("Sifons")}}>Sifons</Button>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/Bathroom'}>
                    <Button onClick={()=>{props.setSection("Bathroom garniture")}}>Bathroom</Button>
                </NavLink>
            </div>
        </div>
    </div>
}

export default ContentNav;