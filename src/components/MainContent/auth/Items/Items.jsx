import React, {useEffect, useState} from 'react';
import axios from "../../../../api/api.js";
import OneItem from "./OneItem/OneItem";
import S from './Items.module.css'
import CreateItem from "./CreateItem/CreateItem";
import ShowImage from "./CreateItem/ShowImage/ShowImage";



const Items=(props)=>{
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
console.log(images)
        axios.get('/items').then((res)=>{
               props.setItems(res.data)
            })
        axios.get('/images').then((res)=>{console.log(res.data)
            setImages(res.data)
        })
        // console.log('Images:'+images)
    }, []);

    useEffect(() => {
        setData(props.itemsData)
    }, [props.itemsData]);



    return<div className={S.Items}>
        <div className={S.ItemsArea}>
            {data.length === 0 ? <></> : data.map(
                i=><OneItem  key={i._id} price={i.price} name={i.fullName}/>)}
            {images.length===0? <></> :images.map(
                i=><ShowImage key={i._id}  image={i.image}/>)}

        </div>
        <div className={S.NewItem}>
            <CreateItem/>
        </div>
    </div>
}
export default Items;


