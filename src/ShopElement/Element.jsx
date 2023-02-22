import React, {useEffect, useState} from "react";
import S from './Element.module.css'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {incrementNotificationCount} from "../redux/HeaderReducer";



const Element = (props) => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();


    useEffect(() => {
        setCount(props.notificationCount)
    }, [props.notificationCount]);

    const handleButtonClick = () => {
            dispatch(incrementNotificationCount(count+1));
              setCount(count+1)
    };

    return<div className={S.element}>
        <img className={S.Image} src="https://content2.rozetka.com.ua/goods/images/big/224779940.jpg"/>
        <div>Some Element</div>
        <div>
            <Button onClick={handleButtonClick} style={{position: 'relative', zIndex: 1}} variant="outlined" color="primary">Buy</Button>
        </div>

    </div>
}

export default Element;