import Header from "./Header";
import {connect} from "react-redux";
import {incrementNotificationCount, UpdateBasketVision, UpdateCompareWindowVision} from "../../redux/HeaderReducer";
import {setSearchBar} from "../../redux/ItemsReducer";

const mapStateToProps=(state)=>{
    return{
        isBasketActive:state.Header.isBasketActive,
        notificationCount: state.Header.notificationCount,
        searchBar:state.Items.searchBar,
        isCompareWindowActive:state.Header.isCompareWindowActive,
        UserData:state.Users.UserData
    }
}


export const HeaderContainer=connect(mapStateToProps,{setSearchBar,UpdateCompareWindowVision,incrementNotificationCount,UpdateBasketVision})(Header)