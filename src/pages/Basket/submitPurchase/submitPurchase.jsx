import React from 'react';
import {Button} from "@mui/material";
import S from './submitPurchase.module.css'

const SubmitPurchase = (props) => {
    return (
        <div className={S.submit}>
            <>Total: {props.total}</>
            <Button>Submit purchase</Button>
        </div>
    );
};

export default SubmitPurchase;