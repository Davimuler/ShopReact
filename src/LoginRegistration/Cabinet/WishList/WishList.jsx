import React from 'react';
import ViewItem from "../../../components/MainContent/viewItem/viewItem";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const WishList = (props) => {
    return (
        <div>
            {!props.isAuth? <>First you should authorize to see your wish list</>:<>
                {!props.wishList.length>0? <>Wish list is empty<div >you can add item to wish list in catalog</div> </>:<>
                    <div>
                        Your wish list
                    </div>
                    {props.wishList.map(i=><div><ViewItem addItemToView={props.addItemToView} data={i}/>
                        <Link to='/view-product'>  <Button onClick={()=>{props.addItemToView(i)}}>View product</Button></Link>
                    </div>)}
                </>}
            </>}
        </div>
    );
};

export default WishList;