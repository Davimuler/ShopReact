import React, {useEffect, useState} from 'react';
import S from "./SearchBar.module.css";
import {Button} from "@mui/material";

const SearchBar = (props) => {
    const [value,setValue]=useState('')

const inputHandler=(e)=>{
        setValue(e.target.value)
}
    return (
        <div >
            <input  onBlur={()=>{
                if(value===''){
                    props.setSearchBar(value)
                }
            }
            } onChange={inputHandler} value={value} className={S.Input} placeholder={"I search..."}/>
            <Button onClick={()=>{
                if(value!==''){
                    props.setSearchBar(value)
                }

            }}>Search</Button>
        </div>
    );
};

export default SearchBar;