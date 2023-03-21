import React, {useEffect, useState} from "react";
import S from "./FistPage.module.css"
import ContentNav from "../../../Navigation/ContentNav/ContentNav";
import Element from "../../../ShopElement/Element";


const FirstPage = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [data, setData] = useState(props.data);
    useEffect(() => {
        setData(props.data)
    }, [props.data])

    useEffect(() => {

    }, [props.wishList])
    return <div className={S.FirstPage}>
        <div className={S.navbar}>
            <ContentNav setSection={props.setSection}/>
        </div>
        <div className={S.content}>
            {data.length === 0 ? <></> : data.map(
                i => <Element isAuth={props.isAuth}
                              addItemToWishList={props.addItemToWishList} addItemToCompare={props.addItemToCompare}
                              data={i} key={i._id} notificationCount={props.notificationCount}
                              incrementNotificationCount={props.incrementNotificationCount}/>)}
        </div>

    </div>
}

export default FirstPage;