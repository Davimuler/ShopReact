import React, { useState } from "react";
import S from "./ExpandedComponent.module.css"

function ExpandableComponent(props) {
    const [isExpanded,setIsExpanded]=useState(false)
    return (
            <div onClick={()=>{setIsExpanded(!isExpanded)}} className={!isExpanded? S.roundedBox:S.expandedBox}>
                {props.title}
                {isExpanded && <div>{props.children}</div>}
            </div>
    );
}

export default ExpandableComponent;
