import Header from "./Header";
import {connect} from "react-redux";
import {incrementNotificationCount, UpdateBasketVision} from "../../redux/HeaderReducer";

const mapStateToProps=(state)=>{
    return{
        isBasketActive:state.Header.isBasketActive,
        notificationCount: state.Header.notificationCount,

    }
}


export const HeaderContainer=connect(mapStateToProps,{incrementNotificationCount,UpdateBasketVision})(Header)