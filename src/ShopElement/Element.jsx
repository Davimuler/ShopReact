import React, {useEffect, useState} from "react";
import S from './Element.module.css'
import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {incrementNotificationCount} from "../redux/HeaderReducer";
import ShowImage from "../components/MainContent/auth/Items/CreateItem/ShowImage/ShowImage";
import {addItemToBuy, addItemToCompare} from "../redux/UserReducer";
import compare from '../Images/Content/compare.jpg'
import wish from '../Images/Content/wish.png'


const Element = (props) => {
    const [isHover, setIsHover] = useState(false)
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const [message,setMessage]=useState('')

    useEffect(() => {
        setCount(props.notificationCount)
    }, [props.notificationCount]);

    const handleButtonClick = () => {
        dispatch(incrementNotificationCount(count + 1));

        setCount(count + 1)
        dispatch(addItemToBuy(props.data))
    };
   const handleAddToCompare=()=>{
       dispatch(addItemToCompare(props.data))
    }
    const handleAddToWishList=()=>{
        {props.isAuth? props.addItemToWishList(props.data):setMessage('To add item you should be authorized')}
    }

    return <div className={S.element} onMouseLeave={() => setIsHover(false)} onMouseEnter={() => {
        setIsHover(true)
    }} className={S.element}>
        <div>
            <ShowImage  image={props.data.image}/>
        </div>
        <div>{props.data.fullName}</div>
        <div>Price:{props.data.price}</div>
        <div>
            <Button onClick={handleButtonClick} style={{position: 'relative', zIndex: 1}} variant="outlined"
                    color="primary">Buy</Button>
        </div>
        <div className={S.WishCompareBox}>
            <div>
                <img  onClick={handleAddToCompare} className={S.ImageCompare} src={compare}/>
            </div>
            <div>
                {message}
                <img onClick={handleAddToWishList} className={S.ImageWish} src={wish}/>
            </div>
        </div>

        {isHover && <div>
            <div>Description:{props.data.description}</div>
            {props.data.characteristics.map(i=><div>{i.featureName}:{i.featureDescription}</div>)}
            <div>
            </div>
        </div>}

    </div>
}

export default Element;