import React from 'react';
import ViewItem from "../../../components/MainContent/viewItem/viewItem";

const WishList = (props) => {
    return (
        <div>
            {!props.isAuth? <>First you should authorize to see your wish list</>:<>
                {!props.wishList.length>0? <>Wish list is empty<div >you can add item to wish list in catalog</div> </>:<>
                    <div>
                        Your wish list
                    </div>
                    {props.wishList.map(i=><ViewItem data={i}/>)}
                </>}
            </>}
        </div>
    );
};

export default WishList;