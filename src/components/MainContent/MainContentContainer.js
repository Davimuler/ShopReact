import {connect} from "react-redux";
import MainContent from "./MainContent";
import {incrementNotificationCount, UpdateBasketVision} from "../../redux/HeaderReducer";
import {setUsers} from "../../redux/UserReducer";
import {setItems} from "../../redux/ItemsReducer";


const mapStateToProps=(state)=>{
    return{
        isBasketActive:state.Header.isBasketActive,
        data:state.Users.data,
        itemsData:state.Items.data,
        notificationCount:state.Header.notificationCount
    }
}


export const MainContentContainer=connect(mapStateToProps,{setUsers,incrementNotificationCount,setItems,UpdateBasketVision})(MainContent)