import {connect} from "react-redux";
import MainContent from "./MainContent";
import {incrementNotificationCount, UpdateBasketVision, UpdateCompareWindowVision} from "../../redux/HeaderReducer";
import {
    addItemToBuy,
    addItemToCompare,
    addItemToView, addItemToWishList,
    deleteItemToBuy,
    deleteItemToCompare, logUser,
    setUsers
} from "../../redux/UserReducer";
import {setItems, setSection} from "../../redux/ItemsReducer";
import {getFilteredItems} from "./itemsSelector";


const mapStateToProps = (state) => {
    return {
        isBasketActive: state.Header.isBasketActive,
        data: state.Users.data,
        // itemsData:state.Items.data,
        itemsData: getFilteredItems(state),
        notificationCount: state.Header.notificationCount,
        itemsToBuy: state.Users.itemsToBuy,
        isCompareWindowActive: state.Header.isCompareWindowActive,
        itemsToCompare: state.Users.itemsToCompare,
        itemToView: state.Users.itemToView,
        wishList:state.Users.wishList,
        isAuth:state.Users.isAuth,
        UserData:state.Users.UserData
    }
}


export const MainContentContainer = connect(mapStateToProps, {
    logUser,
    setSection,
    deleteItemToCompare,
    UpdateCompareWindowVision,
    addItemToBuy,
    addItemToCompare,
    deleteItemToBuy,
    setUsers,
    incrementNotificationCount,
    setItems,
    UpdateBasketVision,
    addItemToView,
    addItemToWishList
})(MainContent)