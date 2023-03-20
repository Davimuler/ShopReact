import React, {useEffect, useState} from 'react';
import S from "./CompareWindow.module.css"
import CompareElement from "./CompareElement/CompareElement";
import {addItemToView, deleteItemToCompare} from "../../redux/UserReducer";
import {UpdateCompareWindowVision} from "../../redux/HeaderReducer";


const CompareWindow = (props) => {
    const [items, setItems] = useState(props.itemsToCompare)
    const [leftItems, setLeftItems] = useState([]);
    const [rightItems, setRightItems] = useState([]);


    useEffect(() => {
        setItems(props.itemsToCompare)
        const left = [];
        const right = [];
        props.itemsToCompare.forEach((item, index) => {
            if (index % 2 === 0) {
                right.push(item);
            } else {
                left.push(item);
            }
        });
        setLeftItems(left);
        setRightItems(right);
    }, [props.itemsToCompare]);



    return (
        <div className={S.modal}>

            <div onClick={e => e.stopPropagation()} className={S.modal__content}>
                <img onClick={() => {
                    props.UpdateCompareWindowVision(false)
                }} className={S.closeCross} src="https://emojis.wiki/thumbs/emojis/cross-mark.webp"/>
                <div className={S.Content}>
                    {items.length? <></>:<>There is no element to compare ,add elements from list to start comparing...</>}
                    <div className={S.leftSide}>
                        {leftItems.map((item) => (
                            <CompareElement UpdateCompareWindowVision={props.UpdateCompareWindowVision} addItemToView={props.addItemToView} key={item._id} data={item} />
                        ))}
                    </div>
                    <div className={S.rightSide}>
                        {rightItems.map((item) => (
                            <CompareElement UpdateCompareWindowVision={props.UpdateCompareWindowVision} addItemToView={props.addItemToView} key={item._id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CompareWindow;