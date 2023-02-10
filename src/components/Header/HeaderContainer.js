import Header from "./Header";
import {connect} from "react-redux";
import {UpdateBasketVision} from "../../redux/HeaderReducer";

const mapStateToProps=(state)=>{
    return{
        isBasketActive:state.Header.isBasketActive,

    }
}


export const HeaderContainer=connect(mapStateToProps,{UpdateBasketVision})(Header)