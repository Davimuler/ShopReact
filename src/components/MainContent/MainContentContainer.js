import {connect} from "react-redux";
import MainContent from "./MainContent";
import {UpdateBasketVision} from "../../redux/HeaderReducer";
import {setUsers} from "../../redux/UserReducer";
import {setItems} from "../../redux/ItemsReducer";


const mapStateToProps=(state)=>{
    return{
        isBasketActive:state.Header.isBasketActive,
        data:state.Users.data,
        itemsData:state.Items.data
    }
}


export const MainContentContainer=connect(mapStateToProps,{setUsers,setItems,UpdateBasketVision})(MainContent)