import React, {useEffect, useState} from 'react';
import axios from "../../../../api/api.js";
import OneItem from "./OneItem/OneItem";
import S from './Items.module.css'
import CreateItem from "./CreateItem/CreateItem";



const Items=(props)=>{
    const [data, setData] = useState([]);

    const [images, setImages] = useState([]);

    useEffect(() => {

        axios.get('/items').then((res)=>{
               props.setItems(res.data)
            })
    }, []);

    useEffect(() => {
        setData(props.itemsData)
    }, [props.itemsData]);

const deleteItemHandler=(id)=>{
    axios.delete('/newItem', { data: { id } }).then()
}

    return<div className={S.Items}>
        <div className={S.ItemsArea}>
            {data.length === 0 ? <></> : data.map(
                i=><OneItem deleteItemHandler={deleteItemHandler} section={i.section} id={i._id}  key={i._id}  description={i.description} features={i.characteristics} image={i.image} price={i.price} name={i.fullName}/>)}
        </div>
        <div className={S.NewItem}>
            <CreateItem/>
        </div>
    </div>
}
export default Items;


