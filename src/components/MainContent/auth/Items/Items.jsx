import React, {useEffect, useState} from 'react';
import axios from "../../../../api/api.js";
import OneItem from "./OneItem/OneItem";
import S from './Items.module.css'
import CreateItem from "./CreateItem/CreateItem";


const Items=(props)=>{
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/items').then((res)=>{
                console.log(res.data)
               props.setItems(res.data)
            })
    }, []);

    useEffect(() => {
       console.log('itemsData',props.itemsData)
        setData(props.itemsData)
    }, [props.itemsData]);


    return<div className={S.Items}>
        <div className={S.ItemsArea}>
            {data.length === 0 ? <></> : data.map(
                i=><OneItem  key={i._id} price={i.price} name={i.fullName}/>)}
        </div>
        <div className={S.NewItem}>
            <CreateItem/>
        </div>
    </div>
}
export default Items;


