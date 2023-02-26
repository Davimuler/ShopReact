import {connect} from "react-redux";
import MainContent from "./MainContent";
import {incrementNotificationCount, UpdateBasketVision} from "../../redux/HeaderReducer";
import {addItemToBuy, deleteItemToBuy, setUsers} from "../../redux/UserReducer";
import {setItems} from "../../redux/ItemsReducer";


const mapStateToProps=(state)=>{
    return{
        isBasketActive:state.Header.isBasketActive,
        data:state.Users.data,
        itemsData:state.Items.data,
        notificationCount:state.Header.notificationCount,
        itemsToBuy: state.Users.itemsToBuy
    }
}


export const MainContentContainer=connect(mapStateToProps,{addItemToBuy,deleteItemToBuy,setUsers,incrementNotificationCount,setItems,UpdateBasketVision})(MainContent)