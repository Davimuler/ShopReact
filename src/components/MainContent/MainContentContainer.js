import {connect} from "react-redux";
import MainContent from "./MainContent";
import {incrementNotificationCount, UpdateBasketVision} from "../../redux/HeaderReducer";
import {addItemToBuy, deleteItemToBuy, setUsers} from "../../redux/UserReducer";
import {setItems, setSection} from "../../redux/ItemsReducer";
import {getFilteredItems} from "./itemsSelector";


const mapStateToProps=(state)=>{
    return{
        isBasketActive:state.Header.isBasketActive,
        data:state.Users.data,
        // itemsData:state.Items.data,
        itemsData:getFilteredItems(state),
        notificationCount:state.Header.notificationCount,
        itemsToBuy: state.Users.itemsToBuy

    }
}


export const MainContentContainer=connect(mapStateToProps,{setSection,addItemToBuy,deleteItemToBuy,setUsers,incrementNotificationCount,setItems,UpdateBasketVision})(MainContent)