import React from "react";
import S from "./ContentNav.module.css"
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const ContentNav = (props) => {
    return <div className={S.Nav}>
       <div> Sections</div>
        <div>
            <div>
                <Button onClick={()=>{props.setSection("Santechnics")}}>All sections</Button>
            </div>
            <div>
                <Button onClick={()=>{props.setSection("Ceramics")}}>Ceramics</Button>
            </div>
            <div>
                <Button onClick={()=>{props.setSection("Smesitili")}}>Smesitili</Button>
            </div>
            <div>
                <Button onClick={()=>{props.setSection("Moyki")}}>Moyki</Button>
            </div>
            <div>
                <Button onClick={()=>{props.setSection("Sifons")}}>Sifons</Button>
            </div>
            <div>
                <Button onClick={()=>{props.setSection("Bathroom garniture")}}>Bathroom garniture</Button>
            </div>
        </div>
    </div>
}

export default ContentNav;