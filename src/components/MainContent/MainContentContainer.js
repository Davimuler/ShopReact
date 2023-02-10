import {connect} from "react-redux";
import MainContent from "./MainContent";
import {UpdateBasketVision} from "../../redux/HeaderReducer";
import {setUsers} from "../../redux/UserReducer";


const mapStateToProps=(state)=>{
    return{
        isBasketActive:state.Header.isBasketActive,
        data:state.Users.data
    }
}


export const MainContentContainer=connect(mapStateToProps,{setUsers,UpdateBasketVision})(MainContent)